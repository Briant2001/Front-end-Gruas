import { useState } from "react";
import { ComponentsInput } from "../components/Inputs"
import { Boton, NotaDatos, ParrafoInformacion, TitleTuFactura } from "../elements-css/Formulario"
import {Content, ContenPresupuesto, Formulario, A, Div,Area, DivBoton} from "../elements-css/Presupuesto"
import { Title } from "../elements-css/HomeCss";
import { Textarea } from "../elements-css/Contacto";

const Presupuesto = ()=>{
    const [nombre,setNombre] = useState({campo:'',valido:null});
    const [correo,setCorreo] = useState({campo:'',valido:null});
    const [telefono,setTelefono] = useState({campo:'',valido:null});
    const [lugar,setLugar] =  useState({campo:'',valido:null}); 
    const [entrega,setEntrega] =  useState({campo:'',valido:null}); 
    const [fecha,setFecha] =  useState({campo:'',valido:null}); 

    const expresiones = {
        rfc:/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/, //Desarrollada por InvoiceOne.com.mx  http://validacfd.com/phpbb3/viewtopic.php?t=1978
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        fecha:/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    }
    return (
        <Content>
            <ContenPresupuesto>
                <Div>
                <TitleTuFactura>Solicite su presupuesto en linea </TitleTuFactura>
                </Div>
                <NotaDatos>
                    <ParrafoInformacion>
                    Si quiere calcular el precio de un transporte de vehículos por carretera, rellene el formulario y le enviamos un presupuesto a medida.
                    Respondemos todas las solicitudes en 48-72 horas. 

                    Por tanto, si necesita un servicio exprés en las próximas horas, mejor contacte con nosotros por teléfono: <A href="tel:+524351070550" >+52 435-107-0550</A>.
                    Grúas Arreola traslada puerta a puerta motos, turismos, furgonetas, camiones, autocares y otros vehículos. Contamos con camiones cubiertos para el transporte de vehículos de gama alta y coches de lujo con máxima discreción.

                    </ParrafoInformacion>
                </NotaDatos>
            </ContenPresupuesto>

            <ContenPresupuesto>
                <Title>Rellene los datos</Title>
                <Formulario>
                    <ComponentsInput
                        title="Nombre completo"
                        estado={nombre}
                        setEstado={setNombre}
                        tipo="text"
                        label="Nombre:"
                        placeholder="Ingrese su Nombre"
                        name="nombre"
                        leyendaError="Formato de nombre incorrecto"
                        expresion={expresiones.nombre}
                        
                    />
                    <ComponentsInput
                        estado={telefono}
                        setEstado={setTelefono}
                        tipo="tel"
                        label="Telefono:"
                        placeholder="Ingrese su Telefono"
                        name="telefono"
                        leyendaError="El telefono solo puede contener numeros y un maximo de 14 digitos"
                        expresion={expresiones.telefono}
                    />
                    <ComponentsInput
                        estado={correo}
                        setEstado={setCorreo}
                        tipo="email"
                        label="Correo:"
                        placeholder="Ingrese su Correo"
                        name="correo"
                        leyendaError="El correo solo puede contener letras, numeros, puntos."
                        expresion={expresiones.correo}
                    />
                    <ComponentsInput
                        title="Lugar de recogido"
                        estado={lugar}
                        setEstado={setLugar}
                        tipo="text"
                        label="Lugar de recogido:"
                        placeholder="Lugar"
                        name="lugar"
                        leyendaError="Campo Obligatorio"
                        expresion={expresiones.nombre}
                        
                    />
                    <ComponentsInput
                        title="Lugar de entrega"
                        estado={entrega}
                        setEstado={setEntrega}
                        tipo="text"
                        label="Lugar de entrega:"
                        placeholder="Entrega"
                        name="entrega"
                        leyendaError="Campo Obligatorio"
                        expresion={expresiones.fecha}
                        
                    />
                    <ComponentsInput
                        title="Nombre completo"
                        estado={fecha}
                        setEstado={setFecha}
                        tipo="date"
                        label="Fecha de entrega:"
                        placeholder="Ingrese su Nombre"
                        name="fecha"
                        leyendaError="Debe asginar una fecha"
                        expresion={expresiones.fecha}
                        
                    />
                    <select aria-invalid="false" name="tipo">
                        <option value="Motocicleta"></option>
                        <option value="Automovil"></option>
                        <option value="Camion"></option>
                    </select>
                    <ComponentsInput
                        title="Nombre completo"
                        estado={nombre}
                        setEstado={setNombre}
                        tipo="text"
                        label="Nombre:"
                        placeholder="Ingrese su Nombre"
                        name="nombre"
                        leyendaError="Formato de nombre incorrecto"
                        expresion={expresiones.nombre}
                    
                    />
                    <Area>
                        <Textarea placeholder="Escriba su mensaje" ></Textarea>
                    </Area>
                    <DivBoton>
                        <Boton>Enviar</Boton>
                    </DivBoton>
                </Formulario>
            </ContenPresupuesto>
        </Content>
    )
}

export {Presupuesto}