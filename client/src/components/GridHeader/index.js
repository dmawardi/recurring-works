import React from "react";
import "./style.css";

function GridHeader(props) {
  return (
    <div className="card">
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
      </div>
    </div>
  );
}

export default GridHeader;
