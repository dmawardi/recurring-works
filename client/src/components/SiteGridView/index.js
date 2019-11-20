import React from "react";
import GridHeader from "../GridHeader";
import TableHeader from "../TableHeader";
import EquipmentDetailRow from "../EquipmentDetailRow";
import "./style.css";

function SiteGridView(props) {
  return (
    <div className="col-9">
      <GridHeader
        increaseDecreaseYear={props.increaseDecreaseYear}
        currentSiteName={props.currentSiteName}
        yearToForecast={props.yearToForecast}
        activateCreateMode={props.activateCreateMode}
      />

      <table className="table table-responsive table-sm table-dark">
        <TableHeader />

        <tbody>
          {props.currentSiteEquipment.map((val, index) => {
            console.log("vali is: ", val);
            return (
              <EquipmentDetailRow
                key={index}
                val={val}
                selectDetail={props.selectDetail}
                eventData={props.currentSiteEvents}
                yearToForecast={props.yearToForecast}
                addNewEvent={props.addNewEvent}
                currentSiteId={props.currentSiteId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SiteGridView;
