import React from "react";

import testimonials1 from "../../assets/testimonials1.svg";
import zigzagIcon from "../../assets/zigzagIcon.svg";
import Tag from "../utils/Tag";

export default function TestimonialsContent() {
  return (
    <div className="flex  flex-col justify-center items-center p-0 pt-14">
      <span>
        <img src={testimonials1} />
      </span>
      <div className="mt-4 flex flex-row justify-center items-center ">
        <Tag number={47} />
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
