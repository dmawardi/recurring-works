import React from "react";
import "./style.css";

function StatusSquare(props) {
  // console.log("Square props: ", props);
  // Creates square based on monthSquareFormat

  // Assign base square CSS class to class to use
  let classToUse = "square";
  // init string with classes to add
  let classToAdd = "";
  // If an event is found at the month
  if (props.numberOfEvents > 0) {
    // Add class of white to make square white
    classToAdd = " white";
  }
  // If the current square is a scheduled event
  if (props.scheduledEvent) {
    // status of current square
    switch (props.status) {
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
  let squareReturn = <div className={squareClass}></div>;

  return squareReturn;
}

export default StatusSquare;
