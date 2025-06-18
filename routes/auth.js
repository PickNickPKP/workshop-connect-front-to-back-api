import express from "express"
//controllers
import { login, register } from "../controllers/auth.js"


const router = express.Router()


// ENDPOINT http://localhost:8000/auth/register
router.post('/register',register)

router.get('/login',login)




export default router

