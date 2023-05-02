import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/quina') {
          setActiveLink('quina');
        } else if (path === '/megasena') {
          setActiveLink('megasena');
        } else if (path === '/lotofacil') {
          setActiveLink('lotofacil');
        }
      }, []);
    return (
        <nav>
            <ul>
                <Link to="/lotofacil" className="navbar" id={activeLink === 'lotofacil' ? 'navbarActive' : 'tituloLOTO'}>Lotofácil</Link>
                <Link to="/megasena" className="navbar"  id={activeLink === 'megasena' ? 'navbarActive' : 'tituloMega'}>Megasena</Link>
                <Link to="/quina" className="navbar"  id={activeLink === 'quina' ? 'navbarActive' : 'tituloQuina'}>Quina</Link>
            </ul>
        </nav>
    );
}
export default Navbar;