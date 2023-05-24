import styled from "styled-components";

const Content = styled.div`
    padding: 3rem;

`;

const ContenPresupuesto = styled.div`
    margin-bottom:2rem;


`;
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    gap:20px;
    padding: 45px;
    border: 2px solid #eee;
    background: #DFE3F5;
    max-width: 800px;
    margin: 0 auto;
`;
const Div = styled.div`
    margin-bottom: 2rem;
`;
const A = styled.a`
    color: #B72E2E;
    text-decoration: underline;
`;
const Area = styled.div`
    grid-column: span 2 ;
    height: 200px;
    margin: 0 25px;
`;
const DivBoton = styled.div`
    grid-column: span 2 ;
    text-align: center;
`;
export {Content,ContenPresupuesto,A,Div,Formulario,Area,DivBoton}