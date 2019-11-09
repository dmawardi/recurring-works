"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("event_notes", [
      {
        note_title: "Emergency Order required",
        note_body:
          "There is an issue with the AC Unit. Recommend ordering an emergency part.",
        status_updated_to: "Alert",
        event_id: 1,
        user_id: 1,
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        note_title: "Work Complete",
        note_body: "See you later. -Alligator",
        status_updated_to: "Complete",
        event_id: 2,
        user_id: 1,
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        note_title: "Incomplete for now.",
        note_body: "I need to return with another part. Made safe till then.",
        status_updated_to: "Made Safe",
        event_id: 2,
        user_id: 1,
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        note_title: "Broke down again.",
        note_body: "Throw it to the dogs. Just please. ",
        status_updated_to: "Open",
        event_id: 3,
        user_id: 1,
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
