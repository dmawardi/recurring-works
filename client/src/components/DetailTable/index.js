import React from "react";
import "./style.css";

// Data key values to use to extract data from focus data to display based on type
const siteStructure = [
  "address1",
  "address2",
  "address3",
  "suburb",
  "postcode"
];
const equipmentStructure = [
  "equipment_name",
  "equipment_description",
  "custom_serial_name_1",
  "custom_serial_1",
  "custom_serial_name_2",
  "custom_serial_2",
  "yearlyFrequency"
];
const eventStructure = [
  "status_of_maintenance",
  "status_description",
  "datetime_scheduled"
];

// return key identifier for label dependent on detail type
function keyBasedOffDetail(detail) {
  // based off type within detail
  switch (detail.type) {
    // if site
    case "site":
      return "site_name";
    // if equipment
    case "equipment":
      return "equipment_name";
    // if maintenance event
    case "maintenance_event":
      return "event_id";
    // if default
    default:
      return "";
  }
}

// display data dependent on detail type
function dataToDisplay(detail) {
  // based off type within detail
  switch (detail.type) {
    // if site
    case "site":
      return siteStructure;
    // if equipment
    case "equipment":
      return equipmentStructure;
    // if maintenance event
    case "maintenance_event":
      return eventStructure;
    // if default
    default:
      return "";
  }
}

// Functional Component
function DetailTable(props) {
  console.log("Detail table props", props);

  return (
    // Column size 9 to render detail table
    <div className="col-9 detail-table">
      <div className="card grid-header">
        <div className="card-body">
          <h5 className="card-title">
            {/* Label of item based off focused detail key */}
            {props.focusData[keyBasedOffDetail(props.detail)]}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <div className="detail-button-container">
            {/* Edit button to edit record */}
            <button onClick={props.activateEditMode} data-name="edit">
              Edit
            </button>

            {/* Close button */}
            <button onClick={props.clearDetail} data-name="close">
              Close
            </button>
          </div>
          <br />
        </div>
      </div>

      {/* Data table */}
      <table className="table table-bordered table-dark">
        {/* Header row */}
        <thead>
          <tr>
            <th scope="col">Detail</th>
            <th colSpan="2" scope="col">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Generate Key Value pairs here using detail props */}
          {dataToDisplay(props.detail).map((val, i) => {
            // Build table row using table keys stored in siteStructure
            return (
              <tr>
                <th scope="row">{val}</th>
                <td colSpan="2">{props.focusData[val]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
