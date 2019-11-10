const db = require("../models");

const Site = {
  // Create a new record using
  create: data => {
    return db.site.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    console.log("Finding all");
    console.log(db.site);
    return db.site.findAll();
    // .sort({ date: -1 });
  },
  update: (idToUpdate, data) => {
    return db.site.update(data, {
      where: {
        site_id: idToUpdate
      }
    });
  }
};

module.exports = Site;
