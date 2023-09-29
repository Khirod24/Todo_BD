const mongoose=require("mongoose");
//npm i dotenv in terminal
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection succesfull"))
    .catch((error)=>{
        console.log("issue IN db connection");
        console.error(error.message);
        process.exit(1);
    });
}
module.exports=dbConnect;