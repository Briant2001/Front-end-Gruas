import styled from "styled-components";
const colors ={
    colorCenizaOscuro:"#4F4C4C"
}
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
    justify-content: center;
`;
const Texto =styled.p`
    color: black;
    margin-bottom: 5px;
    font-weight: 400;
    line-height: 25px;
    font-size: 22px;

`;
export {ContentUbicacion,ContentMap,Iframe,H2,Domicilio,Texto}