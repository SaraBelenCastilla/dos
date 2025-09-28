import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import Palabras from '../Components/palabras';
import { useMediaQuery } from "react-responsive";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence
  
} from "framer-motion";
import Index from './Index';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Papel from '../assets/papelitos/fuck.png'
import Servicios from'../views/Servicios'
import FotosUno from '../views/FotosUno'
import { Helmet, HelmetProvider } from 'react-helmet-async';

export function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      {children}
    </section>
  );
}
function Home() {
  const [openIndex, setOpenIndex] = React.useState(null);
React.useEffect(() => {
  setOpenIndex(null);
}, []);
  const palabras = ["SOMOS", "ABSOLUTO", "EXPERIENTIAL"];
  const frases = ["NO CONTAMOS HISTORIAS", "LAS FABRICAMOS"];
  const sentences = ["Producimos:", "EVENTOS, ARTE Y CONTENIDO "];
  const titulares = ["SOMOS", "ARTESANOS ","DEL","ENGAGEMENT"];
  const explicaciones = [
   {titular:"IRL",
    h3: 'EXPERIENCIA In Real Life.',
p: 'En un mundo totalmente digitalizado las experiencias en la vida real siguen siendo la vía más poderosa de conectar con tu audiencia a un nivel visceral. ',
p1:'Creamos momentos que trascienden tiempo y espacio, dando vida a historias memorables.'
},

{titular:"DIGITAL ",
   h3: 'EXPERIENCIA DIGITAL',
   p:'Convertimos lo digital en físico y lo físico en digital.',
   p1:'Integramos recursos interactivos en estructuras y entornos habitables como ingredientes esenciales de la experiencia total, impulsando el engagement y activando nuevo contenido.' 

},
{
titular:"CONTENIDO",
h3: 'CONTENIDO EXPERIENCIAL',
p:'El contenido es más que vídeos o imágenes: es la materia prima de toda experiencia. ' ,
p1:'Creamos momentos diseñados para ser vividos, compartidos y recordados. Experiencias que generan contenido auténtico, orgánico y poderoso.'
}
     
  
 
 


  ];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4 // tiempo entre palabras
    }
  }
};

