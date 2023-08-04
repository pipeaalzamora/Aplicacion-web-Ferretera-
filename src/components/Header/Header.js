import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.png";
import Buscador from "./Buscador";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menutoggle =() =>
    setMenuOpen(!menuOpen)
   
  function mantencion () {
    alert ('Proximamente');
  }
    
  return (
             
    <header>
    
     {/*DIV 1-logo*/}

      <div className="logo">
        <a className='linklogo' href="/">
          <img className="logo-Ecosa" src={logo} alt="logo-Ecosa" />
        </a>
      </div>


      {/*DIV 2 - Buscador*/ }
      
      <Buscador/> 
          <Button className="tracking"
            sx={{height: 53}}
            onClick={mantencion}
            endIcon={<LocalShippingIcon/>}
            variant="contained"
          >
            <span>Seguimientio</span>
          </Button>
        
      {/* DIV3 - navbar */}

      <nav className={`${menuOpen ? "active" : ""}`}>
        <div className="nav-menu">
          <div className="refnav">
            <a href="/" onClick={menutoggle}>Inicio</a>
            <a href="/catalogo" onClick={menutoggle}>Catálogo</a>
            <a href="/nosotros" onClick={menutoggle}>Nosotros</a>
            <a href="/contacto" onClick={menutoggle}>Contacto</a>
          </div>
        </div>
      </nav>

    </header>
);
};

export default Header;
