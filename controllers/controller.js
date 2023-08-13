const User = require('../schema/userSchema')
const addUser = async(req,res) => {
    const user = req.body
    const newUser = User(user)
    try{
        await newUser.save();
        res.status(201).json(newUser)
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

const getUsers = async(req,res) => {
    try{
        const users = await User.find({})
        // console.log("ho gaya yahan")
        res.status(200).json(users)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}


const getUser = async(req,res) => {
    // console.log(req.params.id);
    try{
        const user = await User.find({_id:req.params.id})
        res.status(200).json(user)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const setUser = async(req,res) => {
    const user = req.body
    const editUser = new User(user)
    try {
       await User.updateOne({_id:req.params.id},editUser)
       res.status(201).json(editUser)
    //    console.log("success")
    
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const deleteUser = async(req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id})
        res.status(201).json("User deleted Successfully");
        // console.log("deleted");
    }catch(error){
        res.status(404).json({message:error.message})
    }
}
module.exports = {addUser,getUsers,getUser,setUser,deleteUser}