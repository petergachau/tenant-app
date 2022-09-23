import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  apartment: {type:String},
  name:{type:String},
  houseNo:{type:String},
  arrears: {type:String},
  penalty: {type:String},
  currentraed: {type:String},
  waters: {type:String},
  prevReads: {type:String},
  units: {type:String},
  services: {type:String},
  
},
{timestamps:true});

const TourModal = mongoose.model("Notice", tourSchema);

export default TourModal;
