// Import dependencies
import React from "react";
import FormGroup from "../FormGroup";
import { Route, Switch } from "react-router-dom";
import "./style.css";

// Init account forms object containing form structures
var accountForms = {
  // Login input data
  login: [
    {
      nameFor: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Email"
    },
    {
      nameFor: "password",
      type: "password",
      label: "Password",
      placeholder: "Password"
    }
  ],
  // Register input data
  register: [
    {
      nameFor: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Email"
    },
    {
      nameFor: "firstName",
      type: "text",
      label: "First Name",
      placeholder: "John"
    },
    {
      nameFor: "lastName",
      type: "text",
      label: "Last Name",
      placeholder: "Doe"
    },
    {
      nameFor: "username",
      type: "text",
      label: "Username",
      placeholder: "Username"
    },
    {
      nameFor: "password",
      type: "password",
      label: "Password",
      placeholder: "Password"
    }
  ],
  // Site input data
  site: [
    {
      nameFor: "site_name",
      type: "text",
      label: "Site Name",
      placeholder: "Site Name"
    },
    {
      nameFor: "address1",
      type: "text",
      label: "Address 1",
      placeholder: "100 Wilshire Blvd"
    },
    {
      nameFor: "address2",
      type: "text",
      label: "Address 2",
      placeholder: "eg. Unit 24"
    },
    {
      nameFor: "address3",
      type: "text",
      label: "Address 3",
      placeholder: "Additional Info"
    },
    {
      nameFor: "suburb",
      type: "text",
      label: "Suburb",
      placeholder: "Los Angeles"
    },
    {
      nameFor: "postcode",
      type: "number",
      label: "Postcode",
      placeholder: "90210"
    },
    {
      nameFor: "country",
      type: "text",
      label: "Country",
      placeholder: "USA"
    }
  ],
  // Equipment input data
  equipment: [
    {
      nameFor: "equipment_name",
      type: "text",
      label: "Equipment Name",
      placeholder: "Air Conditioner Level 11A"
    },
    {
      nameFor: "equipment_description",
      type: "text",
      label: "Equipment Description",
      placeholder: "Found at the West end of the corridor"
    },
    {
      nameFor: "custom_serial_name_1",
      type: "text",
      label: "Custom Serial Label 1",
      placeholder: "Custom Serial Name 1"
    },
    {
      nameFor: "custom_serial_1",
      type: "text",
      label: "Custom Serial Code 1",
      placeholder: "Custom Serial Code 1"
    },
    {
      nameFor: "custom_serial_name_2",
      type: "text",
      label: "Custom Serial Label 2",
      placeholder: "Custom Serial Label 2"
    },
    {
      nameFor: "custom_serial_2",
      type: "text",
      label: "Custom Serial Code 2",
      placeholder: "Custom Serial Code 2"
    },
    {
      nameFor: "yearlyFrequency",
      type: "number",
      label: "Yearly Frequency (X times per year)",
      placeholder: "3"
    }
  ],
  // Maintenance event input data
  maintenance_event: [
    {
      nameFor: "status_of_maintenance",
      type: "text",
      label: "Maintenance Status",
      placeholder: "alert"
    },
    {
      nameFor: "status_description",
      type: "text",
      label: "Status Description",
      placeholder: "Regular Bi-annual Maintenance"
    },
    {
      nameFor: "datetime_scheduled",
      type: "datetime-local",
      label: "Datetime Scheduled",
      placeholder: "2019-11-30 00:00:00"
    }
  ]
};

// Function that uses that path variable to determine the type of form to display to the user
function pathSpecificForm(path) {
  // Dependent on path
  switch (path) {
    // If register
    case "register":
      return accountForms.register;
    // If login
    case "login":
      return accountForms.login;
    // If site
    case "site":
      return accountForms.site;
    // If equipment
    case "equipment":
      return accountForms.equipment;
    // If maintenance event
    case "maintenance_event":
      return accountForms.maintenance_event;
    // If default
    default:
      break;
  }
}

// Functional component
function Form(props) {
  return (
    <div className="container form-container">
      <form>
        {/* Form labels and inputs */}
        <FormGroup
          //   Using the current React path, determine form to show
          formData={pathSpecificForm(props.path)}
          handleChange={props.handleChange}
        />

        {/* Submission button */}
        <div>
          <button
            onClick={props.handleFormSubmit}
            type="submit"
            className="btn btn-primary"
            data-id={props.idToUpdate}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
