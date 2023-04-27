import { SobreNosotros, Title} from "../elements-css/Gruas";
import { ContentVideo } from "../elements-css/NustroTrabajoStyle";
import { ContentUbicacion,ContentMap,Iframe,H2 } from "../elements-css/UbicacionStyle"
import ReactPlayer from 'react-player'
import video from '../assets/video-grua.mp4'
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
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30246.182226108504!2d-100.91805305135085!3d18.629287153353236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8432dc8ae5d460ef%3A0xd3cec3f0e4bfc0fc!2s61940%20Huetamo%20de%20N%C3%BA%C3%B1ez%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1670038718468!5m2!1ses-419!2smx" width="600" height="450"
                    allowFullScreen="" loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></Iframe>
            </ContentMap>
        </ContentUbicacion>

    )


}

const Informacion = ()=>{
    return(

        <ContentUbicacion>
            <ContentVideo>
                <ReactPlayer
                    url={video}
                    playing
                    width="100%"
                    height="100%"
                    controls
                    volume={0.5}
                    loop
                />
            </ContentVideo>
        </ContentUbicacion>
    )
}

export  {ContentsGruas,Ubicacion,Informacion};