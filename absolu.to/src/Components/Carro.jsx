import React, {useState} from 'react'
import { MotionConfig, motion ,AnimatePresence} from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"
import Celeste from '../div/Razon1.jsx'
import Arena from '../div/Razon2.jsx'
import Azul from '../div/Razon3.jsx'
import Marron from '../div/Razon4.jsx'
import Palo from '../div/Razon5.jsx'
import Turquesa from '../div/Razon6.jsx'
import Rosa from '../div/Razon7.jsx'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const datas = [
    { index: 1, page: Celeste },
    { index: 2, page: Arena },
    { index: 3, page: Azul },
    { index: 4, page: Marron },
    { index: 5, page: Palo },
    { index: 6, page: Turquesa },
    { index: 7, page: Rosa }
  ];


function Carro() {
    const datas =[
        {
          index: 1 , page : Celeste
        },
        {
          index: 2 , page: Arena
        },
        {
          index: 3 , page: Azul
        } ,
        {
            index: 4 , page: Marron
          },
        {
            index:5 , page: Palo
        } , 
        {
            index:6 , page: Turquesa
        } , 
        {
          index:7 , page: Rosa
      } ,     
      ]
    let [index, setIndex] = useState(0);
  return (
    <MotionConfig
      transition={{
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
         <div className="h-full">
        <div className="mx-auto ">
          <div className="relative ">
      <motion.div animate= {{ x: `-${index * 100}%` }} className="flex">
       
        {datas.map((data, i) => (
   
    <data.page key={data.index}/>
  ))}
      </motion.div>
       <div className="carro__dots">
      {datas.map((data, i) => (
        <button
          key={data.index}
          className={`carro__dot${index === i ? " carro__dot--active" : ""}`}
          onClick={() => setIndex(i)}
          aria-label={`Ir a la página ${i + 1}`}
        />
      ))}
    </div>

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
                 <FaArrowAltCircleLeft  className='mola'/>
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {index + 1 < datas.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="boton__drch"
                  onClick={() => setIndex(index + 1)}
                >
                  <FaArrowAltCircleRight  className='mola'/>
                </motion.button>
              )}
            </AnimatePresence>
   
    </div>
    </div>
    </div>
    </MotionConfig>
  );
}
  


export default Carro