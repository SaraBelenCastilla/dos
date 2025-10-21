import React from 'react'

import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaArrowAltCircleRight } from "react-icons/fa";

function Razon7() {
  
   return (
    <>
     <section className='razon__07'
          
         >
            <motion.h2 className="razon__h2"
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
              viewport={{once: false, amount:.5}}
             >RAZÓN 07</motion.h2>
               <motion.div className="razones__div"
                                        initial={{opacity:0, y:100}}
                                        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
                                        viewport={{once: false, amount:.5}}
                                       >
                <motion.p className="razones__p"
                
                >Y porque, si alguien  
                </motion.p>
                <motion.p className="razones__p"
                
                >puede hacerlo,
                </motion.p>
                <motion.p className="razones__p"
                 
                >esos somos nosotros. 
                </motion.p>
                </motion.div>
                 <motion.div className='razones__movil'
                                         initial={{opacity:0, y:100}}
                                         whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
                                         viewport={{once: false, amount:.5}}
                                         >
                                            <p className="razones__p">Porque,  </p>
                                            <p className="razones__p">si alguien puede </p>
                                            <p className="razones__p">hacerlo,  </p>
                                            <p className="razones__p">esos somos   </p>
                                            <p className="razones__p">nosotros. </p>
                                           
                                            
                                         </motion.div>
                <motion.p className="razones__punto"
                  initial={{opacity:0, y:100}}
                  whileInView={{opacity:1, y:0, transition:{delay:1.5, duration:1,  ease:'easyInOut',type:'spring'}}}
                  viewport={{once: false, amount:.5}}
                >PUNTO.
                </motion.p>
         <motion.div className="razon__pie"
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
           viewport={{once: false, amount:.5}}
         >
            <p className="pie__razon">VALOR <span className="pie">ABSOLUTO</span></p>
         </motion.div>
         {/* <a className='flechitas' href=''> <DotLottieReact
               src="https://lottie.host/29b477c5-4291-4dd2-bbb4-0b83d69fb3f2/UGVbrOOk7P.json"
               loop
               autoplay
             /></a> */}
            <button className="mov" 
            onClick={() => {
    const section = document.getElementById('penultima');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
             >
           <FaArrowAltCircleRight  className='mola'/>
            
                  </button>   
         </section>
    
    </>
)
}

export default Razon7