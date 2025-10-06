import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { useRef,useState,useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Equipo() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Detecta pantallas de ancho menor o igual a 768px
   
  
 const [desplegado,setDesplegado]=useState(false)
 const [desplegadoUno,setDesplegadoUno]=useState(false)
 const [desplegadoDos,setDesplegadoDos]=useState(false)
 const [desplegadoTres,setDesplegadoTres]=useState(false)
 const [desplegadoCuatro,setDesplegadoCuatro]=useState(false)
 const [desplegadoCinco,setDesplegadoCinco]=useState(false)
 const [desplegadoSeis,setDesplegadoSeis]=useState(false)
 const [desplegadoSiete,setDesplegadoSiete]=useState(false)
 const desplegar=()=>{
   setDesplegado(!desplegado)
 }
 const desplegarUno=()=>{
  setDesplegadoUno(!desplegadoUno)
}
const desplegarDos=()=>{
  setDesplegadoDos(!desplegadoDos)
}
const desplegarTres=()=>{
  setDesplegadoTres(!desplegadoTres)
}
const desplegarCuatro=()=>{
  setDesplegadoCuatro(!desplegadoCuatro)
}
const desplegarCinco=()=>{
  setDesplegadoCinco(!desplegadoCinco)
}
const desplegarSeis=()=>{
  setDesplegadoSeis(!desplegadoSeis)
}
const desplegarSiete=()=>{
  setDesplegadoSiete(!desplegadoSiete)
}

 const plegar=()=>{
   setDesplegado(false)
 }
 const plegarUno=()=>{
  setDesplegadoUno(false)
}
const plegarDos=()=>{
  setDesplegadoDos(false)
}
const plegarTres=()=>{
  setDesplegadoTres(false)
}
const plegarCuatro=()=>{
  setDesplegadoCuatro(false)
}
const plegarCinco=()=>{
  setDesplegadoCinco(false)
}
const plegarSeis=()=>{
  setDesplegadoSeis(false)
}
const plegarSiete=()=>{
  setDesplegadoSiete(false)
}

 const sentences = ["Dada la naturaleza de los proyectos  ", "en los que trabajamos, la discreción ","es fundamental."];
  const palabras = ["Entenderás que mantener nuestros", "rostros e identidades ocultas, ","forma parte del juego."];

  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4 // tiempo entre palabras
    }
  }
};
 const sentence = {
  hidden: { opacity: 0, x: -200},
  visible: { opacity: 1, x: 0,  transition: { duration: 1,  } }
};
const palabra = {
  hidden: { opacity: 0, x: 700},
  visible: { opacity: 1, x: 0,  transition: { duration: 1.5, } }
};
  
  return (
    <>
     <Helmet>
        <title>El equipo Absoluto | Creativos con identidades secretas
</title>
        <meta name="description" content=" Conoce al equipo más creativo y enigmático del marketing experiencial. Ocultamos nuestras caras, pero nunca nuestras ideas.


    " />
        <meta name="keywords" content="equipo creativo, agencia marketing experiencial, creativos de marca, absolu.to equipo, producción de eventos creativos.

" />
<meta property='  og:title' content='El equipo Absoluto | Creativos con identidades secretas' />
        <meta property='og:description' content='Conoce al equipo más creativo y enigmático del marketing experiencial. Ocultamos nuestras caras, pero nunca nuestras ideas.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://absolu.to/equipo' />
        
       
       </Helmet>
    <div
    
     className="equipo" >
        {/* <ReactLenis
        root
        options={{
          Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
            infinite: true,
            syncTouch: true,
        }}
      >
       
         Renderiza Hero o HeroMobile según el tamaño de la pantalla 
        {isMobile ? <HeroMobile /> : <Hero />}
        
       
      </ReactLenis> */}
      <motion.h1 className="equipo__h1"
       initial={{opacity:0, y:150,scale:0.5}}
         whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
      >EL EQUIPO ES LO PRIMERO</motion.h1>
      </div>
      <div className="equipo__primera">
         <motion.div
                className='cuatro__contenido'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                style={{ display: "flex",  flexWrap: "wrap", gap:0,  justifyContent: "center", width: "100%"  ,
                   
                 
                }}
              >
                {sentences.map((sent, i) => (
                  <motion.h2 key={i} variants={sentence} className='nuevap__h2'>
                    {sent}
                  </motion.h2>
                ))}
              </motion.div> 
               </div>
               <div className="equipo__segunda">
               <motion.div
                      className='cinco__contenido'
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      style={{ display: "flex",  flexWrap: "wrap", gap:0,  justifyContent: "start", width: "100%"  ,
                         
                       
                      }}
                    >
                      {palabras.map((pal, i) => (
                        <motion.h2 key={i} variants={palabra} className='nuevap__h2'>
                          {pal}
                        </motion.h2>
                      ))}
                    </motion.div> 
     </div>
      <div className='showroon' id='show'>
     

      
     <div className="container"
     
     >
     
    <img className='img'
      src="https://live.staticflickr.com/65535/54355434767_64d2d61b1e_n.jpg" onMouseEnter={desplegar}  onMouseLeave={plegar} alt="C.E.O" />
    
    <img className='img'
      src="https://live.staticflickr.com/65535/54356316771_92647342f8_n.jpg" onMouseEnter={desplegarUno}  onMouseLeave={plegarUno} alt="el Capi"/>
    <img className='img'
      src="https://live.staticflickr.com/65535/54356523339_b51fb50689_n.jpg"  onMouseEnter={desplegarDos}  onMouseLeave={plegarDos} alt="Miss Insight" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356545503_575ea76c48_n.jpg" onMouseEnter={desplegarTres}  onMouseLeave={plegarTres} alt="Tweety" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356542093_d3c27b11d6_n.jpg" onMouseEnter={desplegarCuatro}  onMouseLeave={plegarCuatro} alt="LaBanksy" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356544113_a505342e04_n.jpg" onMouseEnter={desplegarCinco}  onMouseLeave={plegarCinco} alt="Tarantino" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356520034_b13215624f_n.jpg" onMouseEnter={desplegarSeis}  onMouseLeave={plegarSeis} alt="Dora la Exploradora" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54355438187_a3d5d6b821_n.jpg" onMouseEnter={desplegarSiete}  onMouseLeave={plegarSiete} alt="MacGyver"  />
</div>
{/* {textos.map((texto,index) => (   */}
     <div className={`descripcion ${desplegado? 'active':''}`} >
      <h3 className="des__h3">C.E.O.</h3>
      <h4 className="des__h4">Couch Executive Officer</h4>
     </div>
      
       <div className={`descripcionUno ${desplegadoUno? 'active':''}`} >
      <h3 className="des__h3">El Capi</h3>
      <h4 className="des__h4">Director Creativo</h4>
     </div>
     <div className={`descripcionDos ${desplegadoDos? 'active':''}`} >
      <h3 className="des__h3">Miss Insight</h3>
      <h4 className="des__h4">Copy</h4>
     </div>
     <div className={`descripcionTres ${desplegadoTres? 'active':''}`} >
      <h3 className="des__h3">Tweety</h3>
      <h4 className="des__h4">Social Media</h4>
     </div>
     <div className={`descripcionCuatro ${desplegadoCuatro? 'active':''}`} >
      <h3 className="des__h3">LaBanksy</h3>
      <h4 className="des__h4">Puro Arte</h4>
     </div>
     <div className={`descripcionCinco ${desplegadoCinco? 'active':''}`} >
      <h3 className="des__h3">Tarantino</h3>
      <h4 className="des__h4">Audiovisuales</h4>
     </div>
     <div className={`descripcionSeis ${desplegadoSeis? 'active':''}`} >
      <h3 className="des__h3">Dora la Exploradora</h3>
      
      <h4 className="des__h4">location Manager</h4>
     </div>
     <div className={`descripcionSiete ${desplegadoSiete? 'active':''}`} >
      <h3 className="des__h3">MacGyver</h3>
      <h4 className="des__h4">Producción</h4>
     </div>
     <div className="gallery">
      <img src="https://live.staticflickr.com/65535/54355434767_64d2d61b1e_n.jpg" alt="C.E.O"    onMouseEnter={desplegar}  onMouseLeave={plegar}/>
      <img src="https://live.staticflickr.com/65535/54356316771_92647342f8_n.jpg" alt="El Capi" onMouseEnter={desplegarUno}  onMouseLeave={plegarUno}/>
      <img src="https://live.staticflickr.com/65535/54356523339_b51fb50689_n.jpg" alt="Miss Insight"   onMouseEnter={desplegarDos}  onMouseLeave={plegarDos}/>
      <img src="https://live.staticflickr.com/65535/54356545503_575ea76c48_n.jpg" alt="Tweety"  onMouseEnter={desplegarTres}  onMouseLeave={plegarTres}/>
     </div>
     <div className="gallery">
      <img src="https://live.staticflickr.com/65535/54356542093_d3c27b11d6_n.jpg" alt="LaBanksy"  onMouseEnter={desplegarCuatro}  onMouseLeave={plegarCuatro}/>
      <img src="https://live.staticflickr.com/65535/54356544113_a505342e04_n.jpg" alt="Tarantino"  onMouseEnter={desplegarCinco}  onMouseLeave={plegarCinco}/>
      <img src="https://live.staticflickr.com/65535/54356520034_b13215624f_n.jpg" alt="Dora la Exploradora"  onMouseEnter={desplegarSeis}  onMouseLeave={plegarSeis}/>
      <img src="https://live.staticflickr.com/65535/54355438187_a3d5d6b821_n.jpg" alt="MacGyver"  onMouseEnter={desplegarSiete}  onMouseLeave={plegarSiete}/>
     </div>
 <div className="equipo__link" onClick={(e) => {window.location.href ='mailto: becomeabrander@absolu.to';}}>
                                  <h3 className="porfolio__h3default" > ÚNETE AL EQUIPO</h3>
                                  <h3 className="porfolio__h3hover">BECOME A BRANDER</h3>
                                </div>
{/* <a className="movimiento" href='#footer'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a>  */}
     </div>
     
     {/* <Schedule/>
     <Tercerita/>
     <Cuartita/> */}
 
 
 </>
 )
}

