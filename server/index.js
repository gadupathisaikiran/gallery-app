const express=require("express")

const app=express()
const mongoose=require("mongoose")

const cors=require("cors")

app.use(cors())

app.use(express.json({limit:"5mb"}))



app.use("/",require("./Router/home"))


async function connect(){
   await mongoose.connect('mongodb+srv://test-2:test-2@cluster0.bgdbs80.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('Connected!'));
}

connect()

app.listen(5002,()=>{console.log("port is listening at 5002")})