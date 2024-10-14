import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()


let URLDATABASE = process.env.mongourl


const mongoconnect = async () => {
    
    try {
        
        await mongoose.connect(URLDATABASE)

        console.log("conexion exitosa a la base de datos");
        

    } catch (error) {
        console.error(error);
        
    }

}

export default mongoconnect