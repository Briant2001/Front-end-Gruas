import { ContentnServicios,ContentDataGrid,Grids,Grid1,H2,Parrafo,ServiciosLi, ServiciosUl,ParrafoFooter, Button } from "../elements-css/Servicios"
import {GoVerified} from 'react-icons/go';
console.log(GoVerified);
const GridServices =()=>{
    const iconsPropertis = {
        li:{color:"#0F49B0",fontSize:"20px"},
    };
    return (

        <ContentnServicios>
            <ContentDataGrid>
                <Grid1 >
                    < H2>Servicios para empresas y particulares</H2>
                </Grid1>
                <Grid1 >
                    <Parrafo>
                        Ofrecemos servicios de traslado de coches y motos tanto a empresas como a particulares:
                    </Parrafo>
                    <ServiciosUl>
                        <ServiciosLi>Llevamos el vehículo al taller que elija el cliente</ServiciosLi>
                        <ServiciosLi>Movemos vehículos dados de baja hasta el desguace.</ServiciosLi>
                        <ServiciosLi>Trasladamos vehículos sin seguro que no pueden circular.</ServiciosLi>
                        <ServiciosLi>Transportamos coches y motos de un concesionario a otro.</ServiciosLi>
                        
                    </ServiciosUl>
                    <ParrafoFooter>Contamos con camiones y material especializado para el traslado de motocicletas y turismos.</ParrafoFooter>
                    <Button>Cotizar Ahora</Button>
                </Grid1>

                <Grid1 >
                    <Parrafo>
                        Ofrecemos servicios de traslado de coches y motos tanto a empresas como a particulares:
                    </Parrafo>
                    <ServiciosUl>
                        <ServiciosLi>Llevamos el vehículo al taller que elija el cliente</ServiciosLi>
                        <ServiciosLi>Movemos vehículos dados de baja hasta el desguace.</ServiciosLi>
                        <ServiciosLi>Trasladamos vehículos sin seguro que no pueden circular.</ServiciosLi>
                        <ServiciosLi>Transportamos coches y motos de un concesionario a otro.</ServiciosLi>
                        
                    </ServiciosUl>
                    <ParrafoFooter>Contamos con camiones y material especializado para el traslado de motocicletas y turismos.</ParrafoFooter>
                    <Button>Cotizar Ahora</Button>
                </Grid1>
                <Grid1 >
                    < H2>Servicios para empresas y particulares</H2>
                </Grid1>
            </ContentDataGrid>
        </ContentnServicios>
    )
        
        
}
export {GridServices}