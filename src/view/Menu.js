import { Img, Li, LiRedes, Ul } from "../elements-css/Menu";
import "../css/menu.css";
import "../css/modal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBurst, faFileInvoice, faHome, } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";
import { Listas } from "../components/Li";

const Menu = ()=>{
    
    return (
            <div className="flex">
                <div className="flex">  
                    <div className="content-logo">
                        <Img />
                    </div>
                    <nav>
                        <Ul>
                            <Listas
                                clase="border"
                                to="/"

                            ><FontAwesomeIcon icon={faHome}/> Home</Listas>
                            <Listas
                                clase=""
                                to="/Servicios"
                            ><FontAwesomeIcon icon={faCarBurst}/> Servicios</Listas>
                            <Listas
                                clase=""
                                to="/Facturacion"
                            
                            ><FontAwesomeIcon icon={faFileInvoice}/> Facturacion</Listas>
                            <Listas
                                clase=""
                                to="/Contacto"
                                
                            ><FontAwesomeIcon icon={faAddressBook}/> Contacto</Listas>
                            <Listas
                                clase=""
                                to="/PresupuestoEnLinea"
                                
                            ><FontAwesomeIcon icon={faAddressBook}/> Presupuesto Online</Listas>
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