module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var equipment_category = sequelize.define("equipment_category", {
    // Giving the Author model a name of type STRING
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

  equipment_category.associate = function(models) {
    equipment_category.hasMany(models.equipment, {
      foreignKey: "category_id"
    });
  };

  return equipment_category;
};
