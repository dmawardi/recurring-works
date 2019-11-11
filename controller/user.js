const db = require("../models");

const User = {
  // Create a new record using
  create: data => {
    return db.user.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    console.log("Finding all");
    return db.user.findAll();
    // .sort({ date: -1 });
  },
  // Find all sorted by date
  findByID: idToFind => {
    return db.user.findAll({
      where: {
        user_id: idToFind
      }
    });
    // .sort({ date: -1 });
  },
  findByEmail: emailToFind => {
    return db.user.findAll({
      where: {
        email: emailToFind
      }
    });
    // .sort({ date: -1 });
  },
  delete: idToDelete => {
    return db.user.destroy({
      where: {
        user_id: idToDelete
      }
    });
  },
  update: (idToUpdate, data) => {
    return db.user.update(data, {
      where: {
        user_id: idToUpdate
      }
    });
  }
};

module.exports = User;
