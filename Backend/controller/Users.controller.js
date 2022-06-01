import Users from "../model/Users.js";
 import bcrypt from 'bcryptjs'
export const getAllUsers = async (req, res) => {
    try {
        const result = await Users.findAll();
        res.json(result);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const PostUserData = async (req, res) => {
    try {

        const salt=await bcrypt.genSalt(12)
        const Npass= await bcrypt.hash(req.body.password,salt)
        const result = await Users.create({...req.body,passw:Npass});
        res.json(result);
    } catch (error) {
        res.json({ message: error.message });
    }  
}