import { useState } from "react";
import dayjs from "dayjs";
import "./index.css";

export default function App() {
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
    <div className="App">
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

      <dialog
        open={dialog.open}
        style={{
          maxWidth: 400,
          width: "100%",
          marginInline: "auto",
        }}
      >
        <div className="dialogHeader">
          <strong>Add an event</strong>
          <button
            onClick={() => {
              setDialog({ open: false, _date: null });
              setOffset(3);
            }}
          >
            close
          </button>
        </div>

        <div className="events">
          {data
            ?.filter((d) => d.date === dialog._date)
            .map((_d, i) => {
              return (
                <>
                  <div>
                    {i < offset && (
                      <details key={i}>
                        <summary>
                          {_d.title}{" "}
                          <span className="type-pill">
                            {_d._type}
                          </span>
                        </summary>
                        <p style={{ display: "flex", gap: "1rem" }}>
                          <div>Start: {_d.startTime}</div>
                          <div>End: {_d.endTime}</div>
                        </p>

                        <div>Description: {_d.description}</div>
                      </details>
                    )}
                  </div>

                  <div>
                    {i > offset && (
                      <button
                        className="show-more-btn"
                        onClick={() =>
                          setOffset(
                            data?.filter(
                              (d) => d.date === dialog._date
                            ).length
                          )
                        }
                      >
                        Show more
                      </button>
                    )}
                  </div>
                </>
              );
            })}
        </div>

        <form className="dialogForm" onSubmit={handleEventAddition}>
          <input
            placeholder="event title"
            value={event.title}
            onChange={(e) =>
              setEvent({ ...event, title: e.target.value })
            }
          />
          <textarea
            placeholder="event description"
            rows={3}
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
          ></textarea>
          <div className="radio-group">
            <label htmlFor="event">
              <input
                id="event"
                type="radio"
                value="event"
                checked={event._type === "event"}
                onChange={(e) =>
                  setEvent({ ...event, _type: e.target.value })
                }
              />
              <span>Event</span>
            </label>
            <label htmlFor="reminder">
              <input
                id="reminder"
                type="radio"
                value="reminder"
                checked={event._type === "reminder"}
                onChange={(e) =>
                  setEvent({ ...event, _type: e.target.value })
                }
              />
              <span>Reminder</span>
            </label>
          </div>

          <div className="time-group">
            <label htmlFor="startTime">
              <span>Start time</span>
              <input
                id="startTime"
                type="time"
                value={event.startTime}
                onChange={(e) =>
                  setEvent({ ...event, startTime: e.target.value })
                }
              />
            </label>
            <label htmlFor="endTime">
              <span>End time</span>
              <input
                id="endTime"
                type="time"
                value={event.endTime}
                onChange={(e) =>
                  setEvent({ ...event, endTime: e.target.value })
                }
              />
            </label>
          </div>

          <button type="submit">Add event</button>
        </form>
      </dialog>
    </div>
  );
}
