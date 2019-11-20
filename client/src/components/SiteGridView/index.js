import React from "react";
import GridHeader from "../GridHeader";
import TableHeader from "../TableHeader";
import EquipmentDetailRow from "../EquipmentDetailRow";
import "./style.css";

// Functional component of site grid view table
function SiteGridView(props) {
  return (
    // Column of size 9
    <div className="col-9">
      {/* Grid header */}
      <GridHeader
        increaseDecreaseYear={props.increaseDecreaseYear}
        currentSiteName={props.currentSiteName}
        yearToForecast={props.yearToForecast}
        activateCreateMode={props.activateCreateMode}
      />
      {/* Table header */}
      <table className="table table-responsive table-sm table-dark">
        <TableHeader />

        {/* Table body */}
        <tbody>
          {/* Iterate through the current site equipment and form detail */}
          {props.currentSiteEquipment.map((val, index) => {
            return (
              <EquipmentDetailRow
                key={index}
                val={val}
                selectDetail={props.selectDetail}
                eventData={props.currentSiteEvents}
                yearToForecast={props.yearToForecast}
                addNewEvent={props.addNewEvent}
                currentSiteId={props.currentSiteId}
                delete={props.delete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SiteGridView;
