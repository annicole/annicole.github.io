import React from "react";

export default function ButtonPagination({
  disabled,
  onChangePage,
  classButton,
  arrowIcon,
  orderIcon,
  text,
  nextPage
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onChangePage(nextPage)}
      className={classButton}
    >
      <img src={arrowIcon} className={`flex-none order-${orderIcon}`} />
      <span className={`flex-none order-${orderIcon == 1 ? 2 : 1} mx-2 flex-grow-0 text-sm font-medium not-italic text-indigo-900`}>
        {text}
      </span>
    </button>
  );
}
