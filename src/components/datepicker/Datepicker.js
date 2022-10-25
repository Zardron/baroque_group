import { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import Month from "./Month";
import NavButton from "./NavButton";
import DatepickerContext from "./datepickerContext";
import Filter from "../Filter";
import NextButton from "./NextButton";

function Datepicker({ startDates, endDates }) {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
  });

  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      {/* <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div> */}

      <div
        style={{ width: "300px", display: "flex", alignItems: "center", paddingTop: "10px", borderBottom: "1px solid rgba(128, 128, 128, 0.3)" }}
      >
        <div style={{ width: "100px", display: "flex", alignItems: "center" }}>
          <NavButton onClick={goToPreviousMonths} />
          {activeMonths[0].year === 2010 ? <span>2010</span> : ""}
          {activeMonths[0].year === 2011 ? <span>2011</span> : ""}
          {activeMonths[0].year === 2012 ? <span>2012</span> : ""}
          {activeMonths[0].year === 2013 ? <span>2013</span> : ""}
          {activeMonths[0].year === 2014 ? <span>2014</span> : ""}
          {activeMonths[0].year === 2015 ? <span>2015</span> : ""}
          {activeMonths[0].year === 2016 ? <span>2016</span> : ""}
          {activeMonths[0].year === 2017 ? <span>2017</span> : ""}
          {activeMonths[0].year === 2018 ? <span>2018</span> : ""}
          {activeMonths[0].year === 2019 ? <span>2019</span> : ""}
          {activeMonths[0].year === 2020 ? <span>2020</span> : ""}
          {activeMonths[0].year === 2021 ? <span>2021</span> : ""}
          {activeMonths[0].year === 2022 ? <span>2022</span> : ""}
          {activeMonths[0].year === 2023 ? <span>2023</span> : ""}
          {activeMonths[0].year === 2024 ? <span>2024</span> : ""}
          {activeMonths[0].year === 2025 ? <span>2025</span> : ""}
          {activeMonths[0].year === 2026 ? <span>2026</span> : ""}
          {activeMonths[0].year === 2027 ? <span>2027</span> : ""}
          {activeMonths[0].year === 2028 ? <span>2028</span> : ""}
          {activeMonths[0].year === 2029 ? <span>2029</span> : ""}
          {activeMonths[0].year === 2030 ? <span>2030</span> : ""}
          <NextButton onClick={goToNextMonths} />
        </div>

        <div style={{paddingLeft: "10px", paddingRight: "20px", display: "flex", alignItems: "center", paddingBottom: "5px"}}>
            <span>|</span>
        </div>

        <div style={{display: "flex", alignItems: "center" }}>
          <NavButton onClick={goToPreviousMonths} />
          {activeMonths[0].month === 1 ? (
            <span
              style={{
                font: "normal normal medium 16px/24px Quicksand",
                letterSpacing: " 0.8px",
              }}
            >
              MARCH
            </span>
          ) : (
            ""
          )}
          {activeMonths[0].month === 3 ? (
            <span
              style={{
                font: "normal normal medium 16px/24px Quicksand",
                letterSpacing: " 0.8px",
              }}
            >
              MAY
            </span>
          ) : (
            ""
          )}
          {activeMonths[0].month === 5 ? (
            <span
              style={{
                font: "normal normal medium 16px/24px Quicksand",
                letterSpacing: " 0.8px",
              }}
            >
              JULY
            </span>
          ) : (
            ""
          )}
          {activeMonths[0].month === 7 ? (
            <span
              style={{
                font: "normal normal medium 16px/24px Quicksand",
                letterSpacing: " 0.8px",
              }}
            >
              SEPTEMBER
            </span>
          ) : (
            ""
          )}
          {activeMonths[0].month === 9 ? (
            <span
              style={{
                font: "normal normal medium 16px/24px Quicksand",
                letterSpacing: " 0.8px",
              }}
            >
              NOVEMBER
            </span>
          ) : (
            ""
          )}
          {activeMonths[0].month === 11 ? (
            <span
              style={{
                font: "normal normal medium 16px/24px Quicksand",
                letterSpacing: " 0.8px",
              }}
            >
              JANUARY
            </span>
          ) : (
            ""
          )}
          <NextButton onClick={goToNextMonths} />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          margin: "15px 0 0",
          gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
          gridGap: "0 64px",
        }}
      >
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;
