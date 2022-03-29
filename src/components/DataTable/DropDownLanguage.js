import React, { useState } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import languageIcon from "../../assets/languageIcon.svg";
import allLanguages from "../../assets/allLanguages.svg";
import Tag from "../utils/Tag";

export function DropDownLanguage({tracks}) {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);
  console.log(tracks)
  return (
    <>
      <div className="mr-3">
        <button
          onClick={toggleOpen}
          id="dropdownDefault"
          className="flex flex-row justify-center items-center "
        >
          <img src={languageIcon} />
          <img className="mx-2" src={arrowDown} />
        </button>
      </div>

      <div
        id="dropdown"
        className={`${
          dropdown ? "show" : "hidden"
        } z-10 absolute mt-12 w-80 h-80 p-2 bg-white rounded-lg divide-y divide-gray-100 shadow`}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          {
            tracks.forEach((key)=>{
          return (<li>
            <button key={key}
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
              <Tag number='1' />
            </button>
          </li>)
})}
        </ul>
      </div>
    </>
  );
}
