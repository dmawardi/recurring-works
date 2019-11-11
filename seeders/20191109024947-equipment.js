"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("equipment", [
      {
        equipment_name: "AC Unit 1",
        equipment_description: "AC Unit on Level 1",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghgd8873",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2348093re9385",
        yearlyFrequency: 3,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        site_id: 1,
        category_id: 1,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        equipment_name: "AC Unit 2",
        equipment_description: "AC Unit on Level 2",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghgd8873",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2348093re9385",
        yearlyFrequency: 2,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        site_id: 1,
        category_id: 1,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        equipment_name: "AC Unit 3",
        equipment_description: "AC Unit on Level 3",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghgd8873",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2348093re9385",
        yearlyFrequency: 2,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        site_id: 1,
        category_id: 1,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        equipment_name: "Toilet 11a",
        equipment_description: "Level 11 West Wing Bathroom / 11a",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghKreeton",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2jfkhore3",
        yearlyFrequency: 2,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        site_id: 1,
        category_id: 2,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        equipment_name: "Toilet 11a",
        equipment_description: "Level 11 West Wing Bathroom / 11a",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghKreeton",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2jfkhore3",
        yearlyFrequency: 2,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        site_id: 1,
        category_id: 2,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        equipment_name: "Toilet 3k",
        equipment_description: "Level 3 West Wing Bathroom / 3k",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghKreeton",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2jfkhore3",
        yearlyFrequency: 3,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        site_id: 1,
        category_id: 2,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        equipment_name: "Toilet 14c",
        equipment_description: "Level 4 West Wing Bathroom / 14c",
        custom_serial_name_1: "IMEI",
        custom_serial_1: "hghKreeton",
        custom_serial_name_2: "ASA",
        custom_serial_2: "2jfkhore3",
        yearlyFrequency: 2,
        link_to_data_folder:
          "https://github.com/dmawardi/recurring-works/projects/1",
        link_to_warranty:
          "https://github.com/dmawardi/recurring-works/projects/1",
        enabled: true,
        lastMaintenanceDate: "2019-05-07 00:00:00",
        site_id: 1,
        category_id: 2,
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
