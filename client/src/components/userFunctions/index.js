import axios from "axios";

const register = newUser => {
  return axios
    .post("account/register", {
      first_name: newUser.firstName,
      last_name: newUser.lastName,
      email: newUser.email,
      username: newUser.userName,
      password: newUser.password
    })
    .then(res => {
      console.log("Registered a New Account");
    });
};

const login = user => {
  return axios
    .post("account/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log("Received login response: ", res);
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
};

const logOut = user => {
  return axios
    .get("account/logout", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log("user fun: Received logout response: ", res);
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
};

export default {
  logOut: logOut,
  login: login,
  register: register
};
