import React from "react";
import "./style.css";

const siteStructure = [
  "address1",
  "address2",
  "address3",
  "suburb",
  "postcode"
];

function DetailTable(props) {
  console.log("Detail table props", props);
  return (
    <div className="col-9 detail-table">
      <div className="card grid-header">
        <div className="card-body">
          <h5 className="card-title">{props.currentSite.site_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <div className="detail-button-container">
            {/* Edit button to edit record */}
            <button onClick={props.openForm} data-name="edit">
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
          {siteStructure.map((val, i) => {
            console.log("key value is :", val);

            console.log("at index :", i);
            // Build table row using table keys stored in siteStructure
            return (
              <tr>
                <th scope="row">{val}</th>
                <td colSpan="2">{props.currentSite[val]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
