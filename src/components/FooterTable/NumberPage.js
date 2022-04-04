import React from "react";
export default function NumberPage({ page, totalPages }) {
    console.log(totalPages)
  return (
    <ul className="flex flex-row items-center justify-between ">
      <li>
        <button
          className={` ${
            page === 1
              ? "bg-indigo-100 border-slate-400"
              : "bg-white border-slate-200 "
          } my-3 py-2 px-4 box-border rounded border border-solid `}
        >
          <p className="text-sm font-medium text-indigo-800">1</p>
        </button>
      </li>
      {(page === 1  && totalPages >= 2)&& (
        <>
          <li>
            <button className="my-3 py-2 px-4 box-border bg-white rounded border border-solid border-slate-200">
              <p className="text-sm font-medium text-indigo-800">{page + 1}</p>
            </button>
          </li>
          <li>
            <button className="my-3 py-2 px-4 box-border bg-white rounded border border-solid border-slate-200">
              <p className="text-sm font-medium text-indigo-800">{page + 2}</p>
            </button>
          </li>
        </>
      )}
      {totalPages !== 1 && totalPages > 3 && (
        <li>
          ...
          <button
            className={` ${
              page === totalPages
                ? "bg-violet-100 border-slate-400"
                : "bg-white border-slate-200 "
            }my-3 py-2 px-4 box-border bg-white rounded border border-solid border-slate-200`}
          >
            <p className="text-sm font-medium text-indigo-700">{totalPages}</p>
          </button>
        </li>
      )}
    </ul>
  );
}
