module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: event notes
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

  // Associate event notes with events and users
  event_note.associate = function(models) {
    event_note.belongsTo(models.maintenance_event, {
      foreignKey: "event_id"
    });
    event_note.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };

  return event_note;
};
