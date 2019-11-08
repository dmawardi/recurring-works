module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var maintenance_event = sequelize.define("maintenance_event", {
    // Giving the Author model a name of type STRING
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link_to_data_folder: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true // checks for email format (foo@bar.com)
      }
    },
    status_of_maintenance: {
      type: DataTypes.STRING
    },
    status_description: {
      type: DataTypes.STRING
    },
    datetime_started: {
      type: DataTypes.DATE
    },
    datetime_completed: {
      type: DataTypes.DATE
    },
    datetime_scheduled: {
      type: DataTypes.DATE
    }
  });

  return maintenance_event;
};
