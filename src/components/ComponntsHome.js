import { SobreNosotros, Title} from "../elements-css/Gruas";
import { ContentUbicacion,ContentMap,Iframe,H2,Domicilio, Texto } from "../elements-css/UbicacionStyle"
import ReactPlayer from 'react-player'
import video from '../assets/video-grua.mp4'
import { P, Slide, Slidershow } from "./Slider";
import { ContentVideos,ReactPlay } from "../elements-css/NuestroTrabajoStyle";
import { ContentFooter,FooterInfo, FooterBox,DerReserd,LeyendaRedes } from "../elements-css/Footer";
import { Li, LiRedes, Ul } from "../elements-css/Menu";
import { Img } from "../elements-css/Menu";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
const ContentsGruas = ({children,title, descripcion,img})=>{

    return(
        <>

            <SobreNosotros>
                {children}
            </SobreNosotros>

        </>
    )
}


const Ubicacion = ()=>{

    return(

        <ContentUbicacion>
            <H2>Ubicación</H2>
            <ContentMap>
                <Domicilio>
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
                </Domicilio>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30246.182226108504!2d-100.91805305135085!3d18.629287153353236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8432dc8ae5d460ef%3A0xd3cec3f0e4bfc0fc!2s61940%20Huetamo%20de%20N%C3%BA%C3%B1ez%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1670038718468!5m2!1ses-419!2smx" width="600" height="450"
                    allowFullScreen="" loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></Iframe>
            </ContentMap>
        </ContentUbicacion>

    )


}

const Informacion = ()=>{
    const styles = {color:"rgba(2,25,25,.5)",fontSize:"30px"}
    return(

        <ContentUbicacion>
                <Title>
                    Mas Sobre Nuestro trabajo 
                </Title>
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
                
                
        </ContentUbicacion>
    )
}

const Footer = ()=>{


    return (


        <ContentFooter>
            <FooterInfo>
                <FooterBox>
                    <Img/>

                </FooterBox>
                <FooterBox>
                    
                    <LeyendaRedes><i>Siguenos en</i></LeyendaRedes>
                    <Ul>
                        <LiRedes> <FaFacebook size={30}/> </LiRedes>
                        <LiRedes> <FaWhatsapp size={30}/> </LiRedes>
                    </Ul>
                </FooterBox>
            </FooterInfo>
            
            <DerReserd>&copy;Todos los derechos reservados para Grúas Arreola. 2023
                <br/>
                Desarrollado por Alumonos del Instituto Tecnologico Superior de Huetamo.
            </DerReserd>

        </ContentFooter>

    )

}
export  {ContentsGruas,Ubicacion,Informacion,Footer};