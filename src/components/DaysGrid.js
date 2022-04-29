import React, { Component } from "react";

export default function DaysGrid() {
  return (
    <div className="days">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <span className="normal" key={i}>
          {d}
        </span>
      ))}
    </div>
  );
}
