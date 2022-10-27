import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    customer:{
        type:String,
        required: true,
        maxlength: 60,
    },
    address: {
        type: String,
        reuired: true,
        maxlength: 60,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    method: {
        type: Number,
        required:true,
    },
},
{ timestamps: true}
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);