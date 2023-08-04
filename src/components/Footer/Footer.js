import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Footer.css"
import footerlogo from "./footerlogo.png"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Footer() { 


   return  ( 
    <footer>

        {/* DIV 1-Redes sociales */}
        <div className="logo-social">
            <div className="logo-footer">
             <img className="logo-ecosa" src={footerlogo} alt="Logo de la empresa" />
        </div>
        <div className="social">
          <div className="iconos-sociales">
            <LocalPhoneIcon className='icon-mui' />
            <WhatsAppIcon className='icon-mui' />
            <EmailIcon className='icon-mui' />
          </div>
        <div className="redes-sociales">
            <a href='tel:+56 32-229 3300' className="phone">+56-322293300</a>
            <a href="https://wa.me/+56972938676" className='W'>+56-972938676</a>
            <a href="mailto:ecosa@ecosa.cl" className="mail">eco@ecosa.cl</a>
          </div>
        </div>
      </div>
      
       {/* DIV 2 - menuFooter */}
       <div className='line'>
           <ul className='lines'>
              <a href="/">Inicio</a>
              <a href="/catalogo">Catálogo</a>
              <a href="/contacto">Contacto</a>
              <a href="/nosotros">Nosotros</a>
          </ul>
      </div>

      {/* DIV 3 - Boletin de ventas */}
      <div className='box2'>
         <InputLabel htmlFor="input-with-sx">Boletin de Ventas</InputLabel>
          <br/>
          <div className="newsletter">
              <LoadingButton
                //onClick={handleClick}
                endIcon={<SendIcon />}
                //loading={loading}
                loadingPosition="end"
                variant="contained"
                >
                  <span>Enviar</span>
                </LoadingButton>
                <div className='text-input'>
                  <EmailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField  id="input-with-sx" label="Ingresa tu correo" variant="outlined" />
                </div>
          </div>
      </div>

        {/*DIV 4 - Mapa */} 
        <div className="mapa">
          <div className="googlemap">
            <iframe className='frame-map' title=" el mapa y k paza"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.8576390441576!2d-71.56556339650342!3d-33.112826318709075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689df2af4a82229%3A0x4e7ff7c83d4e5d6d!2sImportadora%20ECO%20S.A!5e0!3m2!1ses-419!2scl!4v1680176263828!5m2!1ses-419!2scl"     allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
            <div className='localizacion'>
             <AddLocationIcon className='icon-adress'/>
                <a href='https://goo.gl/maps/j2HEcEHDh3277Mye6'>Avenida Central N° 490,Valparaiso, Placilla.</a>
          </div>
        </div> 
 


    </footer>
    
   )
}





