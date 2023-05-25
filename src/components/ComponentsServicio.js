import { ContentnServicios,ContentDataGrid,Titulo,Grid1,H2,ParrafoHeader,
    ParrafoBody,ServiciosLi, ServiciosUl,ParrafoFooter, Button, Ventajas,UlVentajas,
    LiVentajas,H2Ventajas,LineText } from "../elements-css/Servicios";
import { BiTimer } from 'react-icons/bi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FiUserCheck } from 'react-icons/fi';
import { Route } from "react-router-dom";
import { Listas } from "./Li";
import { Li } from "../elements-css/Menu";
const GridServices =()=>{ 
    return (

        <ContentnServicios>
            <Titulo>Los Mejores Servicios Disponibles</Titulo>
            <ContentDataGrid>
                <Grid1 >
                    < H2>Servicios para empresas y particulares</H2>
                </Grid1>
                <Grid1 >
                    <ParrafoHeader>
                        Ofrecemos servicios de traslado de coches y motos tanto a empresas como a particulares:
                    </ParrafoHeader>
                    <ParrafoBody>
                        <ServiciosUl>
                            <ServiciosLi>Llevamos el vehículo al taller que elija el cliente</ServiciosLi>
                            <ServiciosLi>Movemos vehículos dados de baja hasta el desguace.</ServiciosLi>
                            <ServiciosLi>Trasladamos vehículos sin seguro que no pueden circular.</ServiciosLi>
                            <ServiciosLi>Transportamos coches y motos de un concesionario a otro.</ServiciosLi>
                        </ServiciosUl>
                    </ParrafoBody>
                    
                    <ParrafoFooter>Contamos con camiones y material especializado para el traslado de motocicletas y turismos.</ParrafoFooter>
                    <Li barra="false" to="/PresupuestoEnLinea">
                        <Button>Cotizar Ahora</Button>
                    </Li>
                </Grid1>


                <Grid1 >
                    < H2>Translados de vehículos pesados.</H2>
                </Grid1>
                <Grid1 >
                    <ParrafoHeader>
                        Ofrecemos servicios de traslado de coches y motos tanto a empresas como a particulares:
                    </ParrafoHeader>
                    <ParrafoBody>
                        En Grúas Arreola tenemos una flota de camiones con la que podemos realizar el traslado de vehículos pesados: rígidos, tractoras, autocares y algún tipo de maquinaria
                    </ParrafoBody>
                    <ParrafoFooter>
                        Contamos con camiones y material especializado para el traslado de motocicletas y turismos.</ParrafoFooter>
                    <Button>Cotizar Ahora</Button>
                </Grid1>

                <Grid1 >
                    < H2>Rescates de coches, motos y camiones</H2>
                </Grid1>
                <Grid1 >
                    <ParrafoHeader>
                        Ofrecemos servicios de traslado de coches y motos tanto a empresas como a particulares:
                    </ParrafoHeader>
                    <ParrafoBody>
                        Realizamos rescates de vehículos accidentados, sea cuál sea la situación de los mismos: turismos y coches, motos, furgonetas y vehículos sobredimensionados, vehículos pesados y camiones, vehículos especiales, etc.
                        Disponemos de medios humanos y mecánicos para rescatar cualquier vehículo siniestrado en vías urbanas, vías rápidas o salidas desde vías de montaña.
                    </ParrafoBody>
                    <ParrafoFooter>
                    </ParrafoFooter>
                    <Button>Cotizar Ahora</Button>
                </Grid1>


            </ContentDataGrid>
        </ContentnServicios>
    )
        
        
}

const VentajasArreola = ()=>{
    const iconsPropertis = {
        timer:{color:"black",fontSize:"35px"},
        money:{color:"black",fontSize:"35px"},
        user:{color:"black",fontSize:"35px"},
    };
    return(
        <Ventajas className="diferenciales container">
            <Titulo>Ventajas de Gruas Arreola</Titulo>
                <UlVentajas >
                    <LiVentajas className="diferenciales__item diferenciales__item-relog">
                        <BiTimer style={iconsPropertis.timer}/>
                        <H2Ventajas className="item__titulo">Tiempo</H2Ventajas>
                        <LineText className="item__texto">¡El tiempo es importante! Trabajamos en ritmo acelerado, para atender las solicitudes de nuestros clientes.</LineText>
                    </LiVentajas>
                    <LiVentajas className="diferenciales__item diferenciales__item-dinero">
                        <RiMoneyDollarCircleFill style={iconsPropertis.money}/>
                        <H2Ventajas className="item__titulo">Enfoque</H2Ventajas>
                        <LineText className="item__texto">Ofrecemos servicios de calidad con precios accesibles.</LineText>
                    </LiVentajas>
                    <LiVentajas className="diferenciales__item diferenciales__item-quimica">
                        <FiUserCheck style={iconsPropertis.user}/>
                        <H2Ventajas className="item__titulo">Especialistas</H2Ventajas>
                        <LineText className="item__texto">Equipo especializado, con experiencia de control de maniobras.</LineText>
                    </LiVentajas>
                </UlVentajas>
            </Ventajas>
    )
}
export {GridServices,VentajasArreola}