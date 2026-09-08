
import mongoose from "mongoose";


const ComponentsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    tag:{
        type:String
    },
    tsxCode:{
        type:String
    }

},{timestamps:true})


const Component =
  mongoose.models.Component ||
  mongoose.model("Component", ComponentsSchema);

export default Component;