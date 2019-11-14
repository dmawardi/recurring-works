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
  ]
};

function pathSpecificForm(path) {
  switch (path) {
    case "register":
      return accountForms.register;
    case "login":
      return accountForms.login;
    default:
      break;
  }
}

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
