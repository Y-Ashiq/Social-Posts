import sequelize from "./connection.js";
import { DataTypes } from "sequelize";
import postSchema from "./post.model.js";

const userSchema = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: { type: DataTypes.STRING },
  logInStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

userSchema.hasMany(postSchema, { onDelete: "CASCADE", onUpdate: "CASCADE" });
postSchema.belongsTo(userSchema);

export default userSchema;
