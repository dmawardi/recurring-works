import axios from "axios";

const findAllSites = () => {
  return axios.get("api/sites");
};

// const login = user => {
//   return axios.post("account/login", {
//     email: user.email,
//     password: user.password
//   });
// };

// const logOut = user => {
//   return axios
//     .get("account/logout", {
//       email: user.email,
//       password: user.password
//     })
//     .then(res => {
//       console.log("user fun: Received logout response: ", res);
//       console.log(res.data);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

export default {
  findAllSites: findAllSites
};
