const db = require("../models");

const Vendor = {
  // Create a new record using
  create: data => {
    return db.vendor.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    return db.vendor.findAll();
  },
  // Find by ID
  findByID: idToFind => {
    return db.vendor.findAll({
      where: {
        vendor_id: idToFind
      }
    });
  },
  // Delete by ID
  delete: idToDelete => {
    return db.vendor.destroy({
      where: {
        vendor_id: idToDelete
      }
    });
  },
  // Update by ID
  update: (idToUpdate, data) => {
    return db.vendor.update(data, {
      where: {
        vendor_id: idToUpdate
      }
    });
  }
};

module.exports = Vendor;
