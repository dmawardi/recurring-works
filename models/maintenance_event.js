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

  maintenance_event.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // maintenance_event.hasMany(models.event_note, {
    //   onDelete: "cascade"
    // });

    maintenance_event.belongsTo(models.equipment, {
      foreignKey: "equipment_id"
    });

    maintenance_event.belongsTo(models.vendor, {
      foreignKey: "vendor_id"
    });
  };

  return maintenance_event;
};
