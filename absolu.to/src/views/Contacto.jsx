import React from 'react'
import { useRef,useState,useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Contacto() {
    const isMobile = useMediaQuery({ query: "(max-width: 500px)" }); // <-- usa query aquí
  return (
    <>
     <div
        
         className="nosotros" >
            <ReactLenis
            root
            options={{
              // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
              lerp: 0.05,
              //   infinite: true,
              //   syncTouch: true,
            }}
          >
           
            {/* Renderiza Hero o HeroMobile según el tamaño de la pantalla */}
        {isMobile ? <Hero /> : <HeroMobile />}
            
           
          </ReactLenis>
          </div>
    <div className='contacto'>
    <h2 className="contacto__h2">¡No te comas el coco!</h2>
     <div className="contacto__pie">
     <div className='animacio'><DotLottieReact
    src="https://lottie.host/da79f46d-cd7e-4833-8916-48ce9913d2be/pd61zutyrT.json"
    loop
    autoplay
  /></div>
    
    </div>
    <div className="contacto__email"  onClick={(e) => {window.location.href ='mailto: hola@absolu.to';}}> ¡HABLEMOS! </div>
    </div>
    </>
  )
}

const SECTION_HEIGHT_MOVIL = 100;
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
    
    >¿HABLAMOS?</motion.h2>
   
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
         start={-800}
         end={100}
         className="nosotros__primera"
         
        texto1='¿Estás más perdido que un GPS en el túnel de la M30? '
        texto2='¿Tienes un briefing tan enrevesado como las '
        texto3='instrucciones de montaje de un mueble sueco? '
        texto4=''
       
        
      
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

const ParallaxImgMovil = ({ className,title,texto1,texto3,texto2,  start, end }) => {
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
        <p className="nos__pmovilN">{texto2}</p>
        <p className="nos__pmovil">{texto3}</p>
       

      </motion.div>
     
      </>
  );
};

const SECTION_HEIGHT = 500;

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
        <motion.h1 className="nosotros__h1C"
      //  style={{opacity,
      //   fontSize,
      //  }}
      >¿HABLAMOS?</motion.h1>
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
           start={-200}
           end={-100}
           className="equipo__primera"
           
          texto1='¿Estás más perdido que un GPS en el túnel de la M30? '
          texto2='¿Tienes un briefing tan    '
          texto3='enrevesado como las instrucciones '
          texto4='de montaje de un mueble sueco?' 

          
         
          
          
        
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
        
          <p  className="nos__p1">{texto1}</p>
          
          <p  className="nos__p">{texto2}</p> 
          <p className="nos__p">{texto3}</p>
          <p className="nos__p">{texto4}</p>
         
  
        </motion.div>
       
        </>
    );
  };

export default Contacto