import dayjs from "dayjs";
import React, { Component } from "react";

export default function NextMonthDates({ date }) {
  // for handling next month dates in current calendar
  const _endDay = date.date(date.daysInMonth()).day();
  const _totalDaysInNextMonth = date.add(1, "month").daysInMonth();
  const _nextMonthDates = Array.from(Array(_totalDaysInNextMonth).keys())
    .slice(0, 6 - _endDay)
    .map((d) => d + 1);

  return (
    <>
      {/* next month */}
      {_nextMonthDates.map((d, i) => {
        const _nextMonth = date.add(1, "month");

        return (
          <span
            key={i}
            className={`normal next ${
              _nextMonth.date(d).day() === 0 ? "sunday" : ""
            }`}
            style={{
              gridColumn:
                dayjs(
                  `${_nextMonth.month() + 1}-${d}-${_nextMonth.year()}`
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
