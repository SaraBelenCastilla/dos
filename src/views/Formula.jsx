import React,{useState} from 'react'
import Receta from '../assets/img/formula.png'
import { useNavigate } from "react-router-dom";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaFan } from "react-icons/fa6";
import Farmula from '../assets/img/formula.png'
import { IoClose } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GrStatusWarning } from "react-icons/gr";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";

function Formula() {
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
            <p className="aviso__p">Si la Química de Marcas no es lo tuyo:</p>
            <p className="aviso__p">Aplícala bajo supervisión de nuestro personal para evitar </p>
            <p className="aviso__p">eventos indeseados.</p>
            <p className="aviso__p1">¿Te va el rollo kamikaze? ¡Adelante!</p>
            <p className="aviso__p">Pero si la cosa empieza aponerse fea...</p>
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
                            onClick={() => setModalIsOpen(false)}
                          >
                            <RiCloseCircleLine className="formula__icon"  onClick={() => setModalIsOpen(false)}/> 
                          </button>
                        <p className="formula__p">¿Listo para activar tu marca?</p>
                        <p className="formula__p1">Danos 20 minutos, te mostramos cómo utilizarla.</p>
                        <button className="formula__boton">Agendar demo</button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                   
        </motion.div>
       
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