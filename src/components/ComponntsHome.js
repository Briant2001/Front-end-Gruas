import {ContenedorAzul,ContenedorBlanco,
    ContentInfor,BotonCorreo,
    Box,BoxGrua,Title,P2,Img2,
    ContentMap,Iframe,H2,Domicilio,CardDom, Texto,
    ContentVideos,ReactPlay
} from "../elements-css/HomeCss";
import contabilidad from '../assets/contabilidad2.jpg';
import corralon from '../assets/corralon.jpg';
import ReactPlayer from 'react-player';
import video from '../assets/video-grua.mp4';
import { Slide, Slidershow } from "./Slider";

const InformacionGruasArreola = ()=>{
    return (
        <ContenedorAzul>
            <ContentInfor>
                <H2 >Información</H2>
                <a href="#">
                    <figure >
                        <Img2 src={contabilidad} alt="Painel de la publicación sobre la creación del logotipo" ></Img2>
                        {/* <figC className="destacados__panel-texto">Conozca las etapas de cobro  de un servicio
                        </figC> */}
                    </figure>
                    <p>Conozca las etapas de cobro de nuestros servicios</p>
                </a>
                <a href="#">
                    <figure >
                        <Img2 src={corralon} alt="Painel de la publicación sobre consejos de fotografía" ></Img2>
                        {/* <figC className="destacados__panel-texto">Politicas del corralon</figC> */}
                    </figure>
                    <p>Politicas del corralon</p>
                </a>
                <BotonCorreo href="" >Recibir información por correo</BotonCorreo>
            </ContentInfor>
        </ContenedorAzul>
    )
}

const ContentsGruas = ({children})=>{

    return(
        <>
            <ContenedorBlanco>
                
                
                <H2>Tipos de Gruas</H2>
            <Box>
                    <BoxGrua>
                        <Title>"GRUA DE “PLATAFORMA”"</Title>
                        <P2>"Este tipo de Grua de plataforma con londer para trasladar 2 vehículos al mismo tiempo.
                            La plataforma tiene una dimensión de 6 mts. de largo por 2.50 mts. de ancho."</P2>
                    </BoxGrua>
                    <BoxGrua>
                        <Img2 src="https://gruasxpress.com/wp-content/uploads/2021/07/Gruas-de-Arrastre-2.jpg" alt="Gruas-de-Arrastre-2"></Img2>
                    </BoxGrua>
                </Box>
                <Box>
                    <BoxGrua>
                        <Title>"GRUA DE “PLATAFORMA”"</Title>
                        <P2>"Este tipo de Grua de plataforma con londer para trasladar 2 vehículos al mismo tiempo.
                            La plataforma tiene una dimensión de 6 mts. de largo por 2.50 mts. de ancho."</P2>
                    </BoxGrua>
                    <BoxGrua>
                        <Img2 src="https://gruasxpress.com/wp-content/uploads/2021/07/Gruas-de-Arrastre-2.jpg" alt="Gruas-de-Arrastre-2"></Img2>
                    </BoxGrua>
                </Box>
                <Box>
                    <BoxGrua>
                        <Title>"GRUA DE “PLATAFORMA”"</Title>
                        <P2>"Este tipo de Grua de plataforma con londer para trasladar 2 vehículos al mismo tiempo.
                            La plataforma tiene una dimensión de 6 mts. de largo por 2.50 mts. de ancho."</P2>
                    </BoxGrua>
                    <BoxGrua>
                        <Img2 src="https://gruasxpress.com/wp-content/uploads/2021/07/Gruas-de-Arrastre-2.jpg" alt="Gruas-de-Arrastre-2"></Img2>
                    </BoxGrua>
                </Box>
            </ContenedorBlanco>
        </>
    )
}
const Informacion = ()=>{
    const styles = {color:"rgba(2,25,25,.5)",fontSize:"30px"}
    return(

        <ContenedorAzul>
                <H2>
                    Mas Sobre Nuestro trabajo 
                </H2>
                <ContentVideos>
                    <Slidershow styl={styles}>
                        <Slide>
                            <ReactPlay>
                            <ReactPlayer
                                url={video}
                                playing
                                width="100%"
                                height="100%"
                                controls={true}
                                volume={1}
                                loop
                                //light={true}
                                pip={true}
                                stopOnUnmount={true}
                            />
                            </ReactPlay>
                        
                        </Slide>
                        <Slide>
                            <ReactPlay>
                            <ReactPlayer
                                url={video}
                                playing
                                width="100%"
                                height="100%"
                                controls={true}
                                volume={1}
                                loop
                                //light={true}
                                pip={true}
                                stopOnUnmount={true}
                            />
                            </ReactPlay>
                        
                        </Slide>
                        <Slide>
                            <ReactPlay>
                            <ReactPlayer
                                url={video}
                                playing={true}
                                width="100%"
                                height="100%"
                                controls={true}
                                volume={1}
                                loop
                                // light={true}
                                pip={true}
                                stopOnUnmount={true}
                            />
                            </ReactPlay>
                        
                        </Slide>
                    </Slidershow>
                </ContentVideos>
                
                
        </ContenedorAzul>
    )
}

const Ubicacion = ()=>{

    return(

        <ContenedorBlanco>
            <H2>Ubicación</H2>
            <ContentMap>
                <Domicilio>
                    <CardDom>
                        <H2>Domicilio</H2>
                        <Texto>
                        Juan puede tener el local de su negocio en la calle B No. 4.
                        </Texto>
                        <Texto>
                            <a href="tel:+551155712751" className="institucional__contacto-telefono">+55 11 55712751</a> o
                        </Texto>
                        <Texto>
                        <a href="mailto:contato@apeperia.com" className="institucional__contacto-email">contato@apeperia.com</a>

                        </Texto>
                    </CardDom>
                </Domicilio>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30246.182226108504!2d-100.91805305135085!3d18.629287153353236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8432dc8ae5d460ef%3A0xd3cec3f0e4bfc0fc!2s61940%20Huetamo%20de%20N%C3%BA%C3%B1ez%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1670038718468!5m2!1ses-419!2smx" width="600" height="450"
                    allowFullScreen="" loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></Iframe>
            </ContentMap>
        </ContenedorBlanco>

    )
}



export  {ContentsGruas,Ubicacion,Informacion,InformacionGruasArreola};