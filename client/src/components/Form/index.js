import React, { Component } from "react";
import FormGroup from "../FormGroup";
import { Route, Switch } from "react-router-dom";

function Form(props) {
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
    ]
  };

  const login = [
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
  ];
  return (
    <form>
      <Switch>
        <Route
          exact
          path="/login"
          Component={() => {
            return (
              <FormGroup
                formData={accountForms.login}
                handleChange={props.handleChange}
              />
            );
          }}
        />
        <Route
          exact
          path="/register"
          Component={() => {
            return (
              <FormGroup
                formData={accountForms.register}
                handleChange={props.handleChange}
              />
            );
          }}
        />
      </Switch>

      {/* <div className="form-group">
        <label for="email">Email address</label>
        <input
          onChange={props.handleChange}
          type="email"
          id="email"
          name="email"
          required
          className="form-control"
          placeholder="email"
        />
      </div>

      <div className="form-group">
        <label for="password">Password</label>
        <input
          onChange={props.handleChange}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
        />
      </div> */}
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
