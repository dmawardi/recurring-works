import React from "react";
import "./style.css";

function SiteCard(props) {
  return (
    <div className="card">
      <div
        key={props.site_id}
        className="card-body site-card"
        data-siteid={props.site_id}
        onClick={props.updateSiteEquipmentDisplayGrid}
      >
        <h5 className="card-title">{props.site_name}</h5>
        <p className="card-text">{props.address1}</p>
        <button type="button" className="btn btn-outline-primary">
          <i className="fas fa-info-circle"></i>
        </button>
      </div>
    </div>
  );
}

export default SiteCard;
