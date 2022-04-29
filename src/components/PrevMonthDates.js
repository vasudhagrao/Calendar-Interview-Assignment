import dayjs from "dayjs";
import React, { Component } from "react";

export default function PrevMonthDates({ date }) {
  // for handling previous month dates in current calendar
  const _startDay = date.date(1).day();
  const _totalDaysInPrevMonth = date.subtract(1, "month").daysInMonth();
  const _prevMonthDates = Array.from(Array(_totalDaysInPrevMonth).keys())
    .slice(_totalDaysInPrevMonth - _startDay, _totalDaysInPrevMonth)
    .map((d) => d + 1);

  return (
    <>
      {/* previous month */}
      {_prevMonthDates.map((d, i) => {
        const _prevMonth = date.subtract(1, "month");

        return (
          <span
            key={i}
            className={`normal prev ${
              _prevMonth.date(d).day() === 0 ? "sunday" : ""
            }`}
            style={{
              gridColumn:
                dayjs(
                  `${_prevMonth.month() + 1}-${d}-${_prevMonth.year()}`
                ).day() + 1,
            }}
          >
            {d}
          </span>
        );
      })}
    </>
  );
}
