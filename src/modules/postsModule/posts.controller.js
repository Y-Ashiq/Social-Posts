import postSchema from "../../database/post.model.js";

// add posts
const addPost = async (req, res) => {
  let { title, content, userId } = req.body;
  let addPost = await postSchema.create({ title, content, userId });
  res.json({ message: "post added", addPost });
};

//get all posts
const getAllPosts = async (req, res) => {
  let posts = await postSchema.findAll();

  res.json({ posts });
};

//update  post
const updatePost = async (req, res) => {
  let id = req.params.id;
  let { content, userId } = req.body;

  let postFound = postSchema.findOne({ id });

  if (postFound) {
    let post = await postSchema.update({ content }, { where: { id, userId } });

    if (post > 0) {
      return res.json({ message: "post updated" });
    } else {
      return res.json({ message: "something wrong" });
    }
  } else {
    res.json({ meassege: "no posts found" });
  }
};

const deletepost = async (req, res) => {
  let id = req.params.id;
  let { userId } = req.body;

  let postFound = postSchema.findOne({ id });

  if (postFound) {
    let post = await postSchema.destroy({ where: { id, userId } });

    if (post > 0) {
      return res.json({ message: "post deleted" });
    } else {
      return res.json({ message: "something wrong" });
    }
  } else {
    res.json({ message: "post not found" });
  }
};
export default { addPost, getAllPosts, updatePost, deletepost };
