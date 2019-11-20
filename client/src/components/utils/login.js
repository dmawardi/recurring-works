import axios from "axios";

// Register API call
const register = newUser => {
  return axios.post("account/register", {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    username: newUser.username,
    password: newUser.password
  });
};

// Login API call
const login = user => {
  return axios.post("account/login", {
    email: user.email,
    password: user.password
  });
};

// Logout api call
const logOut = user => {
  return axios.get("account/logout");
};

export default {
  logOut: logOut,
  login: login,
  register: register
};
