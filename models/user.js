module.exports = function(sequelize, DataTypes) {
  // Assign to variable a sequelize definition of table: equipment category
  var user = sequelize.define("user", {
    // Define fields
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true // checks for email format (foo@bar.com)
      }
    }
  });
  return user;
};
