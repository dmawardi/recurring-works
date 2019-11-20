module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: equipment
  var equipment = sequelize.define("equipment", {
    // Define fields
    equipment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    equipment_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    equipment_description: {
      type: DataTypes.STRING
    },
    custom_serial_name_1: {
      type: DataTypes.STRING,
      defaultValue: "custom_serial_name_1"
    },
    custom_serial_1: {
      type: DataTypes.STRING,
      defaultValue: 0
    },
    custom_serial_name_2: {
      type: DataTypes.STRING,
      defaultValue: "custom_serial_name_2"
    },
    custom_serial_2: {
      type: DataTypes.STRING
    },
    link_to_data_folder: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true // checks for url format
      }
    },
    link_to_warranty: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true // checks for url format
      }
    },
    yearlyFrequency: {
      type: DataTypes.FLOAT,
      defaultValue: 1
    },
    lastMaintenanceDate: {
      type: DataTypes.DATE
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }
  });

  // Associate equipment with sites and categories
  equipment.associate = function(models) {
    equipment.belongsTo(models.site, {
      foreignKey: "site_id"
    });

    equipment.belongsTo(models.equipment_category, {
      foreignKey: {
        allowNull: false
      },
      foreignKey: "category_id"
    });
  };

  return equipment;
};
