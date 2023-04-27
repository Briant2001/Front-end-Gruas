import styled from "styled-components";

const colors ={
    colorCenizaOscuro:"#4F4C4C"
}

const SobreNosotros = styled.div`
    background-color: #DFE3F5;
    padding: 3rem;
    display:flex;
    flex-direction: column;
`;
const Box= styled.div`
    display:flex;
    justify-content:space-between;
`;

const BoxGrua=styled.div`
    flex-grow: 1;
    width: 50%;
    margin-bottom:2rem;
`;

const Title = styled.h2`
    color: ${colors.colorCenizaOscuro};
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
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
    width: 100%;
    min-width:300px;
`;



export {SobreNosotros,Box,BoxGrua,Title,P2,Img2}