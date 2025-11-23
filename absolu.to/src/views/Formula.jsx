import React,{useState, useEffect, useRef} from 'react'
import Receta from '../assets/img/formula.png'
import { useNavigate } from "react-router-dom";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaFan } from "react-icons/fa6";
import Farmula from '../assets/img/formula.png'
import Lgo from '../assets/img/logo.png'
import { IoClose } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GrStatusWarning } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";
import Agenda from '../Components/Agenda.jsx'
import {Link} from 'react-router-dom'


import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";


function Formula() {
   const buttonRef = useRef(null);
   const [modalIsOpen, setModalIsOpen] = useState(false);
 useEffect(() => {
   if (modalIsOpen && buttonRef.current) {
    // Insertar CSS y Script solo cuando el modal está abierto
    const link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.calendar?.schedulingButton.load({
        url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vuoU832a8lHnPMTU9yFylNcMJqADOtdJn1MTgcsCjgQ8TmkL5UcEIzDD45duQUzUUMY5VNR_M?gv=true",
        color: "#ED4358",
        label: "QUIERO MI MUESTRA",
        target: buttonRef.current
      });
    };
     return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }
}, [modalIsOpen]);

 
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
   const navigate = useNavigate();
   
  return (
    <>
    <div className="reactiva__dos" id="warning">
        <motion.div className="reactiva__aviso"
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="titulo__warning">
          <GrStatusWarning  className="icons"/>
            <h2 className="aviso">WARNING </h2>
             </div> 
            <p className="aviso__p">Estás a punto de acceder a nuestro contenido más random.</p>
            <p className="aviso__p">Una fórmula que combina elementos altamente volátiles</p>
            <p className="aviso__p">y de naturaleza impredecible.</p>
           
            <p className="aviso__p1">Aplícala bajo supervisión de nuestro personal para evitar </p>
            <p className="aviso__p">eventos indeseados.</p>
            <p className="aviso__p1">¿Te va el rollo kamikaze? ¡Adelante!</p>
            <p className="aviso__p">Pero si la cosa empieza a ponerse fea...</p>
            <p className="aviso__p">¡llámanos de inmediato!</p>
          <button className="boton__aviso" onClick={() => setModalIsOpen(true)}>ENTENDIDO</button>
           <AnimatePresence>
                  {modalIsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={overlayVariants}
                      className="formula-overlay"
                    >
                      <motion.div
                        className="formula"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="formula__h2">FÓRMULA ABSOLUTO</h2>
                       <img src={Farmula} alt="formula" className="formula__img" />
                       
                          <button
                            className="formula-button"
  onClick={() => {
    setModalIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById('section5');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // espera a que termine la animación del modal
  }}
>
  <RiCloseCircleLine className="formula__icon" />
                          </button>
                        <p className="formula__p">¿La química de Marcas no es lo tuyo?</p>
                        <p className="formula__p1">Si tu marca destila esencia, nosotros hacemos el resto.</p>
                        <div>
      {/* Google irá aquí y reemplazará este div con el botón */}
     
      <button
  className="agenda-btn"
  onClick={() => window.open(
    "https://calendar.google.com/calendar/u/0/r", // Puedes poner aquí el enlace de tu agenda o de una cita
    "_blank"
  )}
>
  Abrir Agenda Google
</button>
 <div ref={buttonRef}></div> 
    </div>
                        {/* <button className="formula__boton"  onClick={(e) => {window.location.href ='mailto: hola@absolu.to';}}>¡HABLEMOS!</button> */}
                        <div className="deLogo">
                          <p className="deLogo__p">Powered by</p>
                         <img className='logo__formula' src={Lgo} alt="logo" />
                         </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
           
       
        </motion.div>
        <button className="volver-footer1" onClick={() => navigate(-1)}>
      <BsArrowCounterclockwise className='vuelta'/>
      </button>
      </div>
    {/* <div className='formula__div'>
         <h2 className="formula__h2">FÓRMULA by ABSOLUTO</h2>
         <img src={Receta} alt="formula" className="formula__img" />

          <button className="volver-footer" onClick={() => navigate(-1)}>
        Volver 
      </button>                 
         </div> */}
         </>
  )
}

export default Formula