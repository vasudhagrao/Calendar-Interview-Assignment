import { useState } from "react";
import dayjs from "dayjs";
import "./Calendar.css";
import Eventbox from "./Eventbox";

export default function Calendar() {
  const [date, setDate] = useState(dayjs());
  const [dialog, setDialog] = useState({
    open: false,
    _date: null,
  });
  const [data, setData] = useState([]);

  const [event, setEvent] = useState({
    date: null,
    title: "",
    description: "",
    _type: "",
    startTime: null,
    endTime: null,
    timestamp: "",
  });

  const [offset, setOffset] = useState(3);

  const handleEventAddition = (e) => {
    e.preventDefault();

    setData([
      {
        date: dialog._date,
        title: event.title,
        description: event.description,
        _type: event._type,
        startTime: event.startTime,
        endTime: event.endTime,
      },
      ...data,
    ]);

    setEvent({
      date: null,
      title: "",
      description: "",
      isEvent: "",
      startTime: null,
      endTime: null,
    });
  };
  function deleteEvent(temp) {
    console.log(temp);
  }
  const handleBeforeMonth = () => setDate(date.subtract(1, "month"));
  const handleAfterMonth = () => setDate(date.add(1, "month"));

  // for handling previous month dates in current calendar
  const _startDay = date.date(1).day();
  const _totalDaysInPrevMonth = date
    .subtract(1, "month")
    .daysInMonth();
  const _prevMonthDates = Array.from(
    Array(_totalDaysInPrevMonth).keys()
  )
    .slice(_totalDaysInPrevMonth - _startDay, _totalDaysInPrevMonth)
    .map((d) => d + 1);

  // for handling next month dates in current calendar
  const _endDay = date.date(date.daysInMonth()).day();
  const _totalDaysInNextMonth = date.add(1, "month").daysInMonth();
  const _nextMonthDates = Array.from(
    Array(_totalDaysInNextMonth).keys()
  )
    .slice(0, 6 - _endDay)
    .map((d) => d + 1);
  return (
    <div className="Calendar">
      <section className="calendar">
        <div className="year">{date.get("year")}</div>
        <div className="month">
          <button
            className="chevronButton"
            onClick={handleBeforeMonth}
          >
            &lt;
          </button>
          <span>{date.format("MMMM")}</span>
          <button
            className="chevronButton"
            onClick={handleAfterMonth}
          >
            &gt;
          </button>
        </div>

        <div className="days">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span className="normal" key={i}>
              {d}
            </span>
          ))}
        </div>
        <div className="days">
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
                      `${
                        _prevMonth.month() + 1
                      }-${d}-${_prevMonth.year()}`
                    ).day() + 1,
                }}
              >
                {d}
              </span>
            );
          })}

          {/* current month */}
          {Array.from(Array(date.daysInMonth()).keys()).map(
            (i, _i) => (
              <span
                key={_i}
                className={`${
                  i + 1 === date.get("date") &&
                  date.get("month") === dayjs().get("month")
                    ? "today"
                    : date.date(i + 1).day() === 0
                    ? "sunday"
                    : ""
                } ${
                  data.filter(
                    (d) =>
                      dayjs(d.date).diff(
                        dayjs(
                          `${date.get("month") + 1}-${
                            i + 2
                          }-${date.get("year")}`
                        ).toString()
                      ) === 0
                  ).length > 0
                    ? "hasEvent"
                    : ""
                } normal`}
                style={{
                  gridColumn:
                    dayjs(
                      `${date.get("month") + 1}-${i + 1}-${date.get(
                        "year"
                      )}`
                    ).get("day") + 1,
                }}
                onClick={() => {
                  setDialog({
                    open: true,
                    _date: dayjs(
                      `${date.get("month") + 1}-${i + 2}-${date.get(
                        "year"
                      )}`
                    ).toString(),
                  });
                }}
              >
                {i + 1}
              </span>
            )
          )}

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
                      `${
                        _nextMonth.month() + 1
                      }-${d}-${_nextMonth.year()}`
                    ).day() + 1,
                }}
              >
                {d}
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}
