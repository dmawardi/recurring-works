import React from "react";
import "./style.css";

// Data key values to use to extract data
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

// return identifier for label dependent on detail type
function titleBasedOffDetail(detail) {
  switch (detail.type) {
    case "site":
      return "site_name";
    case "equipment":
      return "equipment_name";
    case "maintenance_event":
      return "event_id";
    default:
      return "";
  }
}

// display data dependent on detail type
function dataToDisplay(detail) {
  switch (detail.type) {
    case "site":
      return siteStructure;
    case "equipment":
      return equipmentStructure;
    case "maintenance_event":
      return eventStructure;
    default:
      return "";
  }
}

function DetailTable(props) {
  console.log("Detail table props", props);
  return (
    <div className="col-9 detail-table">
      <div className="card grid-header">
        <div className="card-body">
          <h5 className="card-title">
            {props.focusData[titleBasedOffDetail(props.detail)]}
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

      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Detail</th>
            <th colSpan="2" scope="col">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Generate Key Value pairs here */}
          {dataToDisplay(props.detail).map((val, i) => {
            console.log("focusData is : ", props.focusData);
            console.log("key value is :", val);

            console.log("at index :", i);
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
