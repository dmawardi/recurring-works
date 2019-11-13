module.exports = function(sequelize, DataTypes) {
  // validate: {
  //   len: {
  //     args: [1, 140],
  //     message: "Must have length greater than 1"
  //   }
  // }
  var site = sequelize.define("site", {
    // Giving the Author model a name of type STRING
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    site_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING
    },
    address3: {
      type: DataTypes.STRING
    },
    suburb: {
      type: DataTypes.STRING
    },
    postcode: {
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.STRING
    }
  });

  site.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    site.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };

  // site.associate = models => {
  //   // site.hasMany(models.equipment, {
  //   //   onDelete: "cascade"
  //   // });
  //   // site.belongsTo(models.equipment_category, {
  //   //   foreignKey: "category_id"
  //   // });
  // };

  return site;
};
