import sequelize from "./connection.js";
import { DataTypes } from "sequelize";
import postSchema from "./post.model.js";
import userSchema from "./user.model.js";

const commentSchema = sequelize.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
  },
 
});

userSchema.hasMany(commentSchema,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE"
});

postSchema.hasMany(commentSchema,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE"
});

commentSchema.belongsTo(postSchema);
commentSchema.belongsTo(userSchema)

export default commentSchema;