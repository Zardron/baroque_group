import { useMonth } from "@datepicker-react/hooks";
import Day from "./Day";

function Month({ year, month, firstDayOfWeek }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <div>
      <div
        style={{
          margin: "0 0 16px",
          font: "normal normal medium 16px/24px Quicksand",
          letterSpacing: "0.8px",
          color: "#000000",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(128, 128, 128, 0.3)"
        }}
      >
        {monthLabel}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
          marginBottom: "10px",
          font: "normal normal medium 14px/24px Quicksand",
          letterSpacing: "0.7px",
        }}
      >
        {weekdayLabels.map((dayLabel) => (
          <div style={{ textAlign: "center" }} key={dayLabel}>
            {dayLabel}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
          font: "normal normal medium 14px/24px Quicksand",
          letterSpacing: "0.7px",
        }}
      >
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <div key={index} />;
        })}
      </div>
    </div>
  );
}

export default Month;
