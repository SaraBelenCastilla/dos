import { useRef,useState,useEffect } from "react";
import ReactPlayer from 'react-player'
  import video from '../assets/video.mp4'
  import Vertical from '../assets/vertical.mp4'
// import HorizontalScroll from '../Components/HorizontalScroll/HorizontalScroll'
// import HorizontalScroll1 from '../Components/HorizontalScroll/HorizontalScroll1'
// import HorizontalScroll2 from '../Components/HorizontalScroll/HorizontalScroll2'
// import foto from  '../div/item01.png'
import CarrusellMovil from '../Components/CarrusellMovil'
import Carrusell from '../Components/Carrusell'
import CarrusellUno from '../Components/CarrusellUno'
import Sectin51 from '../div/Sectin51'
// import  Pagepilling from '../Components/Pagepilling'
import Carrusell0 from '../Components/Carrusell0'
import Carrusell01 from '../Components/Carrusell01'
import Carrusell5 from '../Components/Carrusell5'
import Secciones from '../views/Secciones' 
import Footer from '../Components/Footer'
import Section5 from '../div/Section5'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Showroom from './Showroom'
import Nosotros from './Nosotros'

import Sevicios from './Servicios'

import Hablamos from './Contacto'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import Equipo from '../views/Equipo.jsx'
import Reactiva from '../views/Reactiva.jsx'
import Razones from '../views/Razones.jsx'
import Inicio from './Inicio.jsx'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";


const sections = [
     { id: 'section1', title1: 'EXPERIENCIAS', title2: 'QUE GENERAN', title3: 'CONTENIDO' },
    { id: 'section2', title1: 'CONTENIDOS', title2: 'QUE ACTIVAN', title3: 'EXPERIENCIAS' },
     { id: 'section3', title1: 'SIN CUENTOS' },
    { id: 'section4', title1: 'SIN HISTORIAS' }
   ];

function Insight() {


    const isMobile = useMediaQuery({ maxWidth: 768 }); // Detecta pantallas de ancho menor o igual a 768px
    useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
    
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              window.scrollTo({
                top: entry.target.offsetTop,
                behavior: 'smooth'
              });
            }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        const sectionElements = document.querySelectorAll('.nosotros');
        sectionElements.forEach(section => observer.observe(section));
    
        return () => {
          sectionElements.forEach(section => observer.unobserve(section));
        };
      }, []);
   
   
  const [modalIsOpen, setModalIsOpen] = useState(false);
   const overlayVariants = {
     visible: {
       opacity: 1,
       transition: {
         when: "beforeChildren",
         duration: 0.3,
         delayChildren: 0.4
       }
     },
     hidden: {
       opacity: 0,
       transition: {
         when: "afterChildren",
         duration: 0.3,
         delay: 0.4
       }
     }
    }  
  return (
   <>
  
      
   
   
   <Inicio/>
   <section id='equipo'>
   <Equipo />
   </section>
    <Reactiva/>
      <div className="snap">
          <section id='section3' className='reactiva__uno' >
            <motion.div className="experiencias"
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
             viewport={{ once: false, amount: .5 }}
            >
            <h2 className="reactiva__h2"
             
            >
              EXPERIENCIAS
            </h2>
           
              <h2 className="reactiva__h2"
               
              >
               QUE GENERAN
              </h2>
            
           
              <h2 className="reactiva__h2"
               
              >
                CONTENIDO
              </h2>
              </motion.div>
           
          </section>
          <section id='section4' className='reactiva__uno' >
            <motion.div className="contenidos"
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
             viewport={{ once: false, amount: .5 }}
            >
            <h2 className="reactiva__h2"
             
            >
              CONTENIDOS
            </h2>
           
              <h2 className="reactiva__h2"
               
              >
               QUE ACTIVAN
              </h2>
            
          
              <h2 className="reactiva__h2"
                
              >
                EXPERIENCIAS
              </h2>
              </motion.div>
          
          </section>
          {isMobile ? (
       
        <section id="section5-6" className="reactiva__uno">
        <motion.h2
          className="reactiva__h2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 1, ease: "easeInOut", type: "spring" },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          SIN CUENTOS
        </motion.h2>
        <motion.h2
          className="reactiva__h2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 1, ease: "easeInOut", type: "spring" },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          SIN HISTORIAS
        </motion.h2>
       
          <div className="reactiva__formula">
  <Link className="contactoF__email" to="/formula">
    
     <span className="contactoF__default-text">¡ACTIVA TU INSPIRACIÓN!</span>
    <span className="contactoF__hover-text">DESCUBRE NUESTRO MÉTODO</span>
  </Link>
</div>
        </section>
        
      ) : (
        <>
         <section id="section5" className="reactiva__uno">
            <motion.h2
              className="reactiva__h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 1, ease: "easeInOut", type: "spring" },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              SIN CUENTOS
            </motion.h2>
          
          </section>
          <section id="section6" className="reactiva__unoH">
            <motion.h2
              className="reactiva__h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 1, ease: "easeInOut", type: "spring" },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              SIN HISTORIAS
            </motion.h2>
           

           <motion.div className="reactiva__formula"
            initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 1, ease: "easeInOut", type: "spring" },
              }}
              viewport={{ once: false, amount: 0.5 }}
           >
  <Link className="reactiva__formula__link" to="/formula">
   <p className="sinh">¡ACTIVA TU INSPIRACIÓN!</p>
    <p className="sinhn">DESCUBRE NUESTRO MÉTODO</p>
  </Link>
</motion.div>
          
          </section>
         
        </>
      )}
       
          
        

       
  </div>
    <Razones/>
     <section >
  < Section5 id={'penultima'}/>
  </section  >
 
   </>
  )
}

export default Insight