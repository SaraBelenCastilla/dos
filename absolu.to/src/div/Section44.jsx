import React from 'react'
import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { IoIosArrowForward } from "react-icons/io"

function Section44() {
  const anchoVentana = useWindowWidth();
  return (
    <>
    <div className='cuatroC'
    style={{ width: anchoVentana }}
    >
    <div className="cuatro__contenido"
      style={{ width: anchoVentana }}
    >
      
    <motion.div className="bonita__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
              <h2 className="amarilla__h2">El desafío:</h2>
              <h3 className="amarilla__h3">90 SEGUNDOS</h3>
                <p className='amarill__p'>El tiempo que tarda nuestro cerebro en activar las emociones.
</p>
<p className='amarilla__p'>
Minuto y medio para sorprender.

</p>
<p className='amarilla__p1'>Una única oportunidad.</p>

            </motion.div>
              <motion.div className="segunda__movil"
                        initial={{opacity:0, y:150,scale:0.5}}
                        whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
                        viewport={{once: false, amount:.5}}
                        
                        >
                           <h3 className="movil__titulo">El desafío:</h3>
                           <h4 className="movil__90">90 SEGUNDOS</h4>
            
                        </motion.div>
    </div>
     <a className="boton__drch  boton__drch--section22" href='#section5'
             ><IoIosArrowForward className='drch' />
               </a> 
    </div>
    </>
   
  )
}

export default Section44