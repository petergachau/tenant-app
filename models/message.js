import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  topic: {type:String},
  issue:{type:String},
  
},
{timestamps:true});

const TourModal = mongoose.model("message", tourSchema);

export default TourModal;
