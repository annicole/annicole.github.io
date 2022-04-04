import React, { useState } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import languageIcon from "../../assets/languageIcon.svg";

import RowLanguage from "./RowLanguage";

export default function DropDownLanguage({ tracks,selectedTrack,onTrackChange ,dropdown,setDropdown}) {
  const toggleOpen = () => setDropdown(!dropdown);
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
        } z-10 absolute mt-12 w-80 h-72 p-2 bg-white rounded-lg divide-y divide-gray-100 shadow`}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll max-h-64 ">
          {tracks.map(track => {
            return (
                <RowLanguage language={track[0]} value={track[1]} selectedTrack={selectedTrack} onTrackChange={onTrackChange}/>
            );
          })}
        </ul>
      </div>
    </>
  );
}
