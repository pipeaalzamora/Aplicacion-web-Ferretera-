import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nosotros from "./components/Nosotros/Nosotros";
import Formulario from "./components/Contacto/Formulario";
import Pdfrender from "./components/Catalogo/Pdfrender";
import Inicio from "./components/Inicio/Inicio";

/*redux*/
import {Provider} from 'react-redux'
import store from './store/store'


export default function app() {
  return (
    /* rutas */
   <>
    <Provider store={store}> 
        <BrowserRouter>
          <Header/> 
          <Routes>
           <Route path="/"         element={<Inicio/>}     errorElement={<h1>Error al acceder a esta pagina</h1>}></Route>
           <Route path="/nosotros" element={<Nosotros/>}   errorElement={<h1>Error al acceder a esta pagina</h1>}></Route>
           <Route path="/contacto" element={<Formulario/>} errorElement={<h1>Error al acceder a esta pagina</h1>}></Route>
           <Route path="/catalogo" element={<Pdfrender/>}  errorElement={<h1>Error al acceder a esta pagina</h1>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>   
      </Provider>
    </>
  );
}
