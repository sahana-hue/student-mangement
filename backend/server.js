import express from "express";
import connectDB from "./DB.js";
import Student from "./models/studentmodel.js";
const app = express();



app.use(express.json());
connectDB()


app.post("/student",async (req,res)=>{
    try {
        const {name1, age1  , course1} = req.body
    const student =await  Student.create({
        name:name1,
        age:age1,
        grade:course1
    })
    res.json({
        mess:"user created",
        user:student
    })
    } catch (error) {
        console.log(error)
    }
    
})



app.listen(3000, () => {
    console.log("Server started on port 3000")
})  
