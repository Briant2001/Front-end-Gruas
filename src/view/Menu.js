import { Img, Li, LiRedes, Ul } from "../elements-css/Menu";
import "../css/menu.css";
import "../css/modal.css";
import '../css/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBurst, faFileInvoice, faHome, } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Menu = ()=>{
    const addClass = (e)=>{
        const border = document.querySelectorAll(".border");
        for (let index = 0; index < border.length; index++) {
            border[index].classList.remove('border');
            
        }
        e.target.classList.toggle('border');

        
    }

    return (
            <div className="flex">
                <div className="flex">
                    <div className="content-logo">
                        <Img />
                    </div>
                    <nav>
                        <Ul>
                            <Li className="border" onClick={addClass} to="/"><FontAwesomeIcon icon={faHome}/> Home </Li>
                            <Li onClick={addClass} to="/Servicios"><FontAwesomeIcon icon={faCarBurst}/> Servicios</Li>
                            <Li onClick={addClass} to="/Facturacion"><FontAwesomeIcon icon={faFileInvoice}/> Facturacion</Li>
                            <Li onClick={addClass} to=""><FontAwesomeIcon icon={faAddressBook}/> Contacto</Li>
                            <Li onClick={addClass} to=""><FontAwesomeIcon icon={faAddressBook}/> Presupuesto Online</Li>
                        </Ul>
                    </nav>
                </div>
                <div>
                    <Ul>
                        <LiRedes> <FaFacebook size={30}/></LiRedes>
                        <LiRedes> <FaWhatsapp size={30}/></LiRedes>
                    </Ul>              
                </div>
            </div>
    )
}

export {Menu}