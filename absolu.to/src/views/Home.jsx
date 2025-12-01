import React from 'react'
import { useRef ,useState} from "react";
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
import Section6 from '../div/Section6'
import { RxPlusCircled } from "react-icons/rx";
import Fotos from './Fotos';
import { Link } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";


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
  const [open, setOpen] = useState(false);
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
   <Helmet>
          <title>Absoluto Experiential | Activamos marcas con experiencias memorables</title>
        <meta
          name="description"
          content="Absoluto Experiential es un taller creativo de experiencias. Combinamos estrategia, emoción y diseño para crear proyectos que generan impacto real."
        />
        <meta
          name="keywords"
          content="marketing experiencial, activaciones de marca, eventos corporativos, branded content, estrategia de marca, creatividad, Absoluto Experiential, agencia creativa"
        />
        <link rel="canonical" href="https://absolu.to/" />
  {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://absolu.to/" />
        <meta property="og:title" content="Absoluto Experiential | Activamos marcas con experiencias memorables" />
        <meta
          property="og:description"
          content="Activamos marcas con creatividad, estrategia y emoción. Descubre el método Absoluto."
        />
        <meta property="og:image" content="https://absolu.to/share-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Absoluto Experiential | Activamos marcas con experiencias memorables" />
        <meta
          name="twitter:description"
          content="Activamos marcas con creatividad, estrategia y emoción. Descubre el método Absoluto."
        />
        <meta name="twitter:image" content="https://absolu.to/share-image.jpg" />
         
         </Helmet>
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
      {/* <button onClick={() => setOpen(true)} className="spotify-btn"
        style={{
    position: "fixed",
    top: "80vh",      // distancia desde arriba
    left: "7vw",    // distancia desde la derecha
    zIndex: 9999 ,
    cursor:'pointer'     // por encima de todo
  }}
        >
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
<path fill="#8bc34a" d="M24.001,4c-11.077,0-20,8.923-20,20s8.923,20,20,20c11.076,0,20-8.923,20-20S35.077,4,24.001,4z"></path><path fill="#fff" d="M31.747,33.915c-0.292,0-0.585-0.145-0.877-0.292c-2.777-1.607-6.139-2.484-9.792-2.484c-2.047,0-4.093,0.291-5.993,0.73c-0.292,0-0.731,0.146-0.877,0.146c-0.731,0-1.169-0.586-1.169-1.17c0-0.73,0.438-1.17,1.023-1.314c2.338-0.586,4.677-0.877,7.161-0.877c4.093,0,7.893,1.021,11.108,2.924c0.438,0.291,0.731,0.584,0.731,1.314C32.916,33.478,32.331,33.915,31.747,33.915z M33.793,28.945c-0.438,0-0.73-0.144-1.023-0.291c-3.068-1.9-7.308-3.071-12.13-3.071c-2.339,0-4.531,0.293-6.139,0.733c-0.439,0.144-0.585,0.144-0.877,0.144c-0.877,0-1.462-0.73-1.462-1.461c0-0.877,0.439-1.316,1.169-1.607c2.192-0.584,4.385-1.023,7.454-1.023c4.97,0,9.793,1.17,13.593,3.507c0.584,0.291,0.877,0.877,0.877,1.461C35.255,28.215,34.67,28.945,33.793,28.945z M36.132,23.101c-0.438,0-0.585-0.146-1.023-0.291c-3.508-2.047-8.769-3.217-13.885-3.217c-2.631,0-5.262,0.293-7.6,0.877c-0.293,0-0.585,0.146-1.023,0.146c-1.023,0.146-1.754-0.73-1.754-1.754c0-1.023,0.585-1.607,1.315-1.754c2.777-0.877,5.7-1.17,9.062-1.17c5.554,0,11.4,1.17,15.785,3.654c0.584,0.293,1.022,0.877,1.022,1.754C37.886,22.369,37.154,23.101,36.132,23.101z"></path>
</svg>
      </button>
      {open && (
        <div className="spotify-modal" style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
         display: 'flex', justifyContent: 'left', alignItems: 'center', zIndex: 9999
        }}>
          <div style={{ position: 'relative', width: '300px', height: '380px', borderRadius: '12px', overflow: 'hidden' }}>
            <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: 10, right: 50, zIndex: 2 }}><IoMdCloseCircleOutline className='aspas' /></button>
            <iframe
              src="https://open.spotify.com/embed/playlist/5AetajS7svCIlwB3BoD9DV?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Spotify"
            ></iframe>
          </div>
        </div>
      )} */}
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
               <p className="tres__p">experiencias de marca </p>
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
         
           {/* <div className="new">
            <motion.h2 className="new__h2"
             initial={{opacity:0, }}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5,  }}}
             viewport={{once: false, amount:.5}}
            >Llevamos más de 20 años conectando </motion.h2>
            <motion.h2 className="new__h2"
             initial={{opacity:0,}}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5, }}}
             viewport={{once: false, amount:.5}}
            >marcas y personas.</motion.h2>
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

           </div> */}
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
       <span><RxPlusCircled className='explicacion__icon' /></span>  {expli.titular}
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
          <div className="showroon__encabezado">
               <motion.h2 className='show__h2'
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
                viewport={{once: false, amount:.5}}
               >NUESTROS GREATEST HITS</motion.h2>
               <motion.div className="ojos"
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
                viewport={{once: false, amount:.5}}
               ><DotLottieReact
             src="https://lottie.host/7b0a117c-5505-439e-bd18-5e7558833e90/bUh6vjihUE.lottie"
             loop
             autoplay
           />
         
               </motion.div>
                 {/* <a className="movimiento" href='#show'
         ><DotLottieReact className='abajo'
             src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
             loop
             autoplay
           />
         
               </a>   */}
                <div className="showroon__link">
                                  <span className="contactoF__default-text"><Link    to="/porfolio">Las niñas de mis ojos</Link></span>
                                  <span className="contactoF__hover-text"><Link    to="/porfolio"> CASOS</Link></span>
                                </div> 
             </div>
            
               <div className='showroon' id='show'>
     
     

    
     <div className="containerUno"
     
     >
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54601350617_ce5d66c388_n.jpg" alt='Inversis' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54601353292_cfec28dd4e_n.jpg" alt='Mercedes' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54602233181_ce7481646c_n.jpg" alt='Junta Andalucia' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54602444818_b19b25a407_n.jpg" alt='Mastercard' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54602236011_e131d432a3_n.jpg" alt='Sicad' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54602530095_8b31a5332a_n.jpg" alt='Cruzcampo' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54601349382_beff5537f1_n.jpg" alt='Impresionistas' />
    <img className='imgUno'
      src="https://live.staticflickr.com/65535/54602233911_b51598e431_n.jpg" alt='Lucky' />
</div>
<Fotos/>

                                 <div className="porfolio__link">
                                  <span className="contactoF__default-text"><Link    to="/insight">ver PORFOLIO</Link></span>
                                  <span className="contactoF__hover-text"><Link    to="/insight"> CASOS</Link></span>
                                </div> 
     </div>
     <div className="new">
            <motion.h2 className="new__h2"
             initial={{opacity:0, }}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5,  }}}
             viewport={{once: false, amount:.5}}
            >Llevamos más de 20 años conectando </motion.h2>
            <motion.h2 className="new__h2"
             initial={{opacity:0,}}
             whileInView={{opacity:1, transition:{delay:0.4, duration:3.5, }}}
             viewport={{once: false, amount:.5}}
            >marcas y personas.</motion.h2>
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
     <div className="new__link">
                                  <span className="new__default-text"><Link    to="/porfolio">INSIGHTS</Link></span>
                                  <span className="new__hover-text"><Link    to="/porfolio"> DESCUBRE EL ORIGEN</Link></span>
                                </div> 
             
           </div>
        <Section6/>
    </>
  )
}

export default Home