import { Li } from "../elements-css/Menu"
import '../css/styles.css';
import { useState } from "react";

const Listas = ({children,clase,to})=>{
    
    const [border,setBorder] = useState("")

    // const addClass = (e)=>{
    //     const border = document.querySelectorAll(".border");
    //     for (let index = 0; index < border.length; index++) {
    //         border[index].classList.remove('border');
    //     }
    //     e.target.classList.toggle('border');
    // }
    const addClass = ({isTrusted})=>{
        console.log(isTrusted);
        setBorder("true")
    }
    return(
            <>
                <Li onClick={addClass} border={border} className={clase} to={to}>
                    {children}
                </Li>
            </>
        )
}
export {Listas}