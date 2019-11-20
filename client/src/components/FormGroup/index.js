// import dependencies
import React from "react";

// Functional component
function FormGroup(props) {
  return (
    <>
      {/* Map through form dta generating labels and inputs */}
      {props.formData.map((formItem, index) => {
        return (
          <div className="form-group" key={index}>
            {/* Label */}
            <label htmlFor={formItem.nameFor}>{formItem.label}</label>
            {/* Input */}
            <input
              onChange={props.handleChange}
              type={formItem.type}
              name={formItem.nameFor}
              required
              className="form-control"
              placeholder={formItem.placeholder}
            />
          </div>
        );
      })}
    </>
  );
}

export default FormGroup;
