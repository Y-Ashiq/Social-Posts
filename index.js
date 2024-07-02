import express from "express";
import userRourter from "./src/modules/userModule/user.routes.js";
import postRouter from "./src/modules/postsModule/posts.routes.js";
import commentRouter from "./src/modules/commentModule/comment.routes.js";
import sequelize from "./src/database/connection.js";

const app = express();
const port = 3000;

app.use(express.json());

sequelize.sync({ alter: false });

app.use(userRourter);
app.use(postRouter);
app.use(commentRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
