import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name: {type:String},
    age: {type:Number},
    grade: {type:String}
})

const Student = mongoose.model("Student", userschema)

export default Student;


