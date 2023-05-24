import styled, { css } from "styled-components";
import logo from '../assets/logo-gruas.png'
import {Link } from "react-router-dom";

const colors = {
    fondo:"#00161C"
}
const ContentMenu = styled.div`


`;
const Img = styled.div`
    
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 135px;
    height: 100%;
    background-size: 100%;
    background-position: center;
    cursor: pointer;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

`;
const Li = styled(Link)`
    margin-right:40px ;     
    list-style: none;
    cursor: pointer;
    padding: 5px;
    border-bottom: 3px solid #00161C;
    border-radius:3px ;
    text-decoration: none;
    color: #fff;
    &:hover{
        border-bottom: 3px solid #636363;
        //color: #636363;
    }

        ${(props) => {
            switch (props.barra) {
                case "true":
                    return css`
                        &&{border-bottom:${border} ;}
                    `;
                    case "false":
                        return css`
                            &{border-bottom:none ;}
                        
                        `;
                default:
                        return css`
                            &{border-bottom:none ;}

                    `;
            }
        }}
    
    
`;
const border = " 3px solid #fff !important";

const LiRedes = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 5px;
    border: none  ;
    background: red;
    text-align: center;
    display: flex;
    justify-content: center;
    &:hover{
        background:#cdcdcd;
        color: #636363;
    }
    
    &:nth-child(1){
        background:  #3b5998;
        margin-right: 10px;
    }
    &:nth-child(2){
        background: #128C7E;
    }


`;



export {Img,Li,LiRedes,Ul,}