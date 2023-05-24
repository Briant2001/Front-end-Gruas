import {ContentContacto,ContenTitle, TitleContact,P,ContentBody,ContenImage,ContentFormulario,Formulario ,
        Area, Textarea,DivBoton
} from "../elements-css/Contacto"
import { ComponentsInput,ComponentInputCheck } from "../components/Inputs";
import { useState } from "react";
import { Boton, Label } from "../elements-css/Formulario";
import { Ubicacion } from "../components/ComponntsHome";

const Contacto = ()=>{
    const expresiones = { 
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
      }
        const [nombre,setNombre] = useState({campo:'',valido:null});
        const [correo,setCorreo] = useState({campo:'',valido:null});
        const [telefono,setTelefono] = useState({campo:'',valido:null});

      const onSubmit = (e)=>{
        e.preventDefault();
      }
    return (
        <ContentContacto>
            <ContenTitle>
                <TitleContact>Grúas para vehículos en Huetamo</TitleContact>
                <P>Si necesitas una empresa de grúas para vehículos en Huetamo, contáctanos.</P>
            </ContenTitle>
            <ContentBody>
                <ContentFormulario>
                    <P>Rellene el formulario</P>
                    <Formulario onSubmit={onSubmit}>
                        <ComponentsInput
                            estado={nombre}
                            setEstado={setNombre}
                            tipo="text"
                            label="Nombre:"
                            placeholder="Ingrese su Nombre"
                            name="nombre"
                            leyendaError="El nombre solo puede contener letras y espacios"
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
                        <Area>
                            <Label>Mensaje:</Label>
                            <Textarea  placeholder="Escriba su mensaje aqui">
                            </Textarea>
                        </Area>
                        <DivBoton>
                            <Boton>Submit</Boton>
                        </DivBoton>
                    </Formulario>
                <Ubicacion/>

                </ContentFormulario>
            </ContentBody>
        </ContentContacto>
        
    )
}

export {Contacto}