import axios from "axios";
import { finished } from "stream";

const findAllSites = () => {
  return axios.get("api/sites");
};

const findEquipmentBySiteId = siteIdtoSearch => {
  return axios.get("/siteequipment/" + siteIdtoSearch);
};

const editSite = (siteObject, idToUpdate) => {
  return axios.put("api/sites/" + idToUpdate, siteObject);
};

const editEquipment = (equipmentObject, idToUpdate) => {
  return axios.put("api/equipment/" + idToUpdate, equipmentObject);
};

const editEvent = (equipmentObject, idToUpdate) => {
  return axios.put("api/events/" + idToUpdate, equipmentObject);
};

const addEvent = eventObject => {
  return axios.post("api/events/", eventObject);
};

const addSite = siteObject => {
  return axios.post("api/sites/", siteObject);
};

const addEquipment = equipmentObject => {
  return axios.post("api/equipment/", equipmentObject);
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
  editSite: editSite,
  editEquipment: editEquipment,
  addSite: addSite,
  addEquipment: addEquipment,
  addEvent: addEvent,
  editEvent: editEvent,
  findEquipmentBySiteId: findEquipmentBySiteId
};
