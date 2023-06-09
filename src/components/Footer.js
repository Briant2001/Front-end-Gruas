import { ContentFooter,FooterBox,FooterTitulo,ContenBox,Box,P,A,
    ContentCopy,Derechos,ContentRedes,BoxRed
} from "../elements-css/Footer";
import {BsFillHouseFill} from 'react-icons/bs';
import { BsTelephoneFill } from "react-icons/bs";
import {MdOutlineEmail} from 'react-icons/md';
import { BiTimer } from 'react-icons/bi';
import {AiOutlineRight} from "react-icons/ai"
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Img } from "../elements-css/Menu";

const Footer = ()=>{


    return (
        <>
            <ContentFooter>
                <FooterBox>
                    <FooterTitulo>Gruás Arreola</FooterTitulo>
                    <ContenBox>
                        <Box>
                            <BsFillHouseFill style={{fontSize:"25px", color:"#eee",}}/> <P>Corregidora 13, Morelita, Tlapehuala, Guerrero, Mexico.</P>
                        </Box>
                        <Box>
                            <BsTelephoneFill  style={{fontSize:"25px", color:"#eee",}}/> <P><A href="tel:+524351070550" >+52 435-107-0550</A> Ó <br/> <A href="tel:+524351007849" >+52 435-100-7849</A></P>
                        </Box>
                        <Box>
                            <MdOutlineEmail style={{fontSize:"25px", color:"#eee",}}/> <P><A  href="mailto:gruasarreola@hotmail.com">gruasarreola@hotmail.com</A></P>
                        </Box>
                        <Box>
                            <BiTimer style={{fontSize:"25px", color:"#eee",}}/> <P>24/7 horas</P>
                        </Box>
                    </ContenBox> 
                    

                </FooterBox>
                
                <FooterBox>
                    <FooterTitulo>Nuestros servicios</FooterTitulo>
                    <ContenBox>
                        <Box>
                            <AiOutlineRight style={{fontSize:"25px", color:"#eee",}}/><P>Servicios para empresas y particulares</P>
                        </Box>
                        <Box>
                            <AiOutlineRight style={{fontSize:"25px", color:"#eee",}}/><P>Translados de vehículos pesados.</P>
                        </Box>
                        <Box>
                            <AiOutlineRight style={{fontSize:"25px", color:"#eee",}}/><P>Rescates de coches, motos y camiones</P>
                        </Box>
                    </ContenBox>
                </FooterBox>
                <FooterBox>
                    <FooterTitulo>Siguenos en</FooterTitulo>
                    <ContentRedes>
                        <BoxRed>
                            <a href="https://www.facebook.com/gruas.arreola.7?mibextid=LQQJ4d" target="_blank"> <FaFacebook size={30} style={{marginRight:"8px"}}/></a>
                        </BoxRed>
                    </ContentRedes>
                    
                </FooterBox>
            </ContentFooter>
            <ContentCopy>
                <Img/>
                <Derechos>
                    &copy;Todos los derechos reservados para Grúas Arreola. 2023
                </Derechos>
            </ContentCopy>
        </>
    )

}
export {Footer}