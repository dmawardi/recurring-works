module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var event_note = sequelize.define("event_note", {
    // Giving the Author model a name of type STRING
    note_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    note_title: {
      type: DataTypes.STRING
    },
    note_body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status_updated_to: {
      type: DataTypes.STRING,
      defaultValue: "No Status Update"
    }
  });

  event_note.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    event_note.belongsTo(models.maintenance_event, {
      foreignKey: "event_id"
    });
    event_note.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };

  return event_note;
};
