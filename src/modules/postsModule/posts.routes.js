import { Router } from "express";
import postController from "./posts.controller.js";
const postRouter = Router();

postRouter.post("/addpost", postController.addPost);
postRouter.get("/getpost", postController.getAllPosts);
postRouter.patch("/updatepost/:id", postController.updatePost);
postRouter.delete('/deletepost/:id',postController.deletepost)

export default postRouter;
