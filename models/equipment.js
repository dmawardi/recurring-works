module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var equipment = sequelize.define("equipment", {
    // Giving the Author model a name of type STRING
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
    }
  });

  return equipment;
};
