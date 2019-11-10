const db = require("../models");

const Note = {
  // Create a new record using
  create: data => {
    return db.event_note.create(data);
  },
  // Find all sorted by date
  findAll: () => {
    console.log("Finding all");
    return db.event_note.findAll();
    // .sort({ date: -1 });
  },
  // Find all sorted by date
  findByID: idToFind => {
    return db.event_note.findAll({
      where: {
        note_id: idToFind
      }
    });
    // .sort({ date: -1 });
  },
  delete: idToDelete => {
    return db.event_note.destroy({
      where: {
        note_id: idToDelete
      }
    });
  },
  update: (idToUpdate, data) => {
    return db.event_note.update(data, {
      where: {
        note_id: idToUpdate
      }
    });
  }
};

module.exports = Note;
