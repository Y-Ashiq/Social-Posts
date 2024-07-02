import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://uyxbpwgqci4fnq2k:3q6g7M0bVqnp4t9KBC2w@bvjplxsetkrcgbwbttkn-mysql.services.clever-cloud.com:3306/bvjplxsetkrcgbwbttkn"
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
