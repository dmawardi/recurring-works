const db = require("../models");

const Vendor = {
  // Create a new record using
  create: data => {
    console.log("Creating");
    return db.vendor.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    console.log("Finding all");
    return db.vendor.findAll();
    // .sort({ date: -1 });
  },
  // Find all sorted by date
  findByID: idToFind => {
    return db.vendor.findAll({
      where: {
        vendor_id: idToFind
      }
    });
    // .sort({ date: -1 });
  },
  delete: idToDelete => {
    return db.vendor.destroy({
      where: {
        vendor_id: idToDelete
      }
    });
  },
  update: (idToUpdate, data) => {
    return db.vendor.update(data, {
      where: {
        vendor_id: idToUpdate
      }
    });
  }
};

module.exports = Vendor;
