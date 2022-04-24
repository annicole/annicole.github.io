import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import arrowNext from "../../assets/arrowNext.svg";
import clsx from "clsx";
import ButtonPagination from "./ButtonPagination";
import Pagination from "./Pagination";

export default function Footer({
  onPageChange,
  currentPage,
  totalPages,
  loading,
}) {
  const buttonActive =
    "bg-white rounded-md border border-solid border-inherit shadow-[0_1px_0px_1px_rgba(203,201,217,0.6)] flex items-center p-2";
  const buttonInactive =
    "bg-[#E0E0ED] rounded-md border border-solid border-inherit flex items-center p-2";
  const buttonBack = clsx(buttonActive, {
    [buttonInactive]: currentPage === 1,
  });

  const buttonNext = clsx(buttonActive, {
    [buttonInactive]: currentPage === totalPages,
  });

  const onButtonPaginationHandle = (next) => {
    if (currentPage + next <= 0) return;
    if (currentPage + next >= totalPages) return;

    onPageChange(currentPage + next);
  };
  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 border-t">
      {loading ? (
        <></>
      ) : (
        <>
          <ButtonPagination
            nextPage={-1}
            disabled={currentPage === 1}
            arrowIcon={arrowBack}
            onPageChange={onButtonPaginationHandle}
            classButton={buttonBack}
            text={"Previous"}
            orderIcon={2}
          />
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
          <ButtonPagination
            nextPage={1}
            disabled={currentPage === totalPages}
            arrowIcon={arrowNext}
            onPageChange={onButtonPaginationHandle}
            classButton={buttonNext}
            text={"Next"}
            orderIcon={1}
          />
        </>
      )}
    </div>
  );
}
