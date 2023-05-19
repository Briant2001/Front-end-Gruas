import Facturacion from "./view/Facturacion";
import Home from "./view/Home";
import { Menu } from "./view/Menu";
import Servicio from "./view/Servicios";
import {Footer} from '../src/components/Footer';

import {BrowserRouter as Router, Routes,Route } from "react-router-dom";



function App() {
    return (
    <>
        <Router>
            <header>
                <Menu/>
            </header>
            
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Servicios" element={<Servicio />}></Route>
                    <Route path="/Facturacion" element={<Facturacion/>}></Route>
                </Routes>
                
            </main>
        </Router>
        <Footer></Footer>

    </>
);
}

export default App;
