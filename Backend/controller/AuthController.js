import Users from "../model/Users.js";
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'

export const LoginUserData = async (req, res) => {
    try {
        const {email,password}=req.body
        const result=await Users.findOne({ where: {
            email
        }})

        if(!result) {
            return res.json({
                success:false,
                message:"enter vaild email id"
            })
        }
        const match= await bcrypt.compare(password,result.passw)
        if(!match) {
           return  res.json({
            success:false,
            message:"Password not match"
        })
        }
        const jwt=await Jwt.sign({data:{id:result.id,email:result.email}},"asdqweasd")
        if (!jwt) {
            res.json({
                success:false,
                message:"jwt error "
            }) 
        }
        res.json({
            fullName:result.fullName,
            email:result.email,
            success:true,
            message:"Login Successfully",
            token:jwt
        })
    } catch (error) {
        res.json({ message: error.message });
    }  
}