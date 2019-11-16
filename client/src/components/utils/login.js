import axios from "axios";

const register = newUser => {
  return axios.post("account/register", {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    username: newUser.username,
    password: newUser.password
  });
};

const login = user => {
  return axios.post("account/login", {
    email: user.email,
    password: user.password
  });
};

const logOut = user => {
  return axios.get("account/logout");
  // .then(res => {
  //   console.log("util login: Received logout response: ", res);
  //   console.log(res.data);
  // })
  // .catch(err => {
  //   console.error(err);
  // });
};

export default {
  logOut: logOut,
  login: login,
  register: register
};
