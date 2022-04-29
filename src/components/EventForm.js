import { useState } from "react";
import Calendar from "./Calendar";
import Eventbox from "./Eventbox";
import dayjs from "dayjs";
import "./EventForm.css";

export default function () {
  const [offset, setOffset] = useState(3);

  const [event, setEvent] = useState({
    date: null,
    title: "",
    description: "",
    _type: "",
    startTime: null,
    endTime: null,
    timestamp: "",
  });

  const [dialog, setDialog] = useState({
    open: false,
    _date: null,
  });
  // const [data, setData] = useState([]);

  // function deleteEvent(temp) {
  //   console.log(temp);
  // }

  // const handleEventAddition = (e) => {
  //   e.preventDefault();
  //   setEvent({
  //     date: null,
  //     title: "",
  //     description: "",
  //     isEvent: "",
  //     startTime: null,
  //     endTime: null,
  //   });
  // };
  return (
    <div className="events">
      {data
        ?.filter((d) => d.date === dialog._date)
        .map((_d, i) => {
          return (
            <>
              <div>
                {i < offset && (
                  <details key={i}>
                    <summary key={i}>
                      {_d.title}{" "}
                      <span className="type-pill">{_d._type}</span>
                      {/* <button className="delete" onClick={handleRemoveItem}>
                      X
                    </button> */}
                      <button
                        className="delete"
                        onClick={() => deleteEvent(_d)}
                      >
                        delete
                      </button>
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
                        data?.filter((d) => d.date === dialog._date)
                          .length
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
  );
}
