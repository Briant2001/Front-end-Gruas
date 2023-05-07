import styled from "styled-components";

const ContentFooter = styled.footer`
    height: 350px;
    background: #00161C;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const FooterBox =styled.div`

    display: flex;
    flex-direction: column;
    padding: 35px;
    -ms-flex: 1; /* IE 10 */
    flex: 1;
`;
const ContenBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`;
const Box = styled.div`

    margin: 8px 0;
    display: flex;
    justify-content: space-between;

`;

const FooterTitulo = styled.h3`
    color:#6F6F6F;
    font-size: 22px;
`;

const P = styled.p`
    color: #fff ;
    margin: 0;
    line-height: 25px;
    width: 240px;
`;
const A = styled.a`

    color:#fff;
`;

const Red = styled.div`
    display: flex;  
    flex-direction: row;
    color: #fff;
    align-items: center;
`;

const ContentCopy = styled.div`
    height: 83px;
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

export {ContentFooter,FooterBox,ContenBox,FooterTitulo,Box,P,A,Red,
    ContentCopy,
    Derechos,
}