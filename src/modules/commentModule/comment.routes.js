import { Router } from "express";
import commentController from "./comment.controller.js";
const commentRouter = Router();

commentRouter.post("/addcomment", commentController.addComment);
commentRouter.get("/getcomment", commentController.getAllComments);
commentRouter.patch("/updatecomment/:id", commentController.updateComment);
commentRouter.delete('/deletecomment/:id',commentController.deleteComment)

export default commentRouter;
