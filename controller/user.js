const db = require("../models");

const User = {
  // Create a new record using
  create: data => {
    return db.user.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    return db.user.findAll();
  },
  // Find by ID
  findByID: idToFind => {
    return db.user.findAll({
      where: {
        user_id: idToFind
      }
    });
  },
  // Find using email
  findByEmail: emailToFind => {
    return db.user.findAll({
      where: {
        email: emailToFind
      }
    });
  },
  // Delete by ID
  delete: idToDelete => {
    return db.user.destroy({
      where: {
        user_id: idToDelete
      }
    });
  },
  // Update by ID
  update: (idToUpdate, data) => {
    return db.user.update(data, {
      where: {
        user_id: idToUpdate
      }
    });
  }
};

module.exports = User;
