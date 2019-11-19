import React from "react";
import moment from "moment";
import StatusSquare from "../StatusSquare";
import "./style.css";
moment().format();
// import axios from "axios";

// Forecast future events
function forecastFutureMonthlyEventColumns(
  equipmentIDToPopulate,
  yearlyFrequency,
  eventData,
  yearToForecast
) {
  // While the year is 2019, calculate required frequency months
  let listOfMaintenanceEventDates = [];
  // Using yearly frequency, determine every x months
  let everyFreqMonths = Math.round(12 / yearlyFrequency);
  // Make the last maintenance default date: a time in the past equal to the required frequency
  var now = moment();
  // (This will ensure that if no result is found, the default value will cause next maintenance date to be scheduled for this month)
  var lastMaintenanceDate = now.subtract(everyFreqMonths, "months");
  // Loop through site data collecting event maintenance dates that are scheduled
  for (let i = 0; i < eventData.length; i++) {
    // If match is found, extract relevant details

    if (eventData[i].equipment_id === equipmentIDToPopulate) {
      // Assign the date as the last maintenance date until another is found
      lastMaintenanceDate = moment(eventData[i].datetime_scheduled);
      // push to list of maintenance event dates array
      lastMaintenanceDate = moment(eventData[i].datetime_scheduled);

      listOfMaintenanceEventDates.push({
        date_scheduled: lastMaintenanceDate.toString(),
        scheduled: true,
        status: eventData[i].status_of_maintenance || false
      });
    }
  }
  let limitYear = moment(new Date("01/01/" + (yearToForecast + 1)));

  // Forecast next maintenance date and assign
  lastMaintenanceDate = lastMaintenanceDate.add(everyFreqMonths, "months");

  // Check if meets condition to add to list of maintenance event dates
  while (lastMaintenanceDate.isBefore(limitYear)) {
    // While the last maintenance date that was pushed is before the first of the following year
    // let newMaintenanceDate = lastMaintenanceDate.add(everyFreqMonths, "months");

    // Push result to array
    listOfMaintenanceEventDates.push({
      date_scheduled: lastMaintenanceDate.toString(),
      scheduled: false,
      status: eventData.status_of_maintenance
    });
    // Reassign last maintenance date
    lastMaintenanceDate = lastMaintenanceDate.add(everyFreqMonths, "months");
  }

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
    let yearLimit = currentYearToCheck + 1;

    // Form date based on current month
    var currentDateToCheck = moment(
      new Date(monthFormatArray[i] + "/01/" + currentYearToCheck)
      // Set the current year to limit to a year greater than the current year and month array
    );
    let numberOfEvents = 0;
    let scheduledEvent = false;
    let status = false;
    var result = {};

    // Iterate through list of maintenance event dates checking if there's a match with the current month we are checking
    for (let i = 0; i < listOfMaintenanceEventDates.length; i++) {
      // If the current date to check is within same month as event

      if (
        currentDateToCheck.isSame(
          listOfMaintenanceEventDates[i].date_scheduled,
          "month"
        )
      ) {
        // Increment number of events by 1
        numberOfEvents += 1;

        // If it's a scheduled event. mark scheduled event true
        if (listOfMaintenanceEventDates[i].scheduled) {
          // Set scheduled event to true and record status
          scheduledEvent = true;
          status = listOfMaintenanceEventDates[i].status;
        }
      }
      // Create record
      result = {
        numberOfEvents: numberOfEvents,
        scheduledEvent: scheduledEvent,
        status: status
      };
    }
    // Reset results
    // Push result for current month into result
    monthSquareFormat.push(result);
    // Reset variables for loop refresh
    numberOfEvents = 0;
    scheduledEvent = false;
    status = false;
    result = {};
  }
  console.log("Month square format: ", monthSquareFormat);
  return monthSquareFormat;
}

function EquipmentDetailRow(props) {
  return (
    <tr key={props.equipment_id}>
      <th
        scope="row"
        data-name="equipment"
        data-id={props.val.equipment_id}
        onClick={props.selectDetail}
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
          props.eventData,
          props.yearToForecast
        ),
        props.yearToForecast
      ).map(val => {
        return <td>{StatusSquare(val)}</td>;
      })}
    </tr>
  );
}

export default EquipmentDetailRow;
