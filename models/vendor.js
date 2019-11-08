module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var vendor = sequelize.define("vendor", {
    // Giving the Author model a name of type STRING
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return vendor;
};
