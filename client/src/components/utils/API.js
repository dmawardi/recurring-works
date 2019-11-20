import axios from "axios";
import { finished } from "stream";
// API calls todb
// Find all sites
const findAllSites = () => {
  return axios.get("api/sites");
};

// Find equipment by the site id
const findEquipmentBySiteId = siteIdtoSearch => {
  return axios.get("/siteequipment/" + siteIdtoSearch);
};

// Edit a site
const editSite = (siteObject, idToUpdate) => {
  return axios.put("api/sites/" + idToUpdate, siteObject);
};

// Edit equipment
const editEquipment = (equipmentObject, idToUpdate) => {
  return axios.put("api/equipment/" + idToUpdate, equipmentObject);
};

// Edit event
const editEvent = (equipmentObject, idToUpdate) => {
  return axios.put("api/events/" + idToUpdate, equipmentObject);
};

// Add event
const addEvent = eventObject => {
  return axios.post("api/events/", eventObject);
};

// Add site
const addSite = siteObject => {
  return axios.post("api/sites/", siteObject);
};

// Add equipment
const addEquipment = equipmentObject => {
  return axios.post("api/equipment/", equipmentObject);
};

// Delete equipment
const deleteEquipment = idToDelete => {
  return axios.delete("api/equipment/" + idToDelete);
};

// Delete site
const deleteSite = idToDelete => {
  return axios.delete("api/sites/" + idToDelete);
};

export default {
  findAllSites: findAllSites,
  editSite: editSite,
  editEquipment: editEquipment,
  addSite: addSite,
  addEquipment: addEquipment,
  addEvent: addEvent,
  editEvent: editEvent,
  findEquipmentBySiteId: findEquipmentBySiteId,
  deleteSite: deleteSite,
  deleteEquipment: deleteEquipment
};
