import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String},
  password: { type: String},
  houseNo: { type: String},
phone:{type:Number},
  googleId: { type: String},
  id: { type: String },
  isAdmin:{type:Boolean,default:false},
  caretaker:{type:Boolean,default:false}
},
{timestamps:true});

export default mongoose.model("User", userSchema);
