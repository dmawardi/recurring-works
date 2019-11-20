import React from "react";
import "./style.css";

// Functional Component card for each user site
function SiteCard(props) {
  return (
    <div className="container">
      <div className="card">
        <div key={props.site_id} className="card-body">
          {/* Button for displaying grid */}
          <button
            className="btn btn-outline-primary"
            data-siteid={props.site_id}
            onClick={props.updateSiteEquipmentDisplayGrid}
          >
            {props.site_name}
          </button>
          {/* Address sub detail */}
          <p className="card-text">{props.address1}</p>
          {/* Button for more detail on the site */}
          <button
            onClick={props.selectDetail}
            data-name="site"
            data-id={props.site_id}
            type="button"
            className="btn btn-outline-primary"
          >
            {/* Icon */}
            <i
              onClick={props.selectDetail}
              data-name="site"
              data-id={props.site_id}
              className="fas fa-info-circle"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
