import styled from "styled-components";

const ContentFooter = styled.footer`
    background: #00161C;
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    padding: 45px;
`;

const FooterBox =styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    -ms-flex: 1; 
`;

const ContenBox = styled.div` 
    flex-direction: column;
    display: flex;
`;

const Box = styled.div`
    display: flex;
    margin-bottom: 22px;
`;

const FooterTitulo = styled.h3`
    color:#6F6F6F;
    font-size: 22px; 
    margin-bottom: 22px;
`;

const P = styled.p`
    width: 240px;
    color: #fff ;
    margin: 0;
    margin-left: 12px;
`;

const A = styled.a`
    color:#fff;
`;

const ContentRedes = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoxRed = styled.div`
    display: flex;
    margin-bottom: 22px;
    color: #fff;
`;

const ContentCopy = styled.div`
    height: 83px;
    padding: 10px;
    background: #010C0F;
    display: flex;
    align-items: center;
    border-top: 1px solid #6F6F6F;
    justify-content: center; 
`;

const Derechos=styled.p`
    color: #6F6F6F;
    font-size: 13px; 
`;

export {ContentFooter,FooterBox,ContenBox,FooterTitulo,Box,P,A,
    ContentCopy,
    Derechos,
    ContentRedes,
    BoxRed,
}