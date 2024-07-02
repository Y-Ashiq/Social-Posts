import { Router } from "express";

import userControllers from "./user.controllers.js";
import { cehckUser } from "../../middleware/checkUser.js";

const userRourter = Router();

userRourter.post("/signup", cehckUser, userControllers.signup);

userRourter.post("/signin", userControllers.signIn);

userRourter.post("/signout", userControllers.signout);

userRourter.get('/user/:userId/post/:postId',userControllers.getPost)

export default userRourter;
