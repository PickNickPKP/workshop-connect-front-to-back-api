import express from "express"
//controllers
import {deleteUser, listUser, postUser, readUser, updateRoleUser, getMe} from '../controllers/user.js'
import { authCheck } from "../middlewares/auth.middleware.js"


const router = express.Router()


// ENDPOINT http://localhost:8000/api/users
router.get('/users',authCheck,listUser)

router.patch('/user/role/:id',authCheck,updateRoleUser)

router.delete('/user/:id',authCheck,deleteUser)
// ENDPOINT http://localhost:8000/api/getme
router.get('/getme',authCheck,getMe)





router.get('/user',readUser)

router.post('/user',postUser)


export default router

