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
  // console.log("Moment object now: ", now.toString());
  var lastMaintenanceDate = now.subtract(
    Math.round(12 / yearlyFrequency, "months")
  );
  // Loop through site data collecting event maintenance dates that are scheduled
  for (let i = 0; i < eventData.length; i++) {
    console.log("Current cycling event data: ", eventData[i]);
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

  console.log(
    "Year 2019 object: ",
    moment()
      .year(2019 + 1)
      .toString()
  );
  console.log("Current Last Maintenance Dte: ", lastMaintenanceDate);
  console.log(
    "Conditional test: ",
    moment().isBefore(
      lastMaintenanceDate,
      moment(new Date("1/1/" + (2019 + 1)))
    )
  );

  // while (moment().isBefore(lastMaintenanceDate, moment().year(2019 + 1))) {
  //   // lastMaintenanceDate = listOfMaintenanceEventDates[-1].month_scheduled
  //   listOfMaintenanceEventDates.push({
  //     date_scheduled: lastMaintenanceDate.add(
  //       Math.round(12 / yearlyFrequency),
  //       "months"
  //     ),
  //     scheduled: false,
  //     status: eventData.status_of_maintenance
  //   });
  //   console.log("Forecasting events: ", listOfMaintenanceEventDates);
  //   // Reassign last maintenance date
  //   // console.log(listOfMaintenanceEventDates[-1].date_scheduled);
  // }

  console.log(listOfMaintenanceEventDates);
  // Calculate future events within current year given frequency
  let htmlReturn = (
    <td>
      <div className="square"></div>
    </td>
  );

  // Return 12 <td> tags
  //   for (let i = 0; i < 12; i++) {
  //     htmlReturn = htmlReturn + <td>{i}</td>;
  //   }
  return htmlReturn;
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
      {forecastFutureMonthlyEventColumns(
        props.val.equipment_id,
        props.val.yearlyFrequency,
        props.eventData
      )}
    </tr>
  );
}

export default EquipmentDetailRow;
