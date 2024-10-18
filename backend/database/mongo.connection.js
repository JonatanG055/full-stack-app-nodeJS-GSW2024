import dotenv from "dotenv"; // Cambié la importación
import mongoose from "mongoose";

dotenv.config(); // Cargar las variables de entorno

let URLDATABASE = process.env.MONGOURL; // Cambiado a MONGOURL

const mongoconnect = async () => {
    try {
        await mongoose.connect(URLDATABASE); // Usar la URL de la base de datos
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error en la conexión a la base de datos:", error); // Mensaje de error más descriptivo
    }
};

export default mongoconnect;
