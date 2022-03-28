import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import arrowNext from "../../assets/arrowNext.svg";
import clsx from "clsx";

export default function Footer({onChangePage,page,totalPages}) {
  const buttonActive= 'bg-white rounded-md border border-solid border-inherit shadow-[0_1px_0px_1px_rgba(203,201,217,0.6)] flex items-center p-2'
  const buttonInactive = 'bg-[#E0E0ED] rounded-md border border-solid border-inherit flex items-center p-2'
  const buttonBack = clsx(buttonActive, {
    [buttonInactive]: page === 1,
  });

  const buttonNext = clsx(buttonActive, {
    [buttonInactive]: page === totalPages,
  });

  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 border-t">
      <button disabled={page===1} onClick={() =>onChangePage(-1)} className={buttonBack}>
          <img src={arrowBack} className="flex-none order-1" />
          <span className="flex-none order-2 mx-2 flex-grow-0 text-sm font-medium not-italic text-indigo-900">Previous</span>
      </button>
      <div>
        <ul>
          <li>
            <button className="my-3 py-2 px-4 box-border bg-white rounded border border-solid border-slate-200">1</button>
          </li>
        </ul>
      </div>
      <button disabled={page === totalPages} onClick={() =>onChangePage(1)} className={buttonNext}>
          <img src={arrowNext} className="flex-none order-2" />
          <span className="flex-none order-1 mx-2 flex-grow-0 text-sm  font-medium not-italic text-indigo-900">Next</span>
      </button>
    </div>
  );
}