const palabra = {
  hidden: { opacity: 0, x: -200},
  visible: { opacity: 1, x: 0,  transition: { duration: 1, } }
};
const frase = {
  hidden: { opacity: 0, x: 200},
  visible: { opacity: 1, x: 0,  transition: { duration: 1,  } }
};
const sentence = {
  hidden: { opacity: 0, x: -200},
  visible: { opacity: 1, x: 0,  transition: { duration: 1,  } }
};
const titular = {
  hidden: { opacity: 0, x: 200},
  visible: { opacity: 1, x: 0,  transition: { duration: 0.5,  } }
};
const explicacion = {
  hidden: { opacity: 0, x: 200},
  visible: { opacity: 1, x: 0,  transition: { duration: 0.5,  } }
};
    
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Detecta pantallas de ancho menor o igual a 768px
  return (
  <>
  
  {/* <Palabras />
       <motion.div className="section__uno"
        initial={{opacity:0, y:150,scale:0.5}}
         whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
       >
        <div className='uno__section' >
         
          <div className="uno__contenido">
            <p className="uno__p">"El lugar donde las ideas cobran vida,</p>
            <p className="uno__p">llámalo como quieras.</p>
            <p className="uno__p">TRASCENIO es el punto de partida." </p>
            
          </div>
        </div>
      </motion.div> */}
      {/* <AnimatedSection className="section__dos"
      
       
      >
        <div
        className='dos__contenido'>
          <h2 className='dos__h2'>SOMOS </h2>
          <h2 className="dos__h2">ABSOLUTO</h2>
          <h2 className="dos__h2">EXPERIENTIAL</h2>
        </div>
      </AnimatedSection> */}
      <Index/>
       <motion.div
        className='dos__contenido'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        style={{ display: "flex",  flexWrap: "wrap", gap:0,  justifyContent: "center", width: "100%"  ,
           
         
        }}
      >
        {palabras.map((pal, i) => (
          <motion.h2 key={i} variants={palabra} className='dos__h2'>
            {pal}
          </motion.h2>
        ))}
      </motion.div>
      
        <div className='tres__contenido'
         
        >
            <motion.div className="parrafo__tres"
             initial={{opacity:0,}}
         whileInView={{opacity:1, transition:{delay:0.4, duration:2.8,ease: "easeInOut"  }}}
         viewport={{once: false, amount:.5}}
            >
                <p className="tres__p">Un taller creativo</p>
                <p className="tres__p">especializado en </p>
               <p className="tres__p">cultura transmedia. </p>
            </motion.div>
            

        </div>
      
        <section className='nosotros__01'
        
          >
           
            <motion.div
        className='ctro__contenido'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        style={{ display: "flex",  flexWrap: "wrap", gap:0,  justifyContent: "center", width: "100%"  ,
           
         
        }}
      >
        {frases.map((fra, i) => (
          <motion.h2 key={i} variants={frase} className='nueva__h2'>
            {fra}
          </motion.h2>
        ))}
      </motion.div> 
      </section>
     <div className="nosotros__cerDos">

  <motion.div
        className='cnco__contenido'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        style={{ display: "flex",  flexWrap: "wrap", gap:0,  justifyContent: "center", width: "100%"  ,
           
         
        }}
      >
        {sentences.map((sent, i) => (
          <motion.h2 key={i} variants={sentence} className='nuevaC__h2'>
            {sent}
          </motion.h2>
        ))}
      </motion.div> 
     </div>

     
            {/* <motion.div
             initial={{opacity:0, y:100,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}  
            >
             <h2 className="nos__h2"
             
              >TRANSFORMAR  </h2>
                 <h2 className="nos__h2"
                
                 >IDEAS IMPOSIBLES  
                 </h2>
                 <h2 className="nos__h2"
                 
                 >EN MOMENTOS 
                 </h2>
                 <h2 className="nos__h2"
                
                 >INOLVIDABLES.
                 </h2>
                
          <div className="razon__pie">
             <p className="pie__nosotros">PROPÓSITO <span className="pie__span">ABSOLUTO</span></p>
          </div>
         
          </motion.div>
          <a className="movimiento1" href='#siguiente'
      ><DotLottieReact className='abajo1'
          src="https://lottie.host/0e3e0733-1a05-4293-9b5a-6484b91e19f2/07AJWgdqS3.lottie"
          loop
          autoplay
        />
      
            </a> 
          </section>
          <section className='nosotros__01' id="siguiente"
          
          >
            <motion.div
             initial={{opacity:0, y:100,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >
             <motion.h2 className="nos__h2"
             
              >ACTIVAR   </motion.h2>
                 <motion.h2 className="nos__h2"
                 
                 >VÍNCULOS GENUINOS   
                 </motion.h2>
                 <motion.h2 className="nos__h2"
                 
                 >ENTRE MARCAS Y 
                 </motion.h2>
                 <motion.h2 className="nos__h2"
                 
                 >PERSONAS.
                 </motion.h2>
                
          <div className="razon__pie">
             <p className="pie__nosotros">COMPROMISO <span className="pie__span">ABSOLUTO</span></p>
          </div>
         
          </motion.div>
          <a className="movimiento1" href='#pero'
      ><DotLottieReact className='abajo1'
          src="https://lottie.host/0e3e0733-1a05-4293-9b5a-6484b91e19f2/07AJWgdqS3.lottie"
          loop
          autoplay
        />
      
            </a> 
          */}
         
           <div className="new">
            <motion.h2 className="new__h2"
             initial={{opacity:0, }}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5,  }}}
             viewport={{once: false, amount:.5}}
            >Llevamos más de 20 años creando </motion.h2>
            <motion.h2 className="new__h2"
             initial={{opacity:0,}}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5, }}}
             viewport={{once: false, amount:.5}}
            >momentos que conectan.</motion.h2>
             <motion.div
        className='new__contenido'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        style={{ display: "flex",  flexWrap: "wrap", gap:"15px",  justifyContent: "start", width: "100%"  ,
           
         
        }}
      >
        {titulares.map((titu, i) => (
          <motion.h2 key={i} variants={titular} className='news__h2'>
            {titu}
          </motion.h2>
        ))}
      </motion.div> 

           </div>
           <div className="newp">
            <motion.h2 className="newp__h2"
             initial={{opacity:0, }}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5, }}}
             viewport={{once: false, amount:.5}}
            >Expertos en:</motion.h2>
             <motion.h2 className="newp__h2"
             initial={{opacity:0, }}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5,  }}}
             viewport={{once: false, amount:.5}}
            >EXPERIENCIAS DE MARCA TRANSMEDIA.</motion.h2>
             <motion.div
        className='explicacion__contenido'
        variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.5 }}
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 0,
    justifyContent: "start",
    width: "100%"
  }}
         
        
      >
       {explicaciones.map((expli, i) => (
    <motion.div key={i} variants={explicacion} className='explicacion' style={{ width: "100%" }}>
      <h2
        className='explicacion__h2'
        style={{ cursor: "pointer" }}
        onClick={() => setOpenIndex(openIndex === i ? null : i)}
      >
        {expli.titular}
      </h2>
      <AnimatePresence initial={false}>
        {openIndex === i && (
          <motion.div
            className="explicacion__div"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h3 className='explicacion__h3'>{expli.h3}</h3>
            <p className='explicacion__p'>{expli.p}</p>
             <p className='explicacion__p1'>{expli.p1}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</motion.div>
     

 
     
 



           </div>
          <div className="nosotros__pero" id="pero">
            <div className="pero__papel">
            <motion.h2 className="pero__h2"
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >¿PERO QUÉ</motion.h2> 
            <div className="per__papel"> 
              <motion.img src={Papel} alt="fuck" className="per__img" 
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
            <motion.p className="fuck__h2"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >F#Ç*</motion.p>
            </div>
           
            </div>
           
            <motion.h2 className="pero__h2"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >HACE ESTA PEÑA?</motion.h2>
             {/* <a className="movimiento" href='#servicios'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a>  */}
          </div>
           <section id={'servicios'}>
          <Servicios/>
          </section>
         <FotosUno/>
    </>
  )
}

export default Home