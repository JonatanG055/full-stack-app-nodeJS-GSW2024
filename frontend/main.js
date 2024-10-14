//npm install axios instalar esta libreria
import axios from "axios";

let urlGlobal = "http://localhost:3000/api"

const obtenerTodosLosProductos = async () => {
  
  try {
    
    const respuestaServidor = await axios.get(`${urlGlobal}/obtener-todos-los-products`)

    let obtenerTodosLosProducts = await respuestaServidor.data.obtenertodosLosProducts

    console.log(obtenerTodosLosProducts);
    

    for(let item of obtenerTodosLosProducts){
      console.log(item.nombre);
      console.log(item.precio);
      console.log(item.disponibilidad);

      const disponibilidadTransform = (disponible) => {
        if (disponible = true) {
          
          return "si esta disponible"

          

        } else if (disponible = false) {
          return "no esta disponible"
          
        }{
          
        }
      }

      let disponibilidadactual = disponibilidadTransform(item.disponibilidad)

      let contenedorDeProductos = document.createElement("div")

      contenedorDeProductos.innerHTML = `
      <p>${item.nombre}</p>
      <p>${item.precio}</p>
      <p>${disponibilidadactual}</p>

      `

      let app = document.getElementById("app")
      app.appendChild(contenedorDeProductos)
      
      
      
    }
    

  } catch (error) {
    console.error(error);
    
  }

}
obtenerTodosLosProductos()