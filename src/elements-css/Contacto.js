import styled, { css } from "styled-components";
import image from '../assets/servicios/icono-azul-del-teléfono-comunicación-contacto.jpg';
import { FaFacebook } from "react-icons/fa";
const ContentContacto = styled.div`
    padding: 3rem;
    background: #eee;

`;
const ContenTitle = styled.div`
    margin-bottom:1rem ;
`;

const TitleContact = styled.h2`

    display: inline;
    font-size: 35px;
    padding: 1px 0;
    border-radius:3px;
    border-bottom:3px solid rgba(0,0,0,.3) ;
`;
const P = styled.p`
    margin: 0;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0,0,0,.7);
`;

const ContentBody = styled.div`
    max-width: 954px;
    display: flex;
    margin-top:25px ;  
    margin:0 auto ;
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.5);
`;
const ContenImage = styled.div`
    background-size: 500px 434.15px;
    background-repeat: no-repeat;
    background-image: url(${image});
    background-position: 90% 30%;   

`;
const ContentFormulario = styled.div`
    //border-left: 0.5px solid rgba(0,0,0,.2);
    //background: #DFE3F5;
    background: #79A5E5;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 60%;
    padding: 35px;

`;
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    //border-top: 0.5px solid rgba(0,0,0,.2);
    padding: 10px;
    border-radius:5px;
    gap: 20px;
    margin-bottom:2rem;
    width: 60%;
    margin: 0 auto;
    ${props => props.ancho != null && css`
        width: 100%;
    
    `}
`;
const Area = styled.div`
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
`;
const Textarea = styled.textarea` 
    width: 100%;
    height: calc(100% - 26.09px);
    resize: none;
    border: none;
    border-radius: 5px;
    &:focus{
        outline: none;
        border: 3px solid #0075FF;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
`;
const DivBoton = styled.div`
    text-align: center;
    width: 50%;
    margin: 0 auto;
`;
const DivElements = styled.div`
    margin-top: 18px;
    div{
        margin-bottom: 2.5rem  ;
    }

`;

const FaFace = styled(FaFacebook)`
    cursor: pointer;
`;
export {ContentContacto,ContenTitle,TitleContact,P,
    ContentBody,ContenImage,ContentFormulario,Formulario,
    Area,Textarea,DivBoton,DivElements,FaFace
}