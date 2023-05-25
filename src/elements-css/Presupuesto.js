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
const Select = styled.select`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 35px;
    line-height: 45px;
    padding: 0 40px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid #0075FF;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
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

export {Content,ContenPresupuesto,A,Div,Formulario,Select,Area,DivBoton}