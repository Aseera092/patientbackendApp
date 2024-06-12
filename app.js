const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const {patientmodel}=require("./models/patient")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://aseera:aseera@cluster0.x0tifel.mongodb.net/patientDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>
{
   let input=req.body

   let patient=new patientmodel(input)
   patient.save()
   console.log(input)
   res.send({"status":"successs"})
})

app.post("/search",(req,res)=>
{
   let input=req.body
   patientmodel.find(input).then(
    (data)=>{
        res.json(data)
    }
   ).catch(
    (error)=>{
        res.json(error)
    })
   
})

app.get("/viewall",(req,res)=>
{
    patientmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8084,()=>
{
    console.log("start server")
})