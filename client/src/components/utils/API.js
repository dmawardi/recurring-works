import axios from "axios";

const findAllSites = () => {
  return axios.get("api/sites");
};

const editSite = (siteObject, idToUpdate) => {
  return axios.put("api/sites/" + idToUpdate, siteObject);
};

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
  findAllSites: findAllSites,
  editSite: editSite
};
