import productModel from "../models/product.model.js";



const getAllProducts = async (req, res) => {
    
    try {
        
        const obtenertodosLosProducts = await productModel.find()

        res.status(200).json({mjs:"productos obtenidos exitosamente", obtenertodosLosProducts})

    } catch (error) {
        
        console.error(error);
        
    }

}

export default getAllProducts