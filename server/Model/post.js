const mongoose=require("mongoose")
const schema=mongoose.Schema;

const Postschema=new schema({

    label:{type:String},
    url:{type:String},
 



}, { timestamps: true })

const Post=mongoose.model("idream",Postschema)

module.exports=Post