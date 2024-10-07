import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
   productId:{
    ref:"product",
    type:String,
   },
   quantity:Number,
   userId:String,
  },
  {
    timestamps: true,
  }
);
export const Cart = mongoose.model("cart", CartSchema);
