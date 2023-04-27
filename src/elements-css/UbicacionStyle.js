import styled from "styled-components";
const colors ={
    colorCenizaOscuro:"#4F4C4C"
}
const ContentUbicacion = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: column;
`;
const ContentMap=styled.div`

    width: 100%;
    text-align: center;

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
    width: 80%;
    margin: 10px;

`;

export {ContentUbicacion,ContentMap,Iframe,H2}