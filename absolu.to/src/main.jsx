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
import Coockies from './views/Coockies';
import Index from './views/Index';
import Somos from './views/Somos';
import{ Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './views/Home';
import Hacemos from './views/Hacemos';
import Insights from './views/Insight';



import './css/style.css'
import { useEffect } from 'react'
import Sostenibilidad from './views/Sostenibilidad';

// Componente para manejar el scroll al inicio
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}


ReactDOM.createRoot(document.getElementById('root')).render(
    
  
 
    
 
    <Router>
       <ScrollToTop />
        <HelmetProvider>
   {/* el header que es comun para todaslas rutas */}
    <Header/>
    
      <Routes>
     {/* todos los archivos con sus rutas restringidas menos la pagina de inicio,con un ternario para que tengan que estar logeados para acceder */}
          <Route path='/origen' element={<Inicio/>}/> 
           {/* <Route path='/' element={<Index/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/showroom' element={<Showroom/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/insights' element={<Insights/>}/>
          <Route path='/metodo' element={<Reactiva/>}/>
          <Route path='/equipo' element={<Equipo/>}/>
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/porfolio" element={<Porfolio />} />
          <Route path="/somos" element={<Somos />} />
          <Route path="/hacemos" element={<Hacemos />} />
           <Route path='/sostenibilidad' element={<Sostenibilidad/>}/>
           <Route path="/formula" element={<Formula />} />
            <Route path="/coockies" element={<Coockies />} />
             <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
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
      </HelmetProvider>
   {/* el footer comun para todas las rutas */}
 
   <Footer/>
    
    </Router>
   
  
    
)
