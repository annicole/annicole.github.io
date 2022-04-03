import React from "react";
import arrowRigth from "../../assets/arrowRigth.svg";
import { Link } from "react-router-dom"
import RowDate from "./RowDate";

export default function TestimonialsTable({ testimonials }) {

  const handleRow = (id)=>{
    return <Link
    to={{
      pathname: "/testimonial",
      id: id
    }}
  />
  } 

  return (
    <div className="overflow-y-scroll max-h-80">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        {testimonials.map((row) => {
          return (
            <tr  onClick={()=>handleRow(row.id)} key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
              <td className="w-12 h-8 px-2">
                <div className="flex items-center">
                  <img className="mx-2" src={row.track.icon_url} />
                </div>
              </td>
              <td
                className="px-6 py-3 font-medium flex flex-row items-start whitespace-nowrap"
              >
                <img className="w-10 h-10 flex rounded-full" src={row.mentor.avatar_url} />
                <div className="mx-4 flex flex-col items-start">
                  <p className="font-medium text-base not-italic font-sans text-black">{row.mentor.handle}</p>
                  <p className="font-normal text-sm not-italic font-sans text-indigo-800">on {row.exercise.title} in {row.track.title}</p>
                </div>
              </td>
              <td className="px-6 py-2 font-normal text-sm not-italic font-sans text-slate-700">{row.content}</td>
              <td className="pl-6 py-2 w-28">
                <RowDate date={row.created_at} />
              </td>
              <td className="px-6 py-2 text-right">
                 <img className="mx-3" src={arrowRigth}/>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
