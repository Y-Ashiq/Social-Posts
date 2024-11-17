import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  " " //database url
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("error" + error);
  });

export default sequelize;
