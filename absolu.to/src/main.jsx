import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Inicio from './views/Inicio'
import Burguer from './Components/Burguer'
import Nosotros from './views/Nosotros'
import Showroom from './views/Showroom'
import Servicios from './views/Servicios'
import Contacto from './views/Contacto'
import Razones from './views/Razones'
import Reactiva from './views/Reactiva'
import Equipo from './views/Equipo'
import Carrusell from './Components/Carrusell'
import Otra from './views/Otra'
import Privacidad from './views/Privacidad';
import Porfolio from './views/Porfolio'
import Formula from './views/Formula'
import Cockies from './views/Cockies';
import { BrowserRouter } from 'react-router-dom';

import './css/style.css'
import { useEffect } from 'react'

// Componente para manejar el scroll al inicio
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}


ReactDOM.createRoot(document.getElementById('root')).render(
    
  
  
 
    <BrowserRouter>
       <ScrollToTop />
   {/* el header que es comun para todaslas rutas */}
    <Header/>
    
      <Routes>
     {/* todos los archivos con sus rutas restringidas menos la pagina de inicio,con un ternario para que tengan que estar logeados para acceder */}
          <Route path='/' element={<Inicio/>}/> 
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/showroom' element={<Showroom/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/razones' element={<Razones/>}/>
          <Route path='/reactiva' element={<Reactiva/>}/>
          <Route path='/equipo' element={<Equipo/>}/>
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/porfolio" element={<Porfolio />} />
           <Route path="/formula" element={<Formula />} />
            <Route path="/cockies" element={<Cockies />} />
          
        {/* <Route path='/login' element={localStorage.getItem('Usuario') == null? <Login/>:<Inicio/>}/>
        <Route path ='/login/nuevoUsuario' element = {<NuevoUsuario/>}/>
        <Route path ='/productos' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Productos/>}/>
        <Route path ='/nosotros' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Nosotros/>}/>
       
       
        <Route path ='/miPerfil' element = {localStorage.getItem('Usuario') ==null? <Login/>:<MiPerfil/>}/>
        <Route path ='/miPerfil/editar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<EditarPerfiles/>}/>
        
        
       
        <Route path ='/Consultas' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Consultas/>}/>
        <Route path ='/Consultas/editar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<EditarConsultas/>}/>
        <Route path ='/Consultas/borrar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<BorrarConsultas/>}/>
        <Route path ='/Consultas/nuevaConsulta' element = {localStorage.getItem('Usuario') ==null? <Login/>:<NuevaConsulta/>}/> */} 
       
      </Routes>
   {/* el footer comun para todas las rutas */}
 
   <Footer/>
    
    </BrowserRouter>
   
  
    
)
