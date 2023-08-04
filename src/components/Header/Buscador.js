//React
import React, { useState } from 'react';
import { Select,TextField, MenuItem, InputLabel } from '@mui/material';
import axios from 'axios'
import Modal from "react-modal"
import {Link, useNavigate} from 'react-router-dom';
//MUI
import Backdrop from '@mui/material/Backdrop';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
//Redux
import {update_state} from '../../store/slices/CatalogoReducer'
import {useDispatch} from 'react-redux'





export default function Buscador({ navigation }) {

  /*Router */
  const navigate = useNavigate()

  /*Redux*/
  const dispatch = useDispatch()

  /*UseState's*/

  //Elementos Buscador
  const [  ValueSelectBuscador ,   set_ValueSelectBuscador  ] = useState ('codigo');
  const [  InputTextBuscador   ,   set_InputTextBuscador    ] = useState ('');
  const [  ResultadoBusqueda   ,   set_ResultadoBusqueda    ] = useState ([]);
  const [  textlabel      ,   set_textlabel         ] = useState ('Buscar producto por Código')
  const [BotonBuscarShow, set_BotonBuscarShow] = useState(true);

  //Elementos Modal
  const [ ModalShow, set_ShowModal ] = useState(false);

  //Elementos paginación de resultado en Modal. El paginado es de 10 elementos por pagina
  const [  inicio_slice    , set_InicioSlice      ] = useState(0);
  const [  final_slice     , set_FinalSlice       ] = useState(10);
  const [  UbicacionPaginado , set_UbicacionPaginado ] = useState(1);
  const [  CantidadPaginas , set_CantidadPaginas  ] = useState(1);

  //Elemento Spinner (Load)
  const [SpinerLoad, set_ShowSpinnerLoad] = useState(false);

  

  /*
    //TODO
    Funcionalidades y logica del componente de busqueda
    V1.0
  */

  const OnKeyDown_input_text_buscador = (event) => {
    if (event.key === 'Backspace') {
      set_InputTextBuscador('')
      set_BotonBuscarShow(true)
    }
  }

  //Manejador de cambios de input_text_buscador
  const OnChange_input_text_buscador = (event) => {
    const IdentificadorCodigo = (x) => {
        if (ValueSelectBuscador === 'codigo') {
            const regex = /[a-z A-Z !@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?¿]+/gi;
            const search = x.match(regex) 
            if (search){
              const eliminador_de_letras = search.map((val => {
                const letter_replace = x.replace(val.toUpperCase(), '')
                return letter_replace
              }))
              const input_buscador = eliminador_de_letras[0]
              x = input_buscador
              alert("Se deben ingresar solo datos numéricos")
            }
            if (x.length === 2) {
                x += '-'
            }
            if (x.length === 5) {
              x += '-'  
            }
            if (x.length > 9) {
              x = x.slice(0, 9)
            }
        }
        set_InputTextBuscador(x.toUpperCase())
    }
    IdentificadorCodigo((event.target.value).toUpperCase())
    const value_input = event.target.value
    if (value_input.length > 0){
      set_BotonBuscarShow(false)
    }
    if (value_input.length <= 0){
      set_BotonBuscarShow(true)
    }
  }



  //Manejador de cambios de select_buscador
  const OnChangeSelectBuscador = (event) => {
    set_InputTextBuscador("")
    set_ValueSelectBuscador(event.target.value);
    if (event.target.value === 'codigo') {
      set_textlabel('Buscar producto por Código');
    } else if (event.target.value === 'nombre') {
      set_textlabel('Buscar producto por Nombre');
    }
  };



  //Boton de Submit del buscador
  const OnClickBotonBusqueda = async () => {
    try{
      set_ShowSpinnerLoad(true)
      const response = await axios.get(`http://192.168.0.160:3001/api/busqueda_catalogo/${ValueSelectBuscador.toLowerCase()}/${InputTextBuscador.toLowerCase()}/`)
        .then((res) => {
          return res.data
        })
        if (response.length > 1){
          const fondo = document.querySelector('#root'); 
          fondo.style.cssText += 'filter: blur(1.5rem);';
          const paginastotales = Math.ceil (response.length /10)
          set_CantidadPaginas(paginastotales)
          set_ResultadoBusqueda(response)
          set_ShowModal(true)
        }else{
          dispatch(update_state(response[0]["pagina"]))
          navigate('/catalogo')
        }
    }catch(err) {
      console.log(err)
      }finally {
        set_ShowSpinnerLoad(false)
    }     
    
  }



  //Funcion que maneja el cierre del modal  
  function closeModal() {
    set_ShowModal(false)
    const fondo = document.querySelector('#root'); 
    fondo.style.cssText += 'filter: none';    
  }



  // Manejador de cambio de pagina en el paginador del Modal
  const OnChangePaginacion = (e, p) => {
    set_UbicacionPaginado(p)
    if (p == 1){
      set_InicioSlice(0)
      set_FinalSlice(10)
    }
    else{
      set_InicioSlice((p*10)-10)
      if (p === ResultadoBusqueda.length){
        set_FinalSlice(ResultadoBusqueda.length-1)
      }else{
        set_FinalSlice(((p*10)-10)+10)
      }
    }
  }







  return (
    <>
  <div className='box'>
      {/* Formulario Buscador DIV PADRE */}
      <div className="Search">

      

   {/* DIV 1 */}      
   <div id="BuscadorSelect">
          <Select 
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  //borderColor: 'green',
                },
                '&:hover fieldset': {
                  //borderColor: 'green',
                },
                '&.Mui-focused fieldset': {
                  //borderColor: 'green',
                },
              },
              '& .MuiOutlinedInput-input': {
                color: 'black',
                backgroundColor: 'white',
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ValueSelectBuscador}
            onChange={OnChangeSelectBuscador}
            defaultValue="codigo" 
            MenuProps={{ disableScrollLock: true }}
          >
            <MenuItem className="codigo" value={"codigo"}>Código</MenuItem>
            <MenuItem className="nombre"  value={"nombre"}>Nombre</MenuItem>
          </Select>
        </div>


        {/* DIV 2 */}
        <div className="Buscadorlabel" id="input_text_buscador">
          <TextField   
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    //borderColor: 'green',
                  },
                  '&:hover fieldset': {
                    //borderColor: 'green',
                  },
                  '&.Mui-focused fieldset': {
                    //borderColor: 'green',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  //color: 'black',
                  //backgroundColor: 'white',
                },
              }}
              id="filled-basic" 
              label={textlabel}
              variant="outlined"  
              value={InputTextBuscador} 
              style = {{width: 240}}
              onChange={OnChange_input_text_buscador} 
              onKeyDown={OnKeyDown_input_text_buscador}
          />
        </div>

         
           
     


        {/* DIV 3 */}  
        <div id="BuscadorBoton">
          <LoadingButton
            sx={{height: 53}}
            onClick={OnClickBotonBusqueda}
            endIcon={<SearchIcon />}
            loading={SpinerLoad}
            loadingPosition="end"
            variant="contained"
            disabled={BotonBuscarShow}
          >
            <span>Buscar</span>
          </LoadingButton>
        </div>
              

    </div>
              
             

  </div>
 
 



      

      {/* Modal de resultados de busqueda */}
     
  
     
        <Modal
          className="Modal"
          isOpen={ModalShow}
          onRequestClose={closeModal}
          ariaHideApp={false}
          
          contentLabel="Example Modal"
        >
          <Pagination
            color="primary"
            count={CantidadPaginas}
            page={UbicacionPaginado}
            onChange={OnChangePaginacion} 
          />

          <h2>Resultados de la busqueda:</h2>
          <Button onClick={closeModal} variant="contained">Cerrar</Button>
          <ul>
            {ResultadoBusqueda.slice(inicio_slice, final_slice).map((item) => (
                <Card
                className='tarjetas' 
                key={item.id}
                sx={{ maxWidth: 500}}>
                  <CardActionArea onClick={() => {    
                    dispatch(update_state(item.pagina))
                    closeModal()
                    navigate('/catalogo')
                    }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.descripcion}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.codigo}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            ))}
          </ul>

          <Pagination
            className='pagina2'
            color="primary"
            count={CantidadPaginas}
            page={UbicacionPaginado}
            onChange={OnChangePaginacion} 
          />
                     
        </Modal>
        
      


    </>
  )
}
