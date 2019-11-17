import React from "react";
import StatusSquare from "../StatusSquare";
import "./style.css";

const legend = [
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "good"
  },
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "caution"
  },
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "alert"
  },
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "unknown"
  },
  {
    scheduledEvent: false,
    numberOfEvents: 1,
    status: false
  }
];

function GridHeader(props) {
  return (
    <div className="card grid-header">
      <div className="card-body">
        <h5 className="card-title">{props.currentSiteName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Year:{props.yearToForecast}
        </h6>
        <button onClick={props.increaseDecreaseYear} data-name="-">
          -
        </button>

        <button onClick={props.increaseDecreaseYear} data-name="+">
          +
        </button>
        {/* Legend */}
        <div className="container">
          {legend.map(data => {
            console.log("Currently on Legend Item: ", data);
            return StatusSquare(data);
          })}
        </div>
      </div>
    </div>
  );
}

export default GridHeader;
