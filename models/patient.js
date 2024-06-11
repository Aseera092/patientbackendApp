const mongoose=require("mongoose")
const  Schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "mobile":{type:String,required:true},
        "address":{type:String,required:true},
        "doctorname":{type:String,require:true}
    }
)
let patientmodel=mongoose.model("patient",Schema);
module.exports={patientmodel}