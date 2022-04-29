import dayjs from "dayjs";

export default function CurrentMonth({ date, data, setDialog }) {
  return (
    <>
      {/* current month */}
      {Array.from(Array(date.daysInMonth()).keys()).map((i, _i) => (
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
                    `${date.get("month") + 1}-${i + 2}-${date.get("year")}`
                  ).toString()
                ) === 0
            ).length > 0
              ? "hasEvent"
              : ""
          } normal`}
          style={{
            gridColumn:
              dayjs(
                `${date.get("month") + 1}-${i + 1}-${date.get("year")}`
              ).get("day") + 1
          }}
          onClick={() => {
            setDialog({
              open: true,
              _date: dayjs(
                `${date.get("month") + 1}-${i + 2}-${date.get("year")}`
              ).toString()
            });
          }}
        >
          {i + 1}
        </span>
      ))}
    </>
  );
}
