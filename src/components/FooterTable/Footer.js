import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import arrowNext from "../../assets/arrowNext.svg";
import clsx from "clsx";
import ButtonPagination from "./ButtonPagination";
import NumberPage from "./NumberPage";

export default function Footer({ onChangePage, page, totalPages }) {
  const buttonActive =
    "bg-white rounded-md border border-solid border-inherit shadow-[0_1px_0px_1px_rgba(203,201,217,0.6)] flex items-center p-2";
  const buttonInactive =
    "bg-[#E0E0ED] rounded-md border border-solid border-inherit flex items-center p-2";
  const buttonBack = clsx(buttonActive, {
    [buttonInactive]: page === 1,
  });

  const buttonNext = clsx(buttonActive, {
    [buttonInactive]: page === totalPages,
  });

  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 border-t">
      <ButtonPagination
        nextPage={-1}
        disabled={page === 1}
        arrowIcon={arrowBack}
        onChangePage={onChangePage}
        classButton={buttonBack}
        text={"Previous"}
        orderIcon={2}
      />
      <div>
        <NumberPage page={page} totalPages={totalPages} />
      </div>
      <ButtonPagination
        nextPage={1}
        disabled={page === totalPages}
        arrowIcon={arrowNext}
        onChangePage={onChangePage}
        classButton={buttonNext}
        text={"Next"}
        orderIcon={1}
      />
    </div>
  );
}
