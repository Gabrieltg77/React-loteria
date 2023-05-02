import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Mega from "../pages/Mega";
import Loto from "../pages/Loto";
import Principal from "../pages/Principal";
import Quina from "../pages/Quina";

function Rotas() {

 
return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Principal />} />
         <Route path="/megasena" element={<Mega />} />
         <Route path="/lotofacil" element={<Loto />} />
         <Route path="/quina" element={<Quina />} />
        </Routes>
    </BrowserRouter>
    );
    }
    
export default Rotas;