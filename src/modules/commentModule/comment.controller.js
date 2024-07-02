import commentSchema from "../../database/comment.model.js";


// add comment
const addComment = async (req, res) => {
  let { content, userId ,postId} = req.body;
  let addComment = await commentSchema.create({ content, userId ,postId});
  res.json({ message: "Comment added", addComment });
};

//get all comments
const getAllComments = async (req, res) => {
  let Comments = await commentSchema.findAll();

  res.json({ Comments });
};

//update  comment
const updateComment = async (req, res) => {
  let id = req.params.id;
  let { content } = req.body;

  let CommentFound = commentSchema.findOne({ id });

  if (CommentFound) {
    await commentSchema.update({  content }, { where: { id: id } });

    res.json({ message: "Comment updated" });
  } else {
    res.json({ meassege: "no Comments found" });
  }
};

//delete comment
const deleteComment = async (req, res) => {
  let id = req.params.id;
  let CommentFound = commentSchema.findOne({ id });

  if (CommentFound) {
    await commentSchema.destroy({ where: { id } });

    res.json({ message: "Comment deleted" });
  } else {
    res.json({ message: "Comment not found" });
  }
};

export default { addComment, getAllComments, updateComment, deleteComment };
