import express from "express"
//controllers
import {deleteUser, listUser, postUser, readUser, updateRoleUser} from '../controllers/user.js'


const router = express.Router()


// ENDPOINT http://localhost:8000
router.get('/users',listUser)

router.get('/user',readUser)

router.post('/user',postUser)

router.patch('/user/role/:id',updateRoleUser)

router.delete('/user/:id',deleteUser)


export default router

