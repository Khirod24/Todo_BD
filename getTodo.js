//import the model
const Todo=require("../models/todo");

//define route handler
exports.getTodo= async(req,res)=>{
    try{
        //fetch all Todo items from database
        const todos= await Todo.find({});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire Todo Data is Fetched'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error'
        })
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //extract todo items basis on id //fetch id
        const id=req.params.id;
        const todo= await Todo.findById({_id:id})
        
        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found with given Id",
            })
        }
        //data for given id is found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",
        });

    }
}
