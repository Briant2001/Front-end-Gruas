import '../css/destacados.css';
import '../css/diferenciales.css'
import contabilidad from '../assets/contabilidad2.jpg';
import corralon from '../assets/corralon.jpg';
import { BiTimer } from 'react-icons/bi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FiUserCheck } from 'react-icons/fi';
import { Slidershow,Slide,Img,H1, P, Div,BotonLlamar } from "../components/Slider";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import llamada from '../assets/llamada.jpg';
import foto1 from "../assets/foto1.jpg";
import facturaImg from '../assets/contenido-factura.jpg'
import { AiTwotoneFilePdf } from "react-icons/ai";
import {ContentsGruas,Ubicacion, Informacion} from '../components/ComponntsHome';
import { Box ,BoxGrua,Title,P2,Img2} from '../elements-css/Gruas';

const Home =()=>{
    const iconsPropertis = {
        iconBoton:{color:"#fff",fontSize:"20px"},
    };
    
    return (
        <>
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
                                <BotonLlamar color="#128C7E" href="tel:+551155712751" > <FaWhatsappSquare style={iconsPropertis.iconBoton}/> <p>WhatsApp</p></BotonLlamar>

                            </Div>
                            <Img src={llamada}></Img>
                            
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
        
            <section className="destacados container">
                <h2 className="destacados__titulo">Información</h2>
                <a href="#">
                    <figure className="destacados__panel">
                        
                        <img src={contabilidad} alt="Painel de la publicación sobre la creación del logotipo" className="destacados__panel-imagen"></img>
                        {/* <figC className="destacados__panel-texto">Conozca las etapas de cobro  de un servicio
                        </figC> */}
                    </figure>
                </a>
                <a href="#">
                    <figure className="destacados__panel">
                        <img src={corralon} alt="Painel de la publicación sobre consejos de fotografía" className="destacados__panel-imagen"></img>
                        {/* <figC className="destacados__panel-texto">Politicas del corralon</figC> */}
                    </figure>
                </a>
                <a href="" className="boton destacados__boton">Recibir información por correo</a>
            </section>

            <section className="diferenciales container">
                <ul className="diferenciales__lista">
                    <li className="diferenciales__item diferenciales__item-relog">
                        <BiTimer style={iconsPropertis.timer}/>
                        <h2 className="item__titulo">Tiempo</h2>
                        <p className="item__texto">¡El tiempo es importante! Trabajamos en ritmo acelerado, para atender las solicitudes de nuestros clientes.</p>
                    </li>
                    <li className="diferenciales__item diferenciales__item-dinero">
                        <RiMoneyDollarCircleFill style={iconsPropertis.money}/>
                        <h2 className="item__titulo">Enfoque</h2>
                        <p className="item__texto">Ofrecemos servicios de calidad con precios accesibles.</p>
                    </li>
                    <li className="diferenciales__item diferenciales__item-quimica">
                        <FiUserCheck style={iconsPropertis.user}/>
                        <h2 className="item__titulo">Especialistas</h2>
                        <p className="item__texto">Equipo especializado, con experiencia de control de maniobras.</p>
                    </li>
                </ul>
            </section>

            <ContentsGruas>
                <Box>
                    <BoxGrua>
                        <Title>"GRUA DE “PLATAFORMA”"</Title>
                        <P2>"Este tipo de Grua de plataforma con londer para trasladar 2 vehículos al mismo tiempo.
                            La plataforma tiene una dimensión de 6 mts. de largo por 2.50 mts. de ancho."</P2>
                    </BoxGrua>
                    <BoxGrua>
                        <Img2 src='https://gruasxpress.com/wp-content/uploads/2021/07/Gruas-de-Arrastre-2.jpg' alt='Gruas-de-Arrastre-2'></Img2>
                    </BoxGrua>
                </Box>
                <Box>
                    <BoxGrua>
                        <Title>"GRUA DE “PLATAFORMA”"</Title>
                        <P2>"Este tipo de Grua de plataforma con londer para trasladar 2 vehículos al mismo tiempo.
                            La plataforma tiene una dimensión de 6 mts. de largo por 2.50 mts. de ancho."</P2>
                    </BoxGrua>
                    <BoxGrua>
                        <Img2 src='https://gruasxpress.com/wp-content/uploads/2021/07/Gruas-de-Arrastre-2.jpg' alt='Gruas-de-Arrastre-2'></Img2>
                    </BoxGrua>
                </Box>
                <Box>
                    <BoxGrua>
                        <Title>"GRUA DE “PLATAFORMA”"</Title>
                        <P2>"Este tipo de Grua de plataforma con londer para trasladar 2 vehículos al mismo tiempo.
                            La plataforma tiene una dimensión de 6 mts. de largo por 2.50 mts. de ancho."</P2>
                    </BoxGrua>
                    <BoxGrua>
                        <Img2 src='https://gruasxpress.com/wp-content/uploads/2021/07/Gruas-de-Arrastre-2.jpg' alt='Gruas-de-Arrastre-2'></Img2>
                    </BoxGrua>
                </Box>
            </ContentsGruas>
            
            <Ubicacion/>
            <Informacion/>
        </>
    )
}
const iconsPropertis1 = {
    timer:{color:"black",fontSize:"35px"},
    money:{color:"black",border:"0"},
    user:{color:"black",fontSize:"35px"},
};
export default Home;