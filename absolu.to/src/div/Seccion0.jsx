import React from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';

function Section1() {
  const anchoVentana = useWindowWidth();
  return (
    <>
    <div className='cero'
     style={{width:'100%'}}
    >
        <motion.h1 className="cero__h1"
        style={{width:anchoVentana}}
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >EL ORIGEN</motion.h1>
        {/* <div className="segunda__contenedor"> */}
        {/* <div className="segunda__icono">
            <motion.img src={segunda} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div> */}
       
       
         

        {/* </div> */}
    </div>
   
       
    </>
  )
}

export default Section1