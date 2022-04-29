import { useState } from "react";
import dayjs from "dayjs";
import "./styles.css";
import Dialog from "./components/Dialog";
import PrevMonthDates from "./components/PrevMonthDates";
import NextMonthDates from "./components/NextMonthDates";
import CurrentMonth from "./components/CurrentMonth";
import DaysGrid from "./components/DaysGrid";

export default function App() {
  const [date, setDate] = useState(dayjs());
  const [dialog, setDialog] = useState({
    open: false,
    _date: null
  });
  const [data, setData] = useState([]);

  const [event, setEvent] = useState({
    date: null,
    title: "",
    description: "",
    _type: "",
    startTime: null,
    endTime: null
  });

  const [offset, setOffset] = useState(3);

  const handleBeforeMonth = () => setDate(date.subtract(1, "month"));
  const handleAfterMonth = () => setDate(date.add(1, "month"));

  return (
    <div className="App">
      <section className="calendar">
        <div className="year">{date.get("year")}</div>
        <div className="month">
          <button onClick={handleBeforeMonth}>&lt;</button>
          <span>{date.format("MMMM")}</span>
          <button onClick={handleAfterMonth}>&gt;</button>
        </div>

        <DaysGrid />

        <div className="days">
          <PrevMonthDates date={date} />

          <CurrentMonth date={date} data={data} setDialog={setDialog} />

          <NextMonthDates date={date} />
        </div>
      </section>

      <Dialog
        dialog={dialog}
        setDialog={setDialog}
        data={data}
        setData={setData}
        event={event}
        setEvent={setEvent}
        offset={offset}
        setOffset={setOffset}
      />
    </div>
  );
}
