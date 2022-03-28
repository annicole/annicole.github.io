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
 
  useEffect(()=>{
    getTestimonials().then(data=>{
      setTestimonials(data.results)
      setLoading(false)
    } )
    .catch(handleError);
  },[]);

  const onHadleSortChange = () => {};

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <div className="relative overflow-x-auto rounded-lg shadow-[0_4px_42px_0px_rgba(79,114,205,0.15)] mx-6 mt-3 mb-6">
      <div className="p-4 border-b">
        <div className="flex flex-row justify-between flex-nowrap">
          <div className="flex flex-row flex-1">
            <DropDownLanguage />
            <SearchInput />
          </div>
          <div className="flex">
            <DropDownSort
              name="recent"
              value="recent"
              onChange={onHadleSortChange}
            />
          </div>
        </div>
      </div>
      {loading ? <TableLoading /> : <TestimonialsTable testimonials={testimonials}/> }
      <Footer />
    </div>
  );
}
