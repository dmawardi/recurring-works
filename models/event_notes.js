module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var event_notes = sequelize.define("event_notes", {
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

  return event_notes;
};
