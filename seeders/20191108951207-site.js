"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("sites", [
      {
        site_name: "Empire Building",
        address1: "101 Collins Street",
        address2: "Level 40",
        suburb: "Melbourne",
        postcode: 3000,
        country: "Australia",
        user_id: 1,

        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        site_name: "Pylon Observatory",
        address1: "Bridge Road",
        address2: "Level 24",
        suburb: "Richmond",
        postcode: 3121,
        country: "Australia",
        user_id: 1,
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        site_name: "GGR Republic",
        address1: "120 Sepulveda Blvd",
        address2: "Building",
        suburb: "Los Angeles",
        postcode: 90024,
        user_id: 1,
        country: "United States of America",
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
