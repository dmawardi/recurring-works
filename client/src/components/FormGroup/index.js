import React from "react";

const data = {
  site_id: 1,
  site_name: "Empire Building",
  address1: "101 Collins Street",
  address2: "Level 40",
  address3: null,
  suburb: "Melbourne",
  postcode: 3000,
  country: "Australia"
};

const register = [
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
];

function FormGroup(props) {
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
    <>
      {props.formData.map((formItem, index) => {
        return (
          <div className="form-group" key={index}>
            <label htmlFor={formItem.nameFor}>{formItem.label}</label>
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
