import React from "react";
import arrowDown from "../../assets/arrowDown.svg";
import languageIcon from "../../assets/languageIcon.svg";

export function DropDownLanguage() {
  return (
    <div className="mr-3">
      <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="flex flex-row justify-center items-center">
        <img src={languageIcon} />
        <img className="mx-2" src={arrowDown} />
      </button>
     
    </div>
  );
}
