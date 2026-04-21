import express from "express";

const app = express()
app.use(express.json());
app.post("/request",(req,res)=>{
    const {n,a} = req.body;
    console.log(n,a);
    res.send(`u r name is ${n} and age is ${a}`);
})
app.listen(5000, () => {
    console.log("Server running on port 5000");
}); 
