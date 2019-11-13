import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// , Route, Switch
import userFunctions from "../UserFunctions/index";
import NavBar from "../Navbar";
import Landing from "../Landing";
import Form from "../Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// , { useState, useEffect }

function Interface() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var [formData, setFormData] = useState({});

  const logOut = e => {
    e.preventDefault();
    userFunctions.logOut().then(res => {
      console.log("navbar: logout response:", res);
    });
  };

  const handleFormChange = e => {
    e.preventDefault();
    var name = e.target.name;
    let value = e.target.value;
    let temporaryState = formData;
    console.log("Name: " + e.target.name);
    console.log("Value: " + e.target.value);
    temporaryState[name] = value;
    // console.log("temp state: ", temporaryState);
    setFormData(temporaryState);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(formData);
    userFunctions.login(formData).then(res => {
      console.log(res);
      //   If success, set logged in to true
    });
  };

  const printStats = e => {
    // console.log(cookies);
    // console.log(accountForms);
  };

  return (
    <>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} />
        <Switch>
          {/* <Route exact path="/" component={Landing} /> */}

          <Route
            exact
            patch="/login"
            component={() => (
              <Form
                handleChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
              />
            )}
          />
          {/* <Route
            exact
            patch="/register"
            component={() => (
              <Form
                handleChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
              />
            )}
          /> */}
        </Switch>
      </Router>
    </>
  );
}

export default Interface;
