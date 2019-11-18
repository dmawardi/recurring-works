import React from "react";
import FormGroup from "../FormGroup";
import { Route, Switch } from "react-router-dom";

var accountForms = {
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
      type: "number",
      label: "Country",
      placeholder: "USA"
    }
  ]
};

function pathSpecificForm(path) {
  switch (path) {
    case "register":
      return accountForms.register;
    case "login":
      return accountForms.login;
    case "site":
      return accountForms.site;
    default:
      break;
  }
}

// TODO: Use previous site data to update record
// function dataToUseIfRequired(path, state) {
//   switch (path) {
//     case "register":
//       return false;
//     case "login":
//       return false;
//     case "site":
//       return state.currentSite
//     default:
//       break;
// }

function Form(props) {
  return (
    <form>
      <FormGroup
        //   Using the current React path, determine form to show
        formData={pathSpecificForm(props.path)}
        handleChange={props.handleChange}
      />

      <div>
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-primary"
          data-id="the id required for update"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
