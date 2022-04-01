import React from "react";

export default function SearchInput({handleChange}) {
  return (
    <div className="relative mt-1">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M14.5404 18.8028C18.6351 17.0625 20.5438 12.3324 18.8036 8.2376C17.0634 4.14284 12.3332 2.23412 8.23843 3.97435C4.14367 5.71458 2.23495 10.4448 3.97518 14.5395C5.71541 18.6343 10.4456 20.543 14.5404 18.8028Z"
            stroke="#5C5589"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0853 17.0844L23.3333 23.3333"
            stroke="#5C5589"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search"
        onChange={handleChange}
        className="bg-slate-100 border rounded-md border-gray-300 text-gray-900 text-sm  block w-80 pl-10 p-2.5 focus:bg-white focus:border focus:border-indigo-400 focus:rounded focus:shadow-[0_0_2px_2px_rgba(46,87,232,0.25)] "
        placeholder="Filter by exercise title"
      />
    </div>
  );
}
