module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: equipment category
  var equipment_category = sequelize.define("equipment_category", {
    //Define fields
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Associate with equipment table
  equipment_category.associate = function(models) {
    equipment_category.hasMany(models.equipment, {
      foreignKey: "category_id"
    });
  };

  return equipment_category;
};
