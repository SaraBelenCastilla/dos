import React ,{useEffect,useRef,useState} from 'react'
import Transparente from '../assets/img/transparente.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const imagenes = [
  {
    index:1,
    imagen:'https://live.staticflickr.com/65535/54854830113_28f5bf951d_n.jpg',
     h2:'LIQUIDOS',
      p:'Fluimos, nunca nos disolvemos.',
   
  },
  {
    index:2,
    imagen:'https://live.staticflickr.com/65535/54854881165_638d23b426_n.jpg',
    h2:'FLEXIBLES',
     p:'Cambiamos,giramos , nos reinventámos',
    
  },
  {
    index:3,
    imagen:'https://live.staticflickr.com/65535/54854819784_e5e1b8388d_n.jpg',
    h2:' TRANSPARENTES',
    p:'Honestidad en cada proceso.',
   
  },
  {
    index:4,
    imagen:'https://live.staticflickr.com/65535/54854818884_fcf75c2685_n.jpg',
    h2:'INTEGRALES',
    p:'Producción 360º.Cobertura integral.', 
   
  },
  {
    index:5,
    imagen:'https://live.staticflickr.com/65535/54854573626_7ccf035eb6.jpg',
    h2:' EFICIENTES',
     p:'Optimizamos. Resolvemos. Cumplimos.',
   
  },
  {
    index:6,
    imagen:'https://live.staticflickr.com/65535/54854825333_bf7db6c69c.jpg',
    h2:'SOSTENIBLES',
     p:'Sostenibilidad sin postureo. ',
   
  },
]


const contenedero = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

const cosa = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


function Somos() {
     const [isVisible, setIsVisible] = useState(false);
      const prestacionRef = useRef(null);
     
    //   useEffect(() => {
    //     const observerOptions = {
    //       root: null,
    //       rootMargin: '0px',
    //       threshold: 0.5
    //     };
    
    //     const observerCallback = (entries) => {
    //       entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //           setIsVisible(true);
    //         }
    //       });
    //     };
    
    //     const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    //     if (prestacionRef.current) {
    //       observer.observe(prestacionRef.current);
    //     }
    
    //     return () => {
    //       if (prestacionRef.current) {
    //         observer.unobserve(prestacionRef.current);
    //       }
    //     };
    //   }, []);
//     useEffect(() => {
//     const transparente = document.querySelector('.somos__transparente');
//     const onScroll = () => {
//       // Cuando .somos__transparente llega al top del viewport
//       const rect = transparente.getBoundingClientRect();
//       if (rect.top <= 0) {
//         transparente.classList.add('activa');
//       } else {
//         transparente.classList.remove('activa');
//       }
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []); 

  return (
    <>
   
    <section className="somos">
 
</section>

 

<section className="somos__transparente">
    <div className="foto__somos">
 <img className='transparente__img' src={Transparente} alt="transparente" />
 </div>
 
</section>
<section  >
    <div className="somos__proposito">
        <div className="proposito__foto">
        <motion.img className='proposito__img' src="https://live.staticflickr.com/65535/54851561117_6b2d402e27_n.jpg" alt="proposito"
        initial={{ opacity: 0, y: 0 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 3.5, ease: "easeInOut" } }}
  viewport={{ once: false, amount: 0.5 }}
        />
        </div>
        <div className="proposito__div">
            <motion.p className="proposito__p"
             initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            >Nuestro propósito:</motion.p>
            <motion.div className="linea"
             initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            ></motion.div>
            <motion.h2 className="proposito__h2"
             initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            >Conectar marcas con personas.</motion.h2>
           <motion.div className="linea"
            initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           ></motion.div>
            <motion.p className="proposito__pUno"
             initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            >Creamos experiencias transmedia integradas y escalables para fortalecer la cultura de marca y generar vínculos emocionales duraderos con tu audiencia.</motion.p>
        </div>
    </div>
    
</section>
 <div className="contenedero"  ref={prestacionRef}>
    <div className="contenedero__div">
        <motion.p className="conte__p"
         initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Somos :</motion.p>
        <motion.div className="conte__linea"
         initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        ></motion.div>
        </div> 
       
    <motion.ul
    className="contenedero__container"
    variants={contenedero}
    initial="hidden"
    whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  >
    {imagenes.map((index) => (
      <motion.li key={index.index} className="cosa" variants={cosa}>
        <img className='img__item' src= {index.imagen} alt={index.h2} />
        <div className="contenedero__descripcion"
       
        >
          <h2 className="contenedero__h2">{index.h2}</h2>
          <p className="contenedero__p">{index.p}</p>
        </div>
       
        </motion.li> 
    ))}
  </motion.ul>
  {/* <a className="movimiento" href='#footer'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a>  */}
  </div>
  
    <div className="somos__proposito">
        <div className="proposito__fotoUno">
        <motion.img className='proposito__img' src="https://live.staticflickr.com/65535/54857115899_9bed2ecf03_n.jpg" alt="sostenibilidad"
        initial={{ opacity: 0, y: 0 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 3.5, ease: "easeInOut" } }}
  viewport={{ once: false, amount: 0.5 }}
        />
        </div>
        <div className="proposito__divUno">
            <motion.p className="proposito__p"
             initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            >Manifiesto de Sostenibilidad</motion.p>
            <motion.div className="linea"
             initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            ></motion.div>
           <motion.h3 className="proposito__h3S"
            initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           >SOSTENIBILIDAD SIN POSTUREO.</motion.h3>
           <motion.h3 className="proposito__h3"
            initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:1, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           >RECICLAJE Y GESTIÓN DE RESIDUOS.</motion.h3>
           <motion.h3 className="proposito__h3"
            initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:1.2, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           >ENERGÍA LIMPIA Y TECNOLOGÍAS EFICIENTES.</motion.h3>
           <motion.h3 className="proposito__h3"
            initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:1.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           >PROVEEDORES LOCALES CON CONCIENCIA.</motion.h3>
           <motion.h3 className="proposito__h3"
            initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:1.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           >INCLUSIÓN SOCIAL.</motion.h3>
           <motion.h3 className="proposito__h3Y"
            initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:1.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           >COMPROMISO DE MEJORA CONSTANTE.</motion.h3>
           <motion.div className="linea"
            initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
           ></motion.div>
            
        </div>
        <Link className="contactoF__emailS" to="/sostenibilidad">
            
             <span className="contactoF__default-text">Politica Sostenibilidad</span>
            <span className="contactoF__hover-text">Politica Sostenibilidad</span>
          </Link>
    </div>
    </>
  )
}

export default Somos