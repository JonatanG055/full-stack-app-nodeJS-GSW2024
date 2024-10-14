import productModel from "../models/product.model.js";

const updateProduct = async (req, res) => {
    
    const {nombre, precio, disponibilidad} = req.body

    const {id} = req.params

    try {
    
        const update = await productModel.findByIdAndUpdate(id ,{nombre, precio, disponibilidad}, {new:true})

        res.status(200).json({mjs: "producto actualizado correctamente ", update})

    } catch (error) {

        console.error(error);
        
    }

}

export default updateProduct