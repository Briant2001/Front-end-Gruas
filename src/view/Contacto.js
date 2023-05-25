import {ContentContacto,ContenTitle, TitleContact,P,ContentBody,ContenImage,ContentFormulario,Formulario ,
        Area, Textarea,DivBoton,DivElements, FaFace
} from "../elements-css/Contacto"
import { ComponentsInput,ComponentInputCheck } from "../components/Inputs";
import { useState } from "react";
import { Boton, Label, MnesajeError } from "../elements-css/Formulario";
import { Ubicacion } from "../components/ComponntsHome";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { CardDom, Domicilio, H2, Iframe, Item } from "../elements-css/HomeCss";
import { BsFillHouseFill, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BoxRed, ContentRedes, FooterBox, FooterTitulo } from "../elements-css/Footer";
import { FaFacebook } from "react-icons/fa";

const Contacto = ()=>{
    const expresiones = { 
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
      }
        const [nombre,setNombre] = useState({campo:'',valido:null});
        const [correo,setCorreo] = useState({campo:'',valido:null});
        const [telefono,setTelefono] = useState({campo:'',valido:null});
        const [formulario,setFormulario] = useState(null);
      const onSubmit = (e)=>{
        e.preventDefault();

        if (
            nombre.valido==="true" &&
            correo.valido==="true" &&
            telefono.valido==="true" 
        ) {
            setFormulario(true)
            setNombre({campo: '',valido:null})
            setCorreo({campo: '',valido:null})
            setTelefono({campo: '',valido:null})
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Solicitud enviada.',
                showConfirmButton: false,
                timer: 1700
              })
            document.querySelector(".textarea").value=""

        }else{
            setFormulario(false);
        }

        
      }
    return (
        <ContentContacto>
            <ContenTitle>
                <TitleContact>Grúas para vehículos en Huetamo</TitleContact>
            </ContenTitle>
            <ContentBody>
            {/* <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7561.107325276158!2d-100.89658080270276!3d18.639134921160053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8432db7e00669643%3A0x73e24cf273d4df8f!2sZitacuaro%2C%2061940%20Huetamo%20de%20N%C3%BA%C3%B1ez%2C%20Mich.!5e0!3m2!1ses!2smx!4v1684913900820!5m2!1ses!2smx" width="600" height="450"
                    allowFullScreen="" loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></Iframe> */}
                <ContentFormulario>
                    <H2>Contacto</H2>

                    <Formulario ancho="100%" onSubmit={onSubmit}>
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
                            <Textarea className="textarea" placeholder="Escriba su mensaje aqui">
                            </Textarea>
                        </Area>
                        {
                            formulario === false &&
                            <MnesajeError grid="1">
                                <p>
                                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                                    <b>Error:</b> Por favor rrellene el formulario correctamente.
                                </p>
                            </MnesajeError>
                        }
                        <DivBoton>
                            <Boton>Submit</Boton>
                        </DivBoton>
                    </Formulario>

                </ContentFormulario>
                <Domicilio ancho="100%">
                    <CardDom>
                    <H2>Direccion</H2>
                    <P>Si necesitas una empresa de grúas para vehículos en Huetamo, contáctanos.</P>

                        <DivElements>
                            <Item>
                                <BsFillHouseFill style={{fontSize:"30px", color:"#79A5E5",}}/> <p>CARR. HUETAMO - ZITACUARO KM. 3+200 3/NO. COL.CUTZEO C.P.61940 HUETAMO MICHOACAN</p>
                            </Item>
                            <Item>
                                <BsTelephoneFill  style={{fontSize:"25px", color:"#79A5E5",}}/>
                                <p> <a  href="tel:+524351070550" >+52 435-107-0550</a> ó <a  href="tel:+524351007849" >+52 435-100-7849</a>
                                </p>
                            </Item>
                            
                            <Item>
                                <MdOutlineEmail style={{fontSize:"25px", color:"#79A5E5",}}/> <p><a href="mailto:gruasarreola@hotmail.com">gruasarreola@hotmail.com</a></p>
                            </Item>
                        </DivElements>
                        <DivElements>
                            <FooterTitulo>Siguenos en</FooterTitulo>
                            <ContentRedes>
                                <BoxRed>
                                    <a href="https://es-la.facebook.com/"> <FaFace size={30} style={{marginRight:"18px",color:"#79A5E5"}}/></a>
                                    <FaFace size={30} style={{marginRight:"18px",color:"#79A5E5"}}/>
                                    <FaFace size={30} style={{marginRight:"18px",color:"#79A5E5"}}/>
                                </BoxRed>
                            </ContentRedes>
                    
                        </DivElements>
                    </CardDom>
                </Domicilio>
            </ContentBody>
        </ContentContacto>
        
    )
}

export {Contacto}