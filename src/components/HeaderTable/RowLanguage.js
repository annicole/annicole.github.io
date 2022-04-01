import React from "react";
export default function RowLanguage() {
  return (
    <li>
      <button
        key={key}
        className="flex flex-row justify-between items-center w-full px-3 py-2 hover:bg-gray-100"
      >
        <input
          id="country-option-1"
          type="radio"
          name="countries"
          value="USA"
          className="w-6 h-6 m-3 p-2 bg-gray-100 rounded-full border-gray-300 "
          checked
        ></input>
        <span className="flex flex-row items-center w-full">
          <img className="mx-3" src={allLanguages} />
          <span className="text-base font-medium not-italic"> {key} </span>
        </span>
        <Tag number="1" />
      </button>
    </li>
  );
}
