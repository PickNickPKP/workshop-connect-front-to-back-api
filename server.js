import express from "express"
import cors from "cors"
import morgan from "morgan"
//Routing
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import error  from "./utils/error.js"
import { NotFound } from "./utils/notFound.js"

const app = express()

//Basic middleware
app.use(cors()) // Allow cross domains
app.use(morgan('dev')) //show logs
app.use(express.json()) // for read body

//Routing GET , POST , PUT ,PATCH , DELETE
// app.get('/',(req, res)=>{
//   //code body
//   res.json({message: "Hello cc20"})
// })

app.use('/api',userRouter)
app.use('/auth',authRouter)


// Error Handling
app.use(error)

// 404
app.use(NotFound)

const PORT = 8000
//start sever
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))