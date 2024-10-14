import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    nombre :{
        type: String,
        require: true
    },

    precio : {
        type: Number,
        require: true
    },

    disponibilidad: {

        type :Boolean,
        require: true
    }
})


const productModel = mongoose.model("productos", productSchema)

export default productModel