const SECTION_HEIGHT_MOVIL = 200;
const HeroMobile = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT_MOVIL}px + 200vh)` }}
      className="cotenedor"     
    >
      <CenterImageMovil />

       <ParallaxImagesMovil />
      

      <div className="final" />
      
    </div>
  );
};

const CenterImageMovil = ({start,end}) => {return (
  <>
  {/* <motion.div
    className="primer"
    style={{
      clipPath,
      backgroundSize,
      opacity,
      // backgroundImage:
      //   "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      // backgroundPosition: "center",
      // backgroundRepeat: "no-repeat",
    }}
  /> */}
   <div className="titulo__nosotros">
      <motion.h2 className="movil__h1P"
    //  style={{opacity,
    //   fontSize,
    //  }}
    //  ref={ref}
    
    >EL EQUIPO</motion.h2>
    <motion.h2 className="movil__h1"
    //  style={{opacity,
    //   fontSize,
    //  }}
    //  ref={ref}
    
    > ES LO PRIMERO</motion.h2>
      </div>
 
     
      </>
);
};

const ParallaxImagesMovil = () => {
  return (
    <div className="segun">
      {/* <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="uno"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="dos"
      /> */}
      <ParallaxImgMovil
         start={-700}
         end={100}
         className="nosotros__primera"
         
        texto1='Dada la naturaleza de  '
        texto2='los proyectos en los'
        texto3='que trabajamos, '
        texto4='mantener nuestra'
        texto5='identidad oculta es '
        texto6='fundamental. '
       
        
      
        />
           {/* <ParallaxImgMovil
        
        start={-100}
        end={0}
        className="nosotros__segunda"
        texto1='Chiquitos pero con  '
        texto2='mucho Swag. '
        
      />     */}
        
        {/* <a className="movimiento" href='#nosotros'
      ><DotLottieReact className='abajo'
          src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
          loop
          autoplay
        />
      
            </a>     */}
    </div>
  );
};

const ParallaxImgMovil = ({ className,title,texto1,texto3,texto2,texto4,texto5,texto6,  start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <>
    <motion.div
     
      className={className}
      ref={ref}
      style={{ transform, opacity }}
      >
      
       
        {/* <img className="nop" src={img} alt="nop" />
        <img className="nop" src={img} alt="nop" /> */}
       
        <p  className="nos__pmovil">{texto1}</p> 
        <p className="nos__pmovil">{texto2}</p>
        <p className="nos__pmovil">{texto3}</p>
        <p className="nos__pmovil">{texto4}</p>
        <p className="nos__pmovil">{texto5}</p>
        <p className="nos__pmovil">{texto6}</p>
       

      </motion.div>
     
      </>
  );
};
const SECTION_HEIGHT = 700;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 120vh)` }}
      className="cotenedor"
    >
      <CenterImage />

       <ParallaxImages />
      

      <div className="final" />
      
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const fontSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT-700],
    ["6em%", "0em"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 700],
    [1, 0]
  );

  return (
    <>
    {/* <motion.div
      className="primer"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    /> */}
     <div className="titulo__nosotros">
        <motion.h1 className="nosotros__h1"
      //  style={{opacity,
      //   fontSize,
      //  }}
      >EL EQUIPO ES LO PRIMERO</motion.h1>
        </div>
   
       
        </>
  );
};
const ParallaxImages = () => {
    return (
      <div className="segun">
        {/* <ParallaxImg
          src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="And example of a space launch"
          start={-200}
          end={200}
          className="uno"
        />
        <ParallaxImg
          src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="An example of a space launch"
          start={200}
          end={-250}
          className="dos"
        /> */}
        <ParallaxImg
           start={100}
           end={-100}
           className="equipo__primera"
           
          texto1='Dada la naturaleza de los proyectos en los que '
          texto2='trabajamos, la discreción es fundamental.  '
          texto3='Mantener nuestros rostros e identidades'
          texto4='ocultas es parte del juego.'
         
          
          
        
          />
         
      </div>
    );
  };
  
  const ParallaxImg = ({ className,texto2,texto1,texto3,texto4,  start, end }) => {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: [`${start}px end`, `end ${end * -1}px`],
    });
  
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  
    return (
      <>
      <motion.div
       
        className={className}
        ref={ref}
        style={{ transform, opacity }}
        >
        
          <p  className="nos__p">{texto1}</p>
          
          <p  className="nos__p1">{texto2}</p> 
          <p className="nos__p">{texto3}</p>
          <p className="nos__p">{texto4}</p>
         
  
        </motion.div>
       
        </>
    );
  };

export default Equipo;