import { Img, Li, LiRedes, Ul } from "../elements-css/Menu";
import "../css/menu.css";
import "../css/modal.css";
//import logo from '../assets/logo-gruas.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBurst, faFileInvoice, faHome, } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
const Menu = ()=>{
    

    return (
            <div className="flex">
                <div className="flex">
                    <div className="content-logo">
                        <Img />
                    </div>
                    <nav>
                        <Ul>
                            <Li  to="/"><FontAwesomeIcon icon={faHome}/> Home </Li>
                            <Li  to="/Servicios"><FontAwesomeIcon icon={faCarBurst}/> Servicios</Li>
                            <Li  to="/Facturacion"><FontAwesomeIcon icon={faFileInvoice}/> Facturacion</Li>
                            <Li  ><FontAwesomeIcon icon={faAddressBook}/> Contacto</Li>
                        </Ul>
                    </nav>
                </div>
                <div>
                    <Ul>
                        <LiRedes> <FaFacebook size={30}/> </LiRedes>
                        <LiRedes> <FaWhatsapp size={30}/> </LiRedes>
                    </Ul>              
                </div>
            </div>
    )
}


/**
 * <div className="header__content">
                <div  className="header__content__menu">
                    <div className="content__logo">
                        <div className="header__logo"></div>
                    </div>
                    <nav className="head__navegacion">
                        <Ul>
                            <Li className="head__enlace"><a href="index.html"></a></Li>
                            <Li className="head__enlace"><a href="servicios.html">Servicios</a></Li>
                            <Li className="head__enlace"><a href="facturacion.html">Facturación</a></Li>
                            <Li className="head__enlace"><a href="#">Contacto</a></Li>
                        </Ul>
                    </nav>
                </div>
                <div className="head__navegacion">
                    <Ul>
                        <Li className="head__enlace"><a href="index.html"><FontAwesomeIcon icon={faExclamationTriangle}/></a></Li>
                        <Li className="head__enlace"><a href="servicios.html">Youtube</a></Li>
                        <Li className="head__enlace"><a href="facturacion.html">Instagram</a></Li>
                    </Ul>
                </div>
            </div>
 * 
 * 
 */
export {Menu}