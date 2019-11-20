import React from "react";
import "./style.css";

// Creates square based on monthSquareFormat
function StatusSquare(props) {
  // Assign base square CSS class to class to use
  let classToUse = "square";
  // init string with classes to add
  let classToAdd = "";
  // If an event is found at the month
  if (props.squareState.numberOfEvents > 0) {
    // Add class of white to make square white
    classToAdd = " white";
  }
  // If the current square is a scheduled event
  if (props.squareState.scheduledEvent) {
    // status of current square
    switch (props.squareState.status) {
      // if good, make green
      case "good":
        classToAdd = " green";
        break;
      // if caution, make yellow
      case "caution":
        classToAdd = " yellow";
        break;
      // if alert, make red
      case "alert":
        classToAdd = " red";
        break;
      // Leave it as white
      default:
        classToAdd = " unknown";
        break;
    }
  }

  // String concatenate the classes in new variable
  let squareClass = classToUse + classToAdd;

  // Build display square
  console.log(
    "props.squareState.foundEventId: " + props.squareState.foundEventId
  );
  // If it was a scheduled event, wrap it in a button that provides detail for update/creation
  if (props.squareState.foundEventId) {
    return (
      <button
        onClick={props.detailClick}
        data-id={props.squareState.foundEventId.toString()}
        data-name="maintenance_event"
      >
        <div
          data-id={props.squareState.foundEventId.toString()}
          data-name="maintenance_event"
          className={squareClass}
        ></div>
      </button>
    );
    // Else make a standard square
  } else {
    return <div className={squareClass}></div>;
  }
}

export default StatusSquare;
