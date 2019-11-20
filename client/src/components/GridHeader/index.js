import React from "react";
import StatusSquare from "../StatusSquare";
import "./style.css";

// Generate sample of event color codes using object format
const legend = [
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "good",
    event_id: false
  },
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "caution",
    event_id: false
  },
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "alert",
    event_id: false
  },
  {
    scheduledEvent: true,
    numberOfEvents: 1,
    status: "unknown",
    event_id: false
  },
  {
    scheduledEvent: false,
    numberOfEvents: 1,
    status: false,
    event_id: false
  }
];

// Array of legend labels
const legendLabels = [
  "Status: Good",
  "Status: Caution",
  "Status: Alert",
  "Status: Unknown",
  "Status: Due. Not scheduled Yet"
];

// Functional component
function GridHeader(props) {
  return (
    // Grid header
    <div className="card grid-header">
      <div className="card-body">
        {/* Site title */}
        <h5 className="card-title">{props.currentSiteName}</h5>
        {/* Year */}
        <h6 className="card-subtitle mb-2 text-muted">
          Year:{props.yearToForecast}
        </h6>
        {/* Year manipulation buttons */}
        <button onClick={props.increaseDecreaseYear} data-name="-">
          -
        </button>

        <button onClick={props.increaseDecreaseYear} data-name="+">
          +
        </button>
        <br />
        {/* Legend */}
        <div className="container legend-container">
          <h5>Legend</h5>
          <div className="row">
            {legend.map((data, i) => {
              return (
                <div className="col-2 legend-box">
                  <StatusSquare squareState={data} />
                  <p>
                    <span className="legend-label">{legendLabels[i]}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="container">
            <div className="col-2">
              {/* Add new equipment button */}
              <button data-name="equipment" onClick={props.activateCreateMode}>
                Add New Equipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridHeader;
