module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: site
  var site = sequelize.define("site", {
    // Define fields
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

  // Associate sites with user
  site.associate = function(models) {
    site.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };

  return site;
};
