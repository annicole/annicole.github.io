import React from "react";
import { usePagination, DOTS } from "../utils/usePagination";
export default function Pagination({
  currentPage,
  totalPages,
  siblingCount = 1,
  onPageChange
}) {

  const paginationRange = usePagination({
    totalPages,
    siblingCount,
    currentPage
  });

  if (currentPage === 0 || paginationRange?.length < 1) {
    return null;
  }

  return (
    <ul className="flex flex-row items-center justify-between ">
      {paginationRange?.map((pageNumber,i) => {
        if (pageNumber === DOTS) {
          return <li  key={i} className="text-sm font-medium text-indigo-800 mx-3">&#8230;</li>;
        }
        return (
          <li key={i} className="mx-1">
            <button
              className={` ${
                currentPage === pageNumber
                  ? "bg-indigo-100 border-slate-400"
                  : "bg-white border-slate-200 "
              } my-3 py-2 px-4 box-border rounded border border-solid `}
              onClick={() => onPageChange(pageNumber)}
            >
              <p className="text-sm font-medium text-indigo-800">
                {pageNumber}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
