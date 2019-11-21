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
import { set } from "date-fns";

// React Hook component
function Interface(props) {
  // React Hook variables
  var [formData, setFormData] = useState({});
  var [userProfile, setUserProfile] = useState({});
  var [redirect, setRedirect] = useState(false);

  // Redirection renderer. If state value is true, redirect
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/login"></Redirect>;
    }
  };

  // log out function
  const logOut = e => {
    e.preventDefault();
    userFunctions.logOut().then(res => {
      if (res.status === 200) {
        setUserProfile(false);
      } else {
        console.error("Error encountered");
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

    // Create new value within temporary state and set
    temporaryState[name] = value;
    setFormData(temporaryState);
  };

  // Handle login submission
  const handleLoginSubmit = e => {
    e.preventDefault();
    // Send login request using userFunctions
    userFunctions
      .login(formData)
      .then(res => {
        // Set user profile if successful
        setUserProfile(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Handle register submission
  const handleRegisterSubmit = e => {
    e.preventDefault();
    userFunctions
      .register(formData)
      .then(res => {
        setRedirect(true);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <Router>
        {/* Redirection used for registration completion */}
        {renderRedirect()}
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
                <div className="container">
                  <Form
                    path="login"
                    handleChange={handleFormChange}
                    handleFormSubmit={handleLoginSubmit}
                  />
                </div>
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
                <div className="container">
                  <Form
                    path="register"
                    handleChange={handleFormChange}
                    handleFormSubmit={handleRegisterSubmit}
                  />
                </div>
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
