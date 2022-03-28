import React from "react";
import logo from "../../assets/exercismIcon.svg";
import ExercismText from "../../assets/exercismText.svg";
import navBar from "../../assets/navBar.svg";
import media1 from "../../assets/media1.svg";
import media2 from "../../assets/media2.svg";
import doots from "../../assets/doots.svg";
import avatar from "../../assets/avatar.svg";

export default function Header() {
  return (
    <nav className=" px-2 sm:px-4  bg-white inset-0 w-full h-16 top-0 left-0 border-b border-indigo-300 border-solid ">
      <div className="container flex flex-wrap t items-center mx-auto">
        <a href="" className="flex items-center py-2.5">
          <img src={logo} class="mr-3 h-6 sm:h-9 pt-2" />
          <img
            className="self-center text-xl font-semibold whitespace-nowrap"
            src={ExercismText}
          />
        </a>
        <div className="w-full md:block md:w-auto px-8" id="mobile-menu">
          <img src={navBar} />
        </div>
        <div className="flex items-end justify-between">
          <ul className="flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="">
                <img src={media1} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={media2} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={media2} />
              </a>
            </li>
            <li>
                <button>
                    <img src={avatar}/>
                </button>
            </li>
            <li>
                <button>
                    <img src={doots}/>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
