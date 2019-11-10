const db = require("../models");

const Event = {
  // Create a new record using
  create: data => {
    console.log("Creating");
    return db.maintenance_event.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    console.log("Finding all");
    return db.maintenance_event.findAll();
    // .sort({ date: -1 });
  },
  // Find all sorted by date
  findByID: idToFind => {
    return db.maintenance_event.findAll({
      where: {
        event_id: idToFind
      }
    });
    // .sort({ date: -1 });
  },
  delete: idToDelete => {
    return db.maintenance_event.destroy({
      where: {
        event_id: idToDelete
      }
    });
  },
  update: (idToUpdate, data) => {
    return db.maintenance_event.update(data, {
      where: {
        event_id: idToUpdate
      }
    });
  }
};

module.exports = Event;
