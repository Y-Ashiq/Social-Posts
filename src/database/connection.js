import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://upgzfnsu0bn5ywob:ubXuJHgh5iUthULsLECl@ba7wgz4rgtp9gjkyxxky-mysql.services.clever-cloud.com:3306/ba7wgz4rgtp9gjkyxxky"
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
