import React from "react";

import testimonials1 from "../../assets/testimonials1.svg";
import zigzagIcon from "../../assets/zigzagIcon.svg";

export default function TestimonialsContent() {
  return (
    <div className="flex  flex-col justify-center items-center p-0 pt-14">
      <span>
        <img src={testimonials1} />
      </span>
      <div className="mt-4 flex flex-row justify-center items-center ">
        <span className="flex-none order-1 flex-grow mx-4  text-3x box-border border-solid border rounded-[100px] ">
          <p className="font-normal text-xs flex-grow-0 order-1 mx-2 text-indigo-800">
            47
          </p>
        </span>
        <span className="font-bold text-center font-sans text-3xl">
          Testimonials I’ve left
        </span>
      </div>
      <span className="my-4">
          <img src={zigzagIcon} />
        </span>
    </div>
  );
}
