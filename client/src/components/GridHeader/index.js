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

const legendLabels = [
  "Status: Good",
  "Status: Caution",
  "Status: Alert",
  "Status: Unknown",
  "Status: Due. Not scheduled Yet"
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
        <br />
        {/* Legend */}
        <div className="container legend-container">
          <div className="row">
            {legend.map((data, i) => {
              return (
                <div className="col-3 legend-box">
                  {StatusSquare(data)}
                  <p>
                    <span className="legend-label">{legendLabels[i]}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridHeader;
