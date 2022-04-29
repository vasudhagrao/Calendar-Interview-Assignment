import React, { Component } from "react";

export default function Dialog({
  dialog,
  setDialog,
  offset,
  setOffset,
  data,
  event,
  setData,
  setEvent,
}) {
  const handleEventAddition = (e) => {
    e.preventDefault();

    if (
      !event.title ||
      !event.description ||
      !event._type ||
      !event.startTime ||
      !event.endTime
    ) {
      alert("Please enter all fields");
      return;
    }

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

  return (
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
                      <summary style={{ cursor: "pointer" }}>
                        {_d.title} <span className="type-pill">{_d._type}</span>
                      </summary>
                      <p style={{ display: "flex", gap: "1rem" }}>
                        <div>Start: {_d.startTime}</div>
                        <div>End: {_d.endTime}</div>
                      </p>

                      <div>Description: {_d.description}</div>
                      <button
                        onClick={() =>
                          setData(
                            data.filter(
                              (d) => d.title !== _d.title && d.date !== _d.date
                            )
                          )
                        }
                      >
                        Delete
                      </button>
                    </details>
                  )}
                </div>

                <div>
                  {i == offset && (
                    <button
                      className="show-more-btn"
                      onClick={() =>
                        setOffset(
                          data?.filter((d) => d.date === dialog._date).length
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
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <textarea
          placeholder="event description"
          rows={3}
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        ></textarea>
        <div className="radio-group">
          <label htmlFor="event">
            <input
              id="event"
              type="radio"
              value="event"
              checked={event._type === "event"}
              onChange={(e) => setEvent({ ...event, _type: e.target.value })}
            />
            <span>Event</span>
          </label>
          <label htmlFor="reminder">
            <input
              id="reminder"
              type="radio"
              value="reminder"
              checked={event._type === "reminder"}
              onChange={(e) => setEvent({ ...event, _type: e.target.value })}
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
              onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
            />
          </label>
        </div>

        <button type="submit">Add event</button>
      </form>
    </dialog>
  );
}
