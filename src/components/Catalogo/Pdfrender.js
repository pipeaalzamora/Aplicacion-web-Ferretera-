//CSS
import "./pdfrender.css"
//REACT
import React,{useState, useRef, useEffect} from 'react';
import axios from 'axios'
//MUI
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//PDF
import { usePdf } from '@mikecousins/react-pdf';
//Redux
import {update_state} from '../../store/slices/CatalogoReducer'
import {useDispatch, useSelector} from 'react-redux'



export default function Pdfrender() {

  /*Redux */
  const {data: PaginaCatalogo} = useSelector(state => state.pagina_catalogo)
  const dispatch = useDispatch()
  

  const canvasRef = useRef(null);
  
  /*UseState´s*/
  const [page, setPage] = useState(0);
  const [catalogo_secciones, setCatalogosecciones]=useState([])
  const [selectoption, setSelectoption] = useState("def")
  const [selectorPage, setSelectorPage] = useState ([])
  



  const { pdfDocument } = usePdf({
    file: PaginaCatalogo,
    canvasRef,
    scale: 1.5,
  });


 
  /*api paginado*/
  useEffect(() => {
    async function paginado() {
      const URL = 'http://192.168.0.160:3001/api/paginado';
      try {
        const paginados = await axios.get(URL);
        const paginadosArray = Array.isArray(paginados.data) ? paginados.data : [paginados.data];
        const opciones = paginadosArray.map((paginado, index) => (
          <option key={index} value={paginado.data}>
            {`Página ${paginado.index}`}
          </option>
        ));
        
        setSelectorPage(opciones);
      } catch (err) {
        alert(err);
      }
    }
    paginado();
  }, []);
  
  
  
  
  
  /*api catalogo_secciones*/
  useEffect(() => {
    async function catalogo_secciones() {
      const URL = 'http://192.168.0.160:3001/api/catalogo_secciones';
      try {
        const catalogo_secciones = await axios.get(URL)
        setCatalogosecciones(catalogo_secciones.data);
      } catch (error) {
        alert(error);
        }
    }
    catalogo_secciones();
  }, [])


  /*manejo de cambio de pagina*/
  const HandlePage = (accion) => {
    if (accion === "+"){
      const arr_url = String(PaginaCatalogo).split('/')
      const file = arr_url[arr_url.length - 1]
      const number = parseInt(file.replace(/\D/g, "")) + 1
      dispatch(update_state(number))
      setPage (number)
    }  
    if (accion === "-"){
      const arr_url = String(PaginaCatalogo).split('/')
      const file = arr_url[arr_url.length - 1]
      const number = parseInt(file.replace(/\D/g, "")) - 1
      dispatch(update_state(number))
      if (number == -1){
        setPage(0)
      }else{
        setPage(number)
      }
      
    }
  }

 
  

  const OnChangeSelectSeccion = event =>{
    const selectpaginanumero = event.target.value;
    setSelectoption(selectpaginanumero);
    dispatch(update_state(selectpaginanumero))
    setPage(selectpaginanumero)
  }
   /* Cambio de paginas rederizado y selector*/
   
   const paginado = (event) => {
    setPage(event.target.value);
  }


   const handlePageChange = (event) => {
    const selectedPage = parseInt(event.target.value);
    setPage(selectedPage);
  };
  return (
  <>
    <div className="pdf">
      {/* Botones de gestion (+-) PDF */}
      <div className="botones-select">
       <Button className='anterior' size="medium" variant="contained" onClick={ () => {HandlePage('-')}}>Anterior</Button>
      
     
      {/* Menu de secciones del catalogo */}
        <Select className="select_categorias" id="select_seccion" value={selectoption} defaultValue={selectoption} onChange={OnChangeSelectSeccion}>
          <MenuItem className="" value="def">Seleccionar categoría</MenuItem>
            {catalogo_secciones.map((seccion) => (
          <MenuItem key={seccion.id} value={seccion.numero_pagina}>{seccion.seccion}</MenuItem>
        ))}
        </Select>

       

        <Button className='siguente' size="medium" variant="contained" onClick={ () => {HandlePage('+')}}>Siguente</Button>
      </div>

      <div className="selector_paginas">
        
        <p className="mostradorpagina">Estás en la página {page}</p>
      </div>
      <div>
      <label htmlFor="selector">Selecciona una página:</label>
      <select id="selector">
        {selectorPage}
      </select>
    </div>


      {/* Renderizado del catalogo PDF */}
      {!pdfDocument &&  (<div id="spinner_carga" className="spinner"></div>)}
      <div className="pdfrender">
        <canvas ref={canvasRef} />
      </div>
    </div>
  </>
  );
}


