"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("equipment_categories", [
      {
        category_name: "HVAC",
        description: "Heating Ventilation Air Conditioning",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        category_name: "Plumbing",
        description: "Plumbing",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        category_name: "General Building Maintenance",
        description: "Reconstruction and refurbishments",
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
