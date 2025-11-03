import React, {useState,useEffect} from 'react'
import { MotionConfig, motion ,AnimatePresence} from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Ero from '../div/Seccion0'
import Cero from '../div/Section1'
import Uno from '../div/Section11'
import Dos from '../div/Section2'
import DosDos from '../div/Section22'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


function CarrusellUno() {
    const imgs =[
      {
        index: 1 , page : Ero
      },
        {
          index: 2 , page : Cero
        },
        {
          index: 3 , page: Uno
        },
        {
          index: 4 , page: Dos
        },
        {
          index: 5 , page: DosDos
        },
       
      ]
      function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}
    let [index, setIndex] = useState(0);
    const [activeSection, setActiveSection] = useState(null);
     // Detectar el cambio de sección
     const isMobile = useIsMobile(); // <-- Pon esto justo después de tus useState
     useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Detecta cuando el 50% de la sección es visible
      };
  
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Actualiza la sección activa
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      // Observa las secciones por sus IDs únicos
      const sections = document.querySelectorAll("[id^='section']");
      sections.forEach((section) => observer.observe(section));
  
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);
   // Reiniciar el carrusel cuando se detecta la sección
   useEffect(() => {
    if (activeSection === "section-with-carousel") {
      setIndex(0); // Reinicia el índice del carrusel
    }
  }, [activeSection]);


  return (
    
    <MotionConfig
      transition={{
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
         <div id="section-with-carousel" className="h-full ">
        <div className="mx-auto ">
          <div className="relative ">
      <motion.div animate= {{ x: `-${index * 100}%` }} className="flex"
       
      >
       
        {imgs.map((img,i) => (
           
   
     <img.page key={img.index}/>
  ))}
      </motion.div>

      <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="boton__izq "
                  onClick={() => setIndex(index - 1)}
                >
                <FaArrowAltCircleLeft className='mola'/>
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {index + 1 < imgs.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="boton__drch"
                  onClick={() => setIndex(index + 1)}
                >
                  <FaArrowAltCircleRight className='mola'/>
                </motion.button>
              )}
            </AnimatePresence>
   
    </div>
    </div>
    </div>
    </MotionConfig>
  )
}

export default CarrusellUno