const db = require("../models");

const Site = {
  // Create a new record using
  create: data => {
    return db.site.create(data);
  },
  // Find all
  findAll: () => {
    console.log("Finding all");
    return db.site.findAll();
  },
  // Find by site id
  findByID: idToFind => {
    return db.site.findAll({
      where: {
        site_id: idToFind
      }
    });
  },
  // Find by User id
  findByUserID: idToFind => {
    return db.site.findAll({
      where: {
        user_id: idToFind
      }
    });
  },
  // Delete by ID
  delete: idToDelete => {
    return db.site.destroy({
      where: {
        site_id: idToDelete
      }
    });
  },
  // Update by id
  update: (idToUpdate, data) => {
    return db.site.update(data, {
      where: {
        site_id: idToUpdate
      }
    });
  }
};

module.exports = Site;
