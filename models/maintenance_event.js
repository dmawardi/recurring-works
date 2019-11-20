module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: maintenance event
  var maintenance_event = sequelize.define("maintenance_event", {
    // Define fields
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

  // Associate maintenance event with equipment and vendors
  maintenance_event.associate = function(models) {
    maintenance_event.belongsTo(models.equipment, {
      foreignKey: "equipment_id"
    });

    maintenance_event.belongsTo(models.vendor, {
      foreignKey: "vendor_id"
    });
  };

  return maintenance_event;
};
