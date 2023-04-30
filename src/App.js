import Facturacion from "./view/Facturacion";
import Home from "./view/Home";
import { Menu } from "./view/Menu";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Servicios from "./view/Servicios";
import {  useState } from "react";
import {Footer} from '../src/components/ComponntsHome';

//import { Titulo } from "./elements-css/Elements-Modal";


//
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
                    <Route path="/Servicios" element={<Servicios />}></Route>
                    <Route path="/Facturacion" element={<Facturacion/>}></Route>
                </Routes>
                
            </main>
        </Router>
        <Footer></Footer>

    </>
);
}

export default App;
