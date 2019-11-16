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

// , { useState, useEffect }

function Interface(props) {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var [formData, setFormData] = useState({});
  var [userMessage, setuserMessage] = useState();
  var [userProfile, setUserProfile] = useState({});
  var [siteData, setSiteData] = useState();

  const logOut = e => {
    e.preventDefault();
    console.log("logging out");
    userFunctions.logOut().then(res => {
      console.log("navbar: logout response:", res);
      console.log("Current login state:", userProfile);
      if (res.status === 200) {
        console.log("status 200 detected!");
        setUserProfile({});
        setIsLoggedIn(false);
      } else {
        console.log("Failure detected");
      }
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

  const handleLoginSubmit = e => {
    e.preventDefault();
    console.log(formData);
    userFunctions
      .login(formData)
      .then(res => {
        console.log("Received login response: ", res);
        console.log("User Id: " + res.data.user_id);
        setUserProfile(res.data);

        console.log("Current Profile: ", userProfile);
        // if (res.data.message) {
        //   console.log("Message: ", res.data.message);
        //   setIsLoggedIn(true);
        //   setUserProfile(res.data.profile);
        // } else {
        //   console.log("Error", res.data.error);
        // }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    console.log(formData);
    userFunctions.register(formData).then(res => {
      console.log("Registered a New Account", res);
    });
  };

  const printStats = e => {
    console.log("user profile: ", userProfile);
    console.log("site data: ", siteData);

    // API.findAllSites().then(res => {
    //   console.log(res);
    // });
  };

  return (
    <>
      <Router>
        <NavBar profile={userProfile} printStats={printStats} logOut={logOut} />
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
        </Switch>
      </Router>
    </>
  );
}

export default Interface;
