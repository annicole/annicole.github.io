import React from "react";
import logo from "../../assets/exercismIcon.svg";
import ExercismText from "../../assets/exercismText.svg";
import navBar from "../../assets/navBar.svg";
import media1 from "../../assets/media1.svg";
import media2 from "../../assets/media2.svg";
import badge from "../../assets/badge.svg";
import doots from "../../assets/doots.svg";
import avatar from "../../assets/avatar.svg";
import notification from "../../assets/notification.svg";

export default function Header() {
  return (
    <nav className=" px-2 sm:px-4  bg-white inset-0 w-full h-16 top-0 left-0 border-b border-indigo-300 border-solid ">
      <div className="container flex whitespace-nowrap t items-center mx-auto justify-between">
        <div className="flex items-center justify-between">
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
        </div>
        <div className="flex items-center flex-row pl-3 pr-2">
          <ul className="flex justify-between md:flex-row  md:text-sm md:font-medium">
            <li className="pt-2.5 px-4">
              <button className="pt-2">
                <img src={media1} />
              </button>
            </li>
            <li className="pt-2.5 px-4">
              <button className="pt-2">
                <img src={media2} />
              </button>
            </li>
            <li >
              <button className="relative inline-block">
                <img src={notification} />
                <div className="absolute top-5 right-0 inline-block transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full h-5 w-5">
                  <p className="text-xs text-center text-white font-semibold tracking-wider">2</p>
                </div>
              </button>
            </li>
            <li className="pt-2.5 px-4">
              <div className="relative inline-block pt-1">
                <img src={badge} />
                <div className="absolute top-1 right-0 inline-block transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full border-4 box-border border-solid border-white h-5 w-5"></div>
              </div>
            </li>
            <li className="pt-2.5 px-4">
              <button className="pt-1">
                <img src={avatar} />
              </button>
            </li>
            <li className="pt-2 px-4">
              <button className="pt-4">
                <img src={doots} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
