import { useRef, useContext } from "react";
import { useDay } from "@datepicker-react/hooks";
import DatepickerContext from "./datepickerContext";
import getColor from "../utils/getColor";
import getBorder from "../utils/getBorder";

function Day({ dayLabel, date }) {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isSelectedStart,
    isSelectedEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  const getBorderFn = getBorder(
    isSelected,
    isSelectedStart,
    isSelectedEnd,
    isWithinHoverRange,
    disabledDate
  );

  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      style={{
        padding: "8px",
        border: 0,
        font: "normal normal medium 14px/24px Quicksand",
        letterSpacing: "0.7px",
        color: getColorFn({
          selectedFirstOrLastColor: "#FFFFFF",
          normalColor: "#001217",
          selectedColor: "#FFFFFF",
          rangeHoverColor: "#FFFFFF",
          disabledColor: "#808285"
        }),
        background: getColorFn({
          selectedFirstOrLastColor: "#768A9A",
          normalColor: "#FFFFFF",
          selectedColor: "#768A9A",
          rangeHoverColor: "#768A9A",
          disabledColor: "#FFFFFF"
        }),
        borderRadius: getBorderFn({
            selectedFirst: "0px 18px 18px 0px",
            selectedLast: "0px 18px 18px 0px",
          })
      }}
    >
      {dayLabel}
    </button>
  );
}

export default Day;
