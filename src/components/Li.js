import { Li } from "../elements-css/Menu"
import '../css/styles.css';
import { useState } from "react";
import { useEffect } from "react";


const Listas = ({children,clase,to})=>{
    
    

    const addClass = (e)=>{
        const border = document.querySelectorAll(".border");
        for (let index = 0; index < border.length; index++) {
            border[index].classList.remove('border');
        }
        e.target.classList.toggle('border');
    }

    return(
            <>
                <Li onClick={addClass}  className={clase} to={to}>
                    {children}
                </Li>
            </>
        )
}
export {Listas}