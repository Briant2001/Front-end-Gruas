import styled from "styled-components";
import image from '../assets/servicios/icono-azul-del-teléfono-comunicación-contacto.jpg';
const ContentContacto = styled.div`
    padding: 3rem;

`;
const ContenTitle = styled.div`
    
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
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 22px;
    color: rgba(0,0,0,.7);
`;

const ContentBody = styled.div`
    width: 100%;
    margin-top:25px ;    
`;
const ContenImage = styled.div`
    background-size: 500px 434.15px;
    background-repeat: no-repeat;
    background-image: url(${image});
    background-position: 90% 30%;   

`;
const ContentFormulario = styled.div`
    //border-left: 0.5px solid rgba(0,0,0,.2);
`;
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    //border-top: 0.5px solid rgba(0,0,0,.2);
    background: #DFE3F5;
    padding: 10px;
    border-radius:5px;
    gap: 20px;
    margin-bottom:2rem;
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
    grid-column: span 2;
    width: 50%;
    margin: 0 auto;
`;
export {ContentContacto,ContenTitle,TitleContact,P,
    ContentBody,ContenImage,ContentFormulario,Formulario,
    Area,Textarea,DivBoton
}