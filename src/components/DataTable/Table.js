import React, { useEffect, useState } from "react";
import { getTestimonials } from "../../api/testimonials";
import { DropDownLanguage } from "./DropDownLanguage";
import DropDownSort from "./DropDownSort";
import Footer from "./Footer";
import SearchInput from "./SearchInput";
import TableLoading from "./TableLoading";
import TestimonialsTable from "./TestimonialsTable";

export default function Table() {
  const [errorState, setErrorState] = useState({ hasError: false });
  const [testimonials,setTestimonials] = useState([])
  const [loading,setLoading] = useState(true)
  const [valueSort,setValueSort] = useState("oldest_first")
  const [textSearch,setTextSearch] = useState("")
  const [page,setPage] = useState(1)
  const [pagination,setPagination] = useState({})
 
  useEffect(()=>{
    getTestimonials(page,valueSort,textSearch).then(data=>{
      setTestimonials(data.results)
      setPagination(data.pagination)
      setLoading(false)
    } )
    .catch(handleError);
  },[valueSort,textSearch,pagination]);

  const onHadleSortChange = (e) => {
    setLoading(true)
    setValueSort(e.target.value)
  };

  const onHandleInputChange = (event) =>{
    event.preventDefault();
    const text = event.target.value;
    console.log(event.target.value)
    setTextSearch(text);
  }

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  const onChangePage = (next) =>{
    console.log('entro')
    if(!pagination.current_page && page + next <= 0 ) return;
    if(!pagination.current_page && page + next >= pagination.total_pages) return;
    setPage(page +next)
    console.log(page)
  }

  return (
    <div className="relative overflow-x-auto rounded-lg shadow-[0_4px_42px_0px_rgba(79,114,205,0.15)] mx-6 mt-3 mb-6">
      <div className="p-4 border-b">
        <div className="flex flex-row justify-between flex-nowrap">
          <div className="flex flex-row flex-1">
            <DropDownLanguage />
            <SearchInput handleChange={onHandleInputChange} />
          </div>
          <div className="flex">
            <DropDownSort
              name="sortDropDown"
              value={valueSort}
              handleChange={onHadleSortChange}
            />
          </div>
        </div>
      </div>
      {loading ? <TableLoading /> : <TestimonialsTable testimonials={testimonials}/> }
      <Footer onChangePage={onChangePage} />
    </div>
  );
}
