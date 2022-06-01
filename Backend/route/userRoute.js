import express from 'express'
import { LoginUserData } from '../controller/AuthController.js'
import { getAllUsers, PostUserData } from '../controller/Users.controller.js'
 const router=express.Router()


 router.get('/getdata',getAllUsers)
 router.post('/postdata',PostUserData)
 router.post('/userLogin',LoginUserData)
 export default router;