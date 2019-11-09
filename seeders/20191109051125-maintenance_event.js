"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("maintenance_events", [
      {
        link_to_data_folder: "",
        equipment_id: 2,
        status_of_maintenance: "May not need",
        status_description: "To fix the AC Units that are having an issue",
        datetime_scheduled: "2019-11-30 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        link_to_data_folder: "",
        equipment_id: 4,
        status_of_maintenance: "May not need",
        status_description: "To fix the Toilets. Clogged and nasty",
        datetime_scheduled: "2019-12-12 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        link_to_data_folder: "",
        equipment_id: 5,
        status_of_maintenance: "May not need",
        status_description: "This floor is disgusting",
        datetime_scheduled: "2019-11-27 00:00:00",
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
