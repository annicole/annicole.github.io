import React from "react";
import allLanguages from "../../assets/allLanguages.svg";
import Tag from "../utils/Tag";
import { LANGUAGES } from "../../utils/languages";

export default function RowLanguage({language,value,selectedTrack,onTrackChange}) {


  const getImage = (l) =>{
    let srcImage= LANGUAGES[l];
    if(l === "All") return <img className="mx-3 w-8 h-8" src={allLanguages} />
    else return <img className="mx-3 w-8 h-8" src={srcImage} />
  }

  return (
    <li key={language}>
      <button
        className="flex flex-row justify-between items-center w-full px-3 py-2 hover:bg-gray-100"
        onClick={()=>onTrackChange(language)}
      >
        <input
          id="country-option-1"
          type="radio"
          name="countries"
          value="USA"
          checked={selectedTrack === language}
          className="w-6 h-6 m-3 p-2 bg-gray-100 rounded-full border-gray-300 "
        ></input>
        <span className="flex flex-row items-center w-full">
          {getImage(language)}
          <span className="text-base font-medium not-italic">{language} </span>
        </span>
        <Tag number={value} />
      </button>
    </li>
  );
}
