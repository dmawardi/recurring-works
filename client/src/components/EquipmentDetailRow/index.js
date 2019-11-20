// Import dependencies
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
  // While the year is yearToForecast, calculate required frequency months
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

      // push required details to list of maintenance event dates
      listOfMaintenanceEventDates.push({
        date_scheduled: lastMaintenanceDate.toString(),
        scheduled: true,
        status: eventData[i].status_of_maintenance || false,
        event_id: eventData[i].event_id
      });
    }
  }

  // Create a new date to represent first day of year after yearToForecast. Used as limit
  let limitYear = moment(new Date("01/01/" + (yearToForecast + 1)));

  // Forecast next maintenance date and assign
  lastMaintenanceDate = lastMaintenanceDate.add(everyFreqMonths, "months");

  // While the last maintenance date is before the first of the following year
  while (lastMaintenanceDate.isBefore(limitYear)) {
    // Push result to array
    listOfMaintenanceEventDates.push({
      date_scheduled: lastMaintenanceDate.toString(),
      scheduled: false,
      status: eventData.status_of_maintenance
    });
    // Reassign last maintenance date with the next forecast date
    lastMaintenanceDate = lastMaintenanceDate.add(everyFreqMonths, "months");
  }

  // return the total events within the forecast year (forecast and scheduled)
  return listOfMaintenanceEventDates;
}
// Generates square based on maintenance event forecast input
function generateSquareFormat(listOfMaintenanceEventDates, currentYearToCheck) {
  // Build month format array
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
    var currentDateToCheck = moment(
      new Date(monthFormatArray[i] + "/01/" + currentYearToCheck)
    );
    // Init variables with start values
    let numberOfEvents = 0;
    let scheduledEvent = false;
    let status = false;
    var result = {};
    var foundEventId;

    // Iterate through list of maintenance event dates checking if there's a match with the current month we are checking
    for (let i = 0; i < listOfMaintenanceEventDates.length; i++) {
      // If the current date to check is within same month as event

      // If the the current date to check is in the same month as the current maintenance date
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
          foundEventId = listOfMaintenanceEventDates[i].event_id;
        }
      }
      // Create record
      result = {
        numberOfEvents: numberOfEvents,
        scheduledEvent: scheduledEvent,
        status: status,
        foundEventId: foundEventId
      };
    }
    // Push result for current month into result
    monthSquareFormat.push(result);
    // Reset variables for loop refresh
    numberOfEvents = 0;
    scheduledEvent = false;
    status = false;
    result = {};
    foundEventId = false;
  }
  console.log("Month square format: ", monthSquareFormat);
  return monthSquareFormat;
}

// Functional component
function EquipmentDetailRow(props) {
  // Render Row
  return (
    <tr key={props.equipment_id}>
      {/* Table header */}
      <th
        scope="row"
        data-name="equipment"
        data-id={props.val.equipment_id}
        onClick={props.selectDetail}
      >
        {props.val.equipment_id}
      </th>
      <td>{props.val.equipment_name}</td>
      <td>
        <button
          data-name="maintenance_event"
          data-id={props.val.equipment_id}
          onClick={props.addNewEvent}
        >
          + Event
        </button>
      </td>
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
        // Map through resulting values
      ).map(val => {
        console.log(val);
        // Generate a square for each month's value
        return (
          <td>
            <StatusSquare squareState={val} detailClick={props.selectDetail} />
          </td>
        );
      })}
    </tr>
  );
}

export default EquipmentDetailRow;
