import React from "react";
import moment from "moment";
import "./style.css";
moment().format();
// import axios from "axios";
// var isDate = require("date-fns/isDate");
// var getMonth = require("date-fns/getMonth");
// var startOfToday = require("date-fns/startOfToday");
// var isBefore = require("date-fns/isBefore");
// var addMonths = require("date-fns/addMonths");
// var format = require("date-fns/format");
// var subMonths = require("date-fns/subMonths");

function forecastFutureMonthlyEventColumns(
  equipmentIDToPopulate,
  yearlyFrequency,
  eventData
) {
  // While the year is 2019, calculate required frequency months
  let listOfMaintenanceEventDates = [];
  // Make the last maintenance default date: a time in the past equal to the required frequency
  // (This will ensure that if no result is found, the default next maintenance date should be asap)
  var now = moment();
  var lastMaintenanceDate = now.subtract(
    Math.round(12 / yearlyFrequency, "months")
  );
  // Loop through site data collecting event maintenance dates that are scheduled
  for (let i = 0; i < eventData.length; i++) {
    // console.log("Current cycling event data: ", eventData[i]);
    // If match is found, extract relevant details
    console.log("equip id to populate: " + equipmentIDToPopulate);
    if (eventData[i].equipment_id === equipmentIDToPopulate) {
      // Assign the date as the last maintenance date until another is found
      lastMaintenanceDate = moment(eventData[i].datetime_scheduled);
      // push to list of maintenance event dates array
      listOfMaintenanceEventDates.push({
        date_scheduled: moment(eventData[i].datetime_scheduled),
        scheduled: true,
        status: eventData[i].status_of_maintenance
      });
    }
  }

  // console.log(
  //   "Conditional test: ",
  //   moment().isBefore(
  //     lastMaintenanceDate,
  //     moment(new Date("1/1/" + (2019 + 1)))
  //   )
  // );

  while (moment(new Date("1/1/" + (2019 + 1))).isBefore(lastMaintenanceDate)) {
    // console.log(
    //   "Passed before condition. Year 2019 object: ",
    //   moment(new Date("1/1/" + (2019 + 1))).toString()
    // );
    // console.log(
    //   "Current Last Maintenance Date: ",
    //   lastMaintenanceDate.toString()
    // );

    let newMaintenanceDate = lastMaintenanceDate.add(
      Math.round(12 / yearlyFrequency),
      "months"
    );
    // console.log(newMaintenanceDate.toString());

    listOfMaintenanceEventDates.push({
      date_scheduled: newMaintenanceDate,
      scheduled: false,
      status: eventData.status_of_maintenance
    });
    lastMaintenanceDate = newMaintenanceDate;
    // Reassign last maintenance date
    // console.log(listOfMaintenanceEventDates[-1].date_scheduled);
  }

  console.log("Forecasting events: ", listOfMaintenanceEventDates);
  // Calculate future events within current year given frequency
  // let htmlReturn = (
  //   <td>
  //     <div className="square"></div>
  //   </td>
  // );

  // Return 12 <td> tags
  //   for (let i = 0; i < 12; i++) {
  //     htmlReturn = htmlReturn + <td>{i}</td>;
  //   }
  return listOfMaintenanceEventDates;
}
// Generates square based on maintenance event forecast input
function generateSquareFormat(listOfMaintenanceEventDates, currentYearToCheck) {
  let monthFormatArray = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];
  // init array for pushing result format
  let monthSquareFormat = [];

  // Iterate through month format array (once for each month) to check if occurence of event within month
  for (let i = 0; i < monthFormatArray.length; i++) {
    // Form date based on current month
    let currentDateToCheck = moment(
      currentYearToCheck + "-" + monthFormatArray[i] + "-01"
    );
    let numberOfEvents = 0;
    let scheduledEvent = false;
    let status = false;
    let result = {};

    // Iterate through list of maintenance event dates checking if there's a match with the current month we are checking
    for (let i = 0; i < listOfMaintenanceEventDates.length; i++) {
      // If the current date to check is within same month as event
      if (currentDateToCheck.isSame(listOfMaintenanceEventDates[i], "month")) {
        // Record details required to color
        numberOfEvents += 1;

        // If it's a scheduled event. mark scheduled event true
        if (listOfMaintenanceEventDates.scheduled) {
          scheduledEvent = true;
          status = listOfMaintenanceEventDates.status;
        }
      }
      result = {
        numberOfEvents: numberOfEvents,
        scheduledEvent: scheduledEvent,
        status: status
      };
      // Reset results
      // Push result for current month into result
      monthSquareFormat.push(result);
      // Reset variables for loop refresh
      numberOfEvents = 0;
      scheduledEvent = false;
      status = false;
      result = {};
    }
  }
  console.log(
    "The Month square format result for this equipment is: ",
    monthSquareFormat
  );
  return monthSquareFormat;
}

function createSquare(currentSquare) {
  let classToUse = "square";
  let classToAdd = "";
  // If an event is found at the month
  if (currentSquare.numberOfEvents > 0) {
    // Add class of white to make square white
    classToAdd = " white";
  }
  // If the current square is a scheduled event
  if (currentSquare.scheduledEvent) {
    switch (currentSquare.status) {
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
        break;
    }
  }

  let squareClass = classToUse + classToAdd;

  console.log("The square class is" + squareClass);
  // Build display square
  let squareReturn = (
    <td>
      <div className={squareClass}></div>
    </td>
  );

  return squareReturn;
}

function EquipmentDetailRow(props) {
  return (
    <tr key={props.equipment_id}>
      <th
        scope="row"
        data-name="equipment"
        data-id={props.val.equipment_id}
        onClick={props.onClick}
      >
        {props.val.equipment_id}
      </th>
      <td>{props.val.equipment_name}</td>
      {/* Month data columns */}
      {/* Feed list of maintenance events produced by forecastFutureMonthlyEvent fn to generateSquareformat and iterate */}
      {generateSquareFormat(
        forecastFutureMonthlyEventColumns(
          props.val.equipment_id,
          props.val.yearlyFrequency,
          props.eventData
        ),
        2019
      ).map(val => {
        console.log(val);
        return createSquare(val);
      })}
    </tr>
  );
}

export default EquipmentDetailRow;
