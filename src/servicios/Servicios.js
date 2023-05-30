import { json } from "react-router-dom";

const EnviarPresupuesto = (nombre,correo,telefono,lugar, entrega,fecha,tipo,mensaje)=>{
    const presupuesto  = JSON.stringify({
        nombre:nombre,
        correo:correo,
        telefono:telefono,
        lugar:lugar,
        entrega:entrega,
        fecha:fecha,
        tipo:tipo,
        mensaje:mensaje
    })
    fetch("http://localhost:5000/fb-api-gruas/us-central1/app/api/servicios",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: presupuesto

          }).then(x=>{

          })
          .catch(x=>{
                console.log(x);
          })

}

const EnviarContacto = (nombre,correo,telefono,mensaje)=>{
  console.log(mensaje);
    const contacto  = JSON.stringify({
        nombre:nombre,
        correo:correo,
        telefono:telefono,  
        mensaje:mensaje

    })
    fetch("http://localhost:5000/fb-api-gruas/us-central1/app/api/contacto",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: contacto

          }).then(x =>{

          })
          .catch(x=>{
                console.log(x);
          })

}

const EnviarFaturacion = (rfc, nombre,correo,telefono,codigo)=>{
    const facturacion  = JSON.stringify({
      rfc:rfc,
      nombre:nombre,
      correo:correo,
      telefono:telefono,
      codigo:codigo  
    })
    fetch("http://localhost:5000/fb-api-gruas/us-central1/app/api/facturacion",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: facturacion

          }).then(x =>{

          })
          .catch(x=>{
                console.log(x);
          })

}
export { EnviarPresupuesto,EnviarContacto,EnviarFaturacion}