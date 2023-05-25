import styled,{css} from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../assets/ps-ebpp-es.png'
const colores = { 
    borde:"#0075FF",
    error:"#bb2929",
    exito:"#1ed12d",
    colorCenizaOscuro:"#4F4C4C",
    aviso:"rgba(0, 94, 77, 0.9);"
}

const ContentTuFactura = styled.div`
    padding: 12px;
    width: 950px;
    margin: 0 auto; 
`;
const NotaDatos = styled.div`
    background: ${colores.aviso};
    padding: 40px;
    width: 95%;
    border-radius: 12px;
    margin:0 auto;
    p{
        margin: 0;
        color:#eee;
    }
`;
const TitleTuFactura = styled.h1`
    display: inline;
    padding: 10px 0;
    border-radius:3px;
    border-bottom:3px solid rgba(0,0,0,.3) ;
`;
const ParrafoInformacion = styled.p`
    text-align: justify;
    font-weight: 200;
    font-size: 20px;
    line-height: 28px;
    color: rgba(0,0,0,.5);
    margin-top: 35px;
`;
const ContentFormulario = styled.div`
    justify-content: center;
    min-width: 350px;
    position: relative;
    //margin: 0 auto;
    display: flex;
    height: 700px;
`;
const Formulario = styled.form`
    background-color: #DFE3F5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //grid-template-columns : 1fr;
    //gap:5px;
    padding: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 350px;
    min-width: 300px;
    height: 625px;
    color:${colores.colorCenizaOscuro};
    border-radius: 5px;
`;

const ContentComponents =styled.div`
    -ms-flex: 1; /* IE 10 */
    flex: 1;
    
`;

const TituloFactura = styled.h3`

    text-align: center;
    font-size: 22px;
`;
const Label = styled.label`
        display: block;
        font-weight:600;
        padding:5px;
        min-height:20px;
        font-size: 14px;
        cursor:pointer;
        ${props => props.valido === "false" && css`
        color:${colores.error}
        `}
`;
const GroupInput = styled.div`
    position: relative;
`;

const Input=styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 35px;
    line-height: 45px;
    padding: 0 40px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

`;
const LeyendError = styled.p`
    font-size: 12px;
    margin:2px;
    color: ${colores.error};
    visibility: hidden;
    ${props => props.valido === "false" && css`
    
        visibility: visible;

    `}
`;

const IconValidetion= styled(FontAwesomeIcon)`
    position: absolute;
    right:10px;
    bottom: 14px;
    z-index:100;
    font-size:16px;
    opacity:0;
    ${props => props.valido==="false" && css`
        opacity: 1;
        color: ${colores.error};
    `}
    ${props => props.valido==="true" && css`
        opacity: 1;
        color: ${colores.exito};
    `}
`;

const ContenedorTerminos = styled.div`
    
    input{
        margin-right:10px ;
    }
    @media (max-width :800px){
        grid-column :span 1;
    }
`;
const ContenedorBotonCent = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 60%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border:none;
    border-radius: 3px;
    cursor:pointer;
    transition: .1s ease all;
    margin: 0 auto;
    &:hover{
        box-shadow: 5px 0px 5px rgba(163,163,163,1);
    }
`;

const MnesajeError = styled.div`
    
    height: 100%;
    line-height:20px;
    background: #F66060;
    padding: 0px 15px;
    font-size: 12px;
    borde-radius: 3px;
    p{
        margin: 0;
    }
    b{
        margin-left:10px;
    }
    ${props => props.grid=="1" && css`
        grid-column: 1 span;
        font-size: 15px;
        padding: 9px;
    `}
    ${props => props.grid=="2" && css`
        grid-column: 2 span;
        padding: 10px;
        font-size: 15px;
    `}
`;
const ContentImagen=styled.div`
    width: 50%;
    background-size: 500px 434.15px;
    background-repeat: no-repeat;
    background-image: url(${image});
    background-position: 90% 30%;
`;
const LikRfc = styled.a`

    color:${colores.colorCenizaOscuro};
    text-decoration: underline;
    margin: 5px 0;
    cursor:pointer;
`;

const Aviso = styled.div`

    p{
        text-align: center;
    }

`;

export {
    ContentTuFactura,
    ParrafoInformacion,
    NotaDatos,
    TitleTuFactura,
    ContentComponents,
    Formulario,
    Label,
    TituloFactura,
    GroupInput,
    Input,
    LeyendError,
    IconValidetion,
    ContenedorTerminos,
    ContenedorBotonCent,
    MnesajeError,
    Boton,
    ContentFormulario,
    ContentImagen,
    LikRfc,
    Aviso,
}