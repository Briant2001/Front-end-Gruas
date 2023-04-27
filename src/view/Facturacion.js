import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ComponentsInput,ComponentInputCheck } from "../components/Inputs";
import { Boton, ContenedorBotonCent, MnesajeError, Formulario, Label } from "../elements-css/Formulario";
import { validacionRFC } from '../components/validacionRcf';

const Facturacion = ()=>{
    //document.querySelector('.content-modal').style.display="none";
    const [rfc,setRfc] = useState({campo:'',valido:null});
    const [nombre,setNombre] = useState({campo:'',valido:null});
    const [correo,setCorreo] = useState({campo:'',valido:null});
    const [telefono,setTelefono] = useState({campo:'',valido:null});
    const [codigo,setCodigo] = useState({campo:'',valido:null});
    const [formulario,setFormulario] = useState(null);
    const [terminos,setTerminos] = useState(false);

    const expresiones = {
        rfc:/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/, //Desarrollada por InvoiceOne.com.mx  http://validacfd.com/phpbb3/viewtopic.php?t=1978
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        codigo:/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/,
      }
      const onSubmit = (e) =>{
        e.preventDefault();
        if (
            rfc.valido=="true" &&
            nombre.valido==='true'&&
            correo.valido==='true'&&
            telefono.valido==='true'&&
            codigo.valido==='true'&&
            terminos
            
          ) {
            setFormulario(true);
            setRfc({campo: '',valido:null})
            setNombre({campo: '',valido:null});
            setCorreo({campo: '',valido:null});
            setTelefono({campo: '',valido:null});
            setCodigo({campo: '',valido:null});
            setTerminos(false)
         }else{
          setFormulario(false)
    
        }
    
     
      }
    return (
        <>
            <Formulario action="" onSubmit={onSubmit}>
                <ComponentsInput
                    title="Clave del Registro Federal de Contribuyentes de la persona a favor de quien se expida."
                    estado={rfc}
                    setEstado={setRfc}
                    tipo="text"
                    label="RFC:"
                    placeholder="Ingrese su RCF"
                    name={rfc}
                    leyendaError="Formato de RFC incorrecto"
                    expresion={expresiones.rfc}
                    funcion ={validacionRFC}
                />
                <ComponentsInput
                    estado={nombre}
                    setEstado={setNombre}
                    tipo="text"
                    label="Nombre:"
                    placeholder="Ingrese su Nombre"
                    name={nombre}
                    leyendaError="El nombre solo puede contener letras y espacios"
                    expresion={expresiones.nombre}
                />

                <ComponentsInput
                    estado={correo}
                    setEstado={setCorreo}
                    tipo="text"
                    label="Correo:"
                    placeholder="Ingrese su Correo"
                    name={correo}
                    leyendaError="El correo solo puede contener letras, numeros, puntos."
                    expresion={expresiones.correo}
                />
                <ComponentsInput
                    estado={telefono}
                    setEstado={setTelefono}
                    tipo="number"
                    label="Telefono:"
                    placeholder="Ingrese su Telefono"
                    name={telefono}
                    leyendaError="El telefono solo puede contener numeros y un maximo de 14 digitos"
                    expresion={expresiones.telefono}
                />
                <ComponentsInput
                    estado={codigo}
                    setEstado={setCodigo}
                    tipo="number"
                    label="Codigo:"
                    placeholder="Ingrese su Codigo postal"
                    name={codigo}
                    leyendaError="El codigo solo puede contener numeros y un maximo de 5 digitos"
                    expresion={expresiones.codigo}
                />

                <ComponentInputCheck
                    type="checkbox"
                    estado={terminos}
                    setEstado={setTerminos}
                    name="terminos"
                />

                {
                    formulario === false &&
                    <MnesajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle}/>
                            <b>Error:</b> Por favor rrellene el formulario correctamente.
                        </p>
                    </MnesajeError>
                }


                <ContenedorBotonCent>
                    <p>No sabes tu RFC</p>
                    <Boton>Solicitar Factura</Boton>
                </ContenedorBotonCent>

            </Formulario>
        </>
    )

}

export default Facturacion;