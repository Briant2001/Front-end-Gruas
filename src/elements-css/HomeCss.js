import styled from "styled-components";

const colors ={
    colorCenizaOscuro:"#4F4C4C"
}

const ContenedorAzul = styled.div`
    background-color: #DFE3F5;
    padding: 3rem;
    display:flex;
    flex-direction: column;
`;

const ContenedorBlanco = styled.div`
    background-color: #eee;
    padding: 3rem;
    display:flex;
    flex-direction: column;
`;



/**
 * Informacion de gruas arreola
 */

const ContentInfor = styled.div`
    text-align:center;
`;

const BotonCorreo = styled.a`
    padding: 15px;
    width: 220px;
    background: #B72E2E;
    border: none;
    border-radius: 5px;

`;

const Box= styled.div`
    display:flex;
    justify-content:space-between;
`;

const BoxGrua=styled.div`
    flex-grow: 1;
    width: 40%;
    margin-bottom:2rem;
    text-align: center;
`;

const Title = styled.h2`
    color: ${colors.colorCenizaOscuro};
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.25rem;
`;
const P2 = styled.p`
    line-height: normal;
    margin-bottom: 1rem;
    color: ${colors.colorCenizaOscuro};
    font-weight: 700;
`;
const Img2 = styled.img`
    width: 60%;
    min-width:300px;
`;

/**
 * Ubicacion
 */

const ContentUbicacion = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
    
`;
const ContentMap=styled.div`

    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;

`;
const H2 = styled.h2`
    color: ${colors.colorCenizaOscuro};
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    margin: 5px;
`;
const Iframe = styled.iframe`
    border: 0;
    border-radius: 10px;
    margin:0 auto;
    width: 60%;
    margin: 10px;

`;
const Domicilio = styled.div`

    display: flex;
    flex-direction: column;
`;
const CardDom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Texto =styled.p`
    color: black;
    margin-bottom: 5px;
    font-weight: 400;
    line-height: 25px;
    font-size: 22px;

`;
/**
 * Nuestro trabajo
 */

const ContentVideos =  styled.div`

    width: 100%;
    height: 400px;
    overflow: hidden;
    
`;

const ReactPlay = styled.div`

    margin: 0 auto;
    margin-top: 20px;
    width:500px ;

`;
export {ContenedorAzul,ContenedorBlanco,
    ContentInfor,BotonCorreo,
    Box,BoxGrua,Title,P2,Img2,
    ContentUbicacion,ContentMap,Iframe,H2,Domicilio,CardDom,Texto,
    ContentVideos,ReactPlay
}