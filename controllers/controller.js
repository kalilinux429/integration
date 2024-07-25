const User=require('../Models/User');

//craete new user

const createuser=async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error);
    }

};

//get all users
const getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).send(users);
    }catch(error){
        res.status(500).send(error)
    }
}

//Updatae a user byid 
const updateUserById=async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,runValidators:true
        });
        if(!user){
            return res.status(404).send();
        }
        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error)
    }
}

//delete a user by ID
const deletUserById=async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(500).send(error)
        }
        res.status(200).send(user)
    }catch(error){
        res.status(500).send(error);

    }
}

const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports={
    createuser,
    getUsers,
    updateUserById,
    deletUserById,
    getUserById
}