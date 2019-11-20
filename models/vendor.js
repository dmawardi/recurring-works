module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: equipment category
  var vendor = sequelize.define("vendor", {
    // Define fields
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
