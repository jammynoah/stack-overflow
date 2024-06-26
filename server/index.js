import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/users.js"
import questionRoutes from './routes/Questions.js'
import answerRoutes from "./routes/Answers.js"
import connectDB from "./connectMongoDb.js";
import dotenv from "dotenv"


dotenv.config()

const app =express();
connectDB();

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("This is stack api")
})
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT =  4000;

const URL="mongodb+srv://durgesh:durgesh@stack.3vjbfgv.mongodb.net/?retryWrites=true&w=majority&appName=stack"

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });

// mongoose.connect(URL).then(
//     ()=>app.listen(PORT,()=>{console.log(`server is running on port number: ${PORT}`)})
// ).catch((err)=>{console.log(err.messege)})


