const db = require("../models");

const Equipment = {
  // Create a new record using
  create: data => {
    return db.equipment.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    return db.equipment.findAll();
    // .sort({ date: -1 });
  },

  // Find all sorted by date
  findByID: idToFind => {
    return db.equipment.findAll({
      where: {
        equipment_id: idToFind
      }
    });
  },
  // Find all equipment by site
  findBySite: idToFind => {
    return db.equipment.findAll({
      where: {
        site_id: idToFind
      }
    });
  },
  // Delete using id
  delete: idToDelete => {
    return db.equipment.destroy({
      where: {
        equipment_id: idToDelete
      }
    });
  },
  // Update using id
  update: (idToUpdate, data) => {
    return db.equipment.update(data, {
      where: {
        equipment_id: idToUpdate
      }
    });
  }
};

module.exports = Equipment;
