import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import arrowNext from "../../assets/arrowNext.svg";

export default function Footer({onChangePage}) {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-4">
      <button onClick={() =>onChangePage(-1)} className="bg-white rounded-md border border-solid border-inherit shadow-[0_1px_0px_1px_rgba(203,201,217,0.6)] flex items-center p-2 ">
          <img src={arrowBack} className="flex-none order-1" />
          <span className="flex-none order-2 mx-2 flex-grow-0 text-sm font-medium not-italic text-indigo-900">Previous</span>
      </button>
      <div></div>
      <button onClick={() =>onChangePage(1)} className="bg-white rounded-md border border-solid border-inherit shadow-[0_1px_0px_1px_rgba(203,201,217,0.6)] flex p-2 items-center">
          <img src={arrowNext} className="flex-none order-2" />
          <span className="flex-none order-1 mx-2 flex-grow-0 text-sm  font-medium not-italic text-indigo-900">Next</span>
      </button>
    </div>
  );
}
