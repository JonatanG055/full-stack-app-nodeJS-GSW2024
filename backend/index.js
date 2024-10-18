import cors from "cors";
import dotenv from "dotenv"; // Cambiado a dotenv
import express from "express";
import mongoconnect from "./database/mongo.connection.js";
import Routes from "./routers/product.routes.js";

dotenv.config(); // Asegúrate de cargar las variables de entorno

let port = 3000;

const app = express();
mongoconnect(); // Llama a la función de conexión

app.use(cors());
app.use(express.json());
app.use("/api", Routes);

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
});
