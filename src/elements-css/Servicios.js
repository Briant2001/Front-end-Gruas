import styled from "styled-components";
import servicio1 from '../assets/servicios/Servicio1.jpg';
import accidentes from '../assets/accidentes-gruas.jpg';
import translados from '../assets/translados-autos.jpg';
const colores = { 
    
    colorCenizaOscuro:"#eee",
    colorOscuro:"#",
    colorParrafos:"#1E242F",
    aviso:"rgba(0, 94, 77, 0.9);",
}

const ContentnServicios= styled.div`

    width: 95%;

    margin: 14px auto;

`;

const ContentDataGrid = styled.div` 

    display: grid;
    grid-template-columns: calc((100% / 5 ) - 4px) calc((100% / 5 ) - 4px) calc((100% / 5 ) - 4px) calc((100% / 5 ) - 4px) calc((100% / 5 ) - 4px) ;
    grid-auto-rows: 200px;
    grid-gap: 4px;
    grid-row-gap: 35px;

`;

const Grid1 = styled.div`
    :nth-child(1){
        grid-area: 1 / 1 / span 2 / span 3;
        background-image: url(${servicio1});
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }

    :nth-child(2){
        grid-area: 1 / 4 / span 2 / span 3;
        padding: 20px;
        text-align: justify;
        background: #9EAFCD;
        
    }
    :nth-child(3){
        grid-area: 3 / 3 / span 2 / span 3;
        background-image: url(${translados});
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        

    }
    :nth-child(4){
        grid-area: 3 / 1 / span 2 / span 2;
        padding: 20px;
        text-align: justify;
        background: #9EAFCD;

    }
    :nth-child(5){
        grid-area: 5 / 1 / span 2 / span 3;
        background-image: url(${accidentes});
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        
    }
    :nth-child(6){
        grid-area: 5 / 4 / span 2 / span 2;
        padding: 20px;
        text-align: justify;
        background: #9EAFCD;
    }
`;
const Titulo = styled.h1`
    text-align: left;
    color:  ${colores.colorParrafos};;
    font-size: 28px;
    font-weight: 700;
    margin: 35px 10px;
    

`;
const H2 = styled.h2`
    position: absolute;
    color: ${colores.colorCenizaOscuro};
    text-align: center;
    width:100%;
    margin: 0 auto;
    font-size: 20px;
    background: rgba(0,0,0,.4);
    bottom: 0;
    padding: 10px;
`;
const ParrafoHeader = styled.p`
        text-align: center;
        color: ${colores.colorParrafos};
        font-weight: 700;
        font-size:14px;
        line-height: 20px;
`;
const ParrafoBody = styled.p`

    text-align: justify;
    color: ${colores.colorParrafos};
    font-weight: 500;
    font-size:14px;
    line-height: 25px;    
    

`;
const ParrafoFooter = styled.p`

        text-align: center;
        color: ${colores.colorParrafos};
        font-weight: 500;
        font-size:14px;
        line-height: 20px;
`;
const ServiciosUl = styled.ul`
    margin-left:40px ;
    list-style: none;
    padding: 0px;
    margin-left: 10px;

    
`;

const ServiciosLi = styled.li`
    font-size:14px;
    color: ${colores.colorParrafos};
    &:before
        {
            content: url("data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%2016%2016%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22color%3A%20rgb%2815%2C%2073%2C%20176%29%3B%20font-size%3A%2020px%3B%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M15.67%207.066l-1.08-1.34a1.5%201.5%200%200%201-.309-.77l-.19-1.698a1.51%201.51%200%200%200-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504%201.504%200%200%200-1.878%200l-1.34%201.08a1.5%201.5%200%200%201-.77.31l-1.698.19c-.7.08-1.25.63-1.33%201.329l-.19%201.699c-.03.3-.159.56-.329.78L.33%207.055a1.504%201.504%200%200%200%200%201.878l1.08%201.34c.17.22.28.48.31.77l.19%201.698c.08.7.63%201.25%201.329%201.33l1.699.19c.3.03.56.159.78.329l1.339%201.08c.55.439%201.329.439%201.878%200l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08%201.25-.63%201.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504%201.504%200%200%200%200-1.878zM6.5%2012.01L3%208.51l1.5-1.5%202%202%205-5L13%205.56l-6.5%206.45z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");  
            display: inline-block; 
            padding-right: 10px;
            font-size: 40px;
            line-height: 25px;
            vertical-align: -4px;
            width: 15px;
        }
    

`;
const Button = styled.button`
    background: #0F49B0;
    border: none;
    border-radius: 5px;
    color: ${colores.colorCenizaOscuro};
    cursor: pointer;
    padding:9px;
    font-size: 14px;
    transition: .3s;
    :hover{
        background:#00389B;
        transform: scale(1.15);
    }
`;

/**
 * Ventajas
 */
const Ventajas = styled.div`

    padding-top: 2.5rem;
    padding-bottom: 3.5rem;
    background: #F7F4F4;

`;
const UlVentajas = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const LiVentajas = styled.li`
    max-width: 350px;
    box-sizing: border-box;
    padding: 2rem 0 2rem 5rem;
    list-style: none;
`;
const H2Ventajas = styled.h2`
    color: var(--fuente-ceniza-oscuro);
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;

`;
const LineText = styled.p`
    line-height: normal;

`;
export {ContentnServicios, ContentDataGrid,Grid1,H2,ParrafoHeader,ParrafoBody,ParrafoFooter,ServiciosUl,ServiciosLi,Button,Titulo,
    Ventajas,
    UlVentajas,
    LiVentajas,
    H2Ventajas,
    LineText,
}