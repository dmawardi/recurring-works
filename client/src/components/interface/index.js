import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// , Route, Switch
import userFunctions from "../utils/login";
import API from "../utils/API";
import NavBar from "../Navbar";
import Landing from "../Landing";
import Form from "../Form";
import Dashboard from "../Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// React Hook component
function Interface(props) {
  // React Hook variables
  var [formData, setFormData] = useState({});
  var [userProfile, setUserProfile] = useState({});
  var [siteData, setSiteData] = useState();

  // log out function
  const logOut = e => {
    e.preventDefault();
    console.log("logging out");
    userFunctions.logOut().then(res => {
      console.log("navbar: logout response:", res);
      console.log("Current login state:", userProfile);
      if (res.status === 200) {
        console.log("status 200 detected!");
        setUserProfile(false);
      } else {
        console.log("Failure detected");
      }
    });
  };

  // Handle form change for login
  const handleFormChange = e => {
    e.preventDefault();
    // Extract values from event
    var name = e.target.name;
    let value = e.target.value;
    // Copy current form data for appending
    let temporaryState = formData;

    // Create new value within temporary state
    temporaryState[name] = value;
    // console.log("temp state: ", temporaryState);
    setFormData(temporaryState);
  };

  // Handle login submission
  const handleLoginSubmit = e => {
    e.preventDefault();
    // console.log(formData);
    userFunctions
      .login(formData)
      .then(res => {
        setUserProfile(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    console.log(formData);
    userFunctions.register(formData).then(res => {});
  };

  return (
    <>
      <Router>
        <NavBar profile={userProfile} logOut={logOut} />
        <Switch>
          {/* Landing Page */}
          <Route exact path="/" component={Landing} />

          {/* Login Page */}
          <Route
            exact
            path="/login"
            component={() =>
              // If profile data exists
              userProfile.first_name ? (
                // Redirect
                <Redirect to="/" />
              ) : (
                // else show form
                <Form
                  path="login"
                  handleChange={handleFormChange}
                  handleFormSubmit={handleLoginSubmit}
                />
              )
            }
          />
          {/* Register Page */}
          <Route
            exact
            path="/register"
            component={() =>
              // If profile data exists
              userProfile.first_name ? (
                // Redirect
                <Redirect to="/" />
              ) : (
                // else show form
                <Form
                  path="register"
                  handleChange={handleFormChange}
                  handleFormSubmit={handleRegisterSubmit}
                />
              )
            }
          />
          {/* Sites page */}
          <Route exact path="/dashboard" component={() => <Dashboard />} />
          <Route exact path="/site" component={() => <Dashboard />} />
        </Switch>
      </Router>
    </>
  );
}

export default Interface;
