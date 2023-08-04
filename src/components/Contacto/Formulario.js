import React from 'react';
import { useFormik } from 'formik';
import "./Formulario.css"
import axios from 'axios'




export default function Formulario () {


  /*Validación del formulario*/

  const validate = (values) => {
      const errors ={}; 
      const Nombres = values.Nombres
      const Apellidos = values.Apellidos
      const Correo = values.correo
      const Asunto = values.Asunto
      const Mensaje = values.Mensaje
      const regex = /^[\w.+-]+(?:\w*([A-Za-z\d!#$%&'*+/=?^_`{|}~-])\1\w*)*@[\w.-]+\.[\w-]{2,4}$/;

    switch (Nombres) {
      case !Nombres :
       errors.Nombres = 'Requerido';
      break;
      case Nombres.includes('<script>'):
       errors.Nombres = 'te estai avivando';
      break;
      case Nombres.length === 0:
        errors.Nombres = 'No tiene ningun caracter'
      break;
      default:
      break;
        
    }

    switch(Apellidos){
      case !Apellidos:
       errors.Apellidos = 'Requerido';
      break;
      case Apellidos.length === 0:
        errors.Apellidos = 'No tiene ningun caracter'
      break;
      default:
      break;
    
    }

    switch(Correo){
      case !Correo:
       errors.Correo = 'Requerido';
      break;   
      case regex.test(Correo):
       errors.Correo = 'Correo invalido intentelo nuevamente';
       break;
       default:
       break;   
   }

    switch(Asunto){
      case !Asunto:
       errors.Asunto = 'Requerido';
      break;
      case Asunto.Max > 50:
       errors.Asunto = 'Ha excedido el maximo de caracteres (50)';
      break;
      default:
      break;
    
    }

    switch(Mensaje){
      case !Mensaje:
       errors.Mensaje = 'Requerido';
      break;
      case Mensaje.Max > 500:
       errors.Mensaje = 'Ha excedido el maximo de caracteres (500)';
      break;
      default:
      break;
      
    };
      




    return errors;
  }




  const formik = useFormik({
    initialValues: {
      Nombres: '',
      Apellidos: '',
      Correo: '',
      Asunto:'',
      Mensaje:'',
    },
    validate,
    onSubmit: values => {
      axios.post('http://192.168.0.160:3001/api/datosformulario',values)
      .then(function(response){
        alert("Ok")
        console.log(response.status)
      })
      .catch (function(err){
        console.log(err)
      })


      
    },
  });




  return (

    /*Formulario*/
 
    <div className='Formulario'>
       <h1>Formulario de contacto</h1>
    <form className="Contacto" onSubmit={formik.handleSubmit}>
        
        <label className="form_p" htmlFor="Nombres">Nombres</label>
          <input
            className='form'
            id="Nombres"
            name="Nombres"
            type="text"
            autoComplete='true'
            onChange={formik.handleChange}
            value={formik.values.Nombres}
          />
      {formik.errors.Nombres ? <div>{formik.errors.Nombres}</div> : null}

        <label className="form_p" htmlFor="Apellidos">Apellidos</label>
          <input
            className='form'
            id="Apellidos"
            name="Apellidos"
            type="text"
            autoComplete='true'
            onChange={formik.handleChange}
            value={formik.values.Apellidos}
        />
      {formik.errors.Apellidos ? <div>{formik.errors.Apellidos}</div> : null}

        <label className="form_p" htmlFor="Correo">Correo Electronico</label>
          <input
            className='form'
            id="Correo"
            name="Correo"
            type="email"
            autoComplete='true'
            onChange={formik.handleChange}
            value={formik.values.Correo}
          />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label className="form_p" htmlFor="Asunto">Asunto</label>
          <input
            className='form'
            id="Asunto"
            name="Asunto"
            type="text"
            autoComplete='true'
            onChange={formik.handleChange}
            value={formik.values.Asunto}
          />
      {formik.errors.Asunto ? <div>{formik.errors.Asunto}</div> : null}
      
        <label className="form_p" htmlFor='Mensaje'>Mensaje</label>
          <textarea
            id="Mensaje"
            name="Mensaje"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Mensaje}
          ></textarea>
        {formik.errors.Mensaje ? <div>{formik.errors.Mensaje}</div> : null}
          
    </form>
      <button className='enviar' type="submit">Enviar</button>
    </div>

  );
};



