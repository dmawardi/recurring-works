import React from "react";
import "./style.css";

function SiteCard(props) {
  return (
    <div className="container">
      <div className="card">
        <div key={props.site_id} className="card-body">
          <button
            className="btn btn-outline-primary"
            data-siteid={props.site_id}
            onClick={props.updateSiteEquipmentDisplayGrid}
          >
            {props.site_name}
          </button>
          <p className="card-text">{props.address1}</p>
          <button type="button" className="btn btn-outline-primary">
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
