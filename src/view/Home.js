import '../css/destacados.css';
import '../css/diferenciales.css'

import { Slidershow,Slide,Img,H1, P, Div,BotonLlamar } from "../components/Slider";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import llamada from '../assets/llamada.jpg';
import foto1 from "../assets/foto1.jpg";
import facturaImg from '../assets/contenido-factura.jpg'
import { AiTwotoneFilePdf } from "react-icons/ai";
import {ContentsGruas,Ubicacion, Informacion,InformacionGruasArreola} from '../components/ComponntsHome';

const Home =()=>{
    const iconsPropertis = {
        iconBoton:{color:"#fff",fontSize:"20px"},
    };
    const enviarMsm=()=>{
        
    }
    return (
        <>
            <div className='content-modal'>
            <Slidershow controls={true} autoplay={true} velocidad="300" intervalo="8000" >
                    <Slide>
                            <Div>
                                <H1>
                                    SERVICIO DE GRÚAS HUETAMO
                                </H1>
                                <P>Gruas Arreola es una pequeña empresa que ofrece el mejor sercicio de Grúas Arrastre, Salvamento y Depósito de Vehículos</P>
                            </Div>
                            <Img src={foto1} alt="imagen"></Img>
                            
                        {/* <TextoSlide colorFondo="rgba(0,0,0,0.5)" color="#fff">
                            <p>1</p>
                        </TextoSlide> */} 
                    </Slide>
                    <Slide>
                            <Div>
                                <H1>
                                    Solicita tu servicio
                                </H1>
                                <P>Llama ahora para solicitar tu servicio</P>
                                <BotonLlamar color="#B72E2E" href="tel:+551155712751" > <BsTelephoneFill style={iconsPropertis.iconBoton}/> <p>LLamar</p></BotonLlamar>
                                <P>ó Contactanos a travez de WhatsApp</P>
                                <BotonLlamar onClick={enviarMsm}color="#128C7E" href="tel:+551155712751" > <FaWhatsappSquare style={iconsPropertis.iconBoton}/> <p>WhatsApp</p></BotonLlamar>
                            </Div>
                            <Img  src={llamada} alt="imagen-persona-llamando"></Img>
                            
                        {/* <TextoSlide colorFondo="rgba(0,0,0,0.5)" color="#fff">
                            <p>1</p>
                        </TextoSlide> */} 
                    </Slide> 
                    <Slide>
                            <Div>
                                <H1>
                                    Solicita tu factura
                                </H1>
                                <P>Solicita tu factura a traves de nuestro servico</P>
                                <BotonLlamar color="#B72E2E" href="tel:+551155712751" > <AiTwotoneFilePdf style={iconsPropertis.iconBoton}/> <p>Ir a Factura</p></BotonLlamar>
                            </Div>
                            <Img src={facturaImg}></Img>
                            
                        {/* <TextoSlide colorFondo="rgba(0,0,0,0.5)" color="#fff">
                            <p>1</p>
                        </TextoSlide> */} 
                    </Slide>
            </Slidershow>
            </div>

            <InformacionGruasArreola/>

            <ContentsGruas/>
                
            <Informacion/>
            
            <Ubicacion/>

        </>
    )
}

export default Home;