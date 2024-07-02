import bcrypt from "bcrypt";
import userSchema from "../../database/user.model.js";
import postSchema from "../../database/post.model.js";

const signIn = async (req, res) => {
  let { email, password } = req.body;
  let isExist = await userSchema.findOne({ where: { email } });

  if (isExist) {
    let isMatched = bcrypt.compareSync(password, isExist.password);

    if (isMatched) {
      await userSchema.update({ logInStatus: true }, { where: { id: isExist.id } });
      res.json({ message: "welcome" });
    } else {
      res.json({ message: "wrong email or password" });
    }
  } else {
    res.json({ message: "user not found" });
  }
};

const signup = async (req, res) => {
  let { userName, email, password } = req.body;

  let add = await userSchema.create({ userName, email, password });

  res.json({ add });
};

const signout =async (req,res) => {

  let {email} = req.body;

  let isExist = await userSchema.findOne({ where: { email } });

  if(isExist){
    await userSchema.update({ logInStatus: false }, { where: { id: isExist.id } });
    res.json({message:"logged out"})
  

  }else{
    res.json({meassge:"no user logged in"})
  }

}

const getPost = async (req,res) => {

  let {userId,postId} = req.params;



  const post =await postSchema.findAll({where:{id:postId, userId},include:{model:userSchema , attributes:{exclude:['password',"updatedAt",'createdAt','logInStatus']}}})

  res.json({post})


  
}

export default { signIn, signup, signout,getPost };
