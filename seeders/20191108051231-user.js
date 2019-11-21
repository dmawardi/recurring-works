"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        first_name: "John",
        last_name: "Dorian",
        email: "d@d.com",
        username: "johndorian",
        password:
          "$2b$10$KEMiFJlr/5tBPbYuI8bZguhatBNQpXXqf6S2UMmwhMoqXHb596MnO",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        first_name: "Stifler",
        last_name: "Zoro",
        email: "Zoro@who.com",
        username: "blackmask",
        password:
          "$2b$10$KEMiFJlr/5tBPbYuI8bZguhatBNQpXXqf6S2UMmwhMoqXHb596MnO",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      },
      {
        first_name: "Kramer",
        last_name: "Gambino",
        email: "Gambino@doe.com",
        username: "GambinoBambino",
        password:
          "$2b$10$KEMiFJlr/5tBPbYuI8bZguhatBNQpXXqf6S2UMmwhMoqXHb596MnO",
        createdAt: "2019-11-07 00:00:00",
        updatedAt: "2019-11-07 00:00:00"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {}
};
