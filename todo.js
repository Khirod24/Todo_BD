const mongoose=require("mongoose");
//schema can be created using mongoose
const todoSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }

);

module.exports=mongoose.model("Todo",todoSchema);
//controller will use this model using Todo name
//will create Todo ka controller:Todo type ka object banao db mai insert krdo
