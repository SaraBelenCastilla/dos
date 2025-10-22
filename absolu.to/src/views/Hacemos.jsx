import React ,{useEffect,useRef,useState} from 'react'
import {motion} from 'framer-motion'
import Transparente from '../assets/img/transparente.png'
import Corporativo from '../assets/img/corporativo.jpg'
import Marca from '../assets/img/marca.jpg'
import Retail from '../assets/img/retail.jpg'
function Hacemos() {
  return (
    <>
     <section className="hacemos">
     
    </section>
    
     
    
    <section className="hacemos__transparente">
      <div className="transparente__contenido">
        <h2 className="transparente__h2">Hacemos.</h2>
        <div className="linea"></div>
        <p className="transparente__p2">Ofrecemos soluciones integrales y holísticas en </p>
        <p className="transparente__p1"><span className='gordita'>marketing experiencial</span> y <span className='gordita'>cultura de marca</span>.</p>
        <p className="transparente__p">Acompañamos a nuestros clientes en todo el recorrido:</p>
        <p className="transparente__p">desde la estrategia hasta la idea creativa, la </p>
         <p className="transparente__p1">producción integral y la activación multicanal. </p>
         <div className="linea"></div>
        </div> 
     
    </section>
    <div className="hacemos__div">
        <div className="hacemos__foto">
        <motion.img className='hacemos__img' src="https://live.staticflickr.com/65535/54859370540_50021b3155_n.jpg" alt="que hacemos"
         initial={{ opacity: 0, y: 0 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 3.5, ease: "easeInOut" } }}
  viewport={{ once: false, amount: 0.5 }}
        />
        </div>
        <div className="hacemos__texto">
            <motion.h2 className="texto__h2"
             initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
            >Capabilities.</motion.h2>
            <div className="hacemos__todo">
                <div className="hacemos__organizado">
                <div className="hacemos__drch">
                  <motion.div className="linea__hacemos"
                   initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  ></motion.div> 
                  <motion.h3 className="drch__h3"
                  initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}} 
                  >Pensamos</motion.h3>
                  <motion.h4 className="drch__h4"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >ESTRATEGIA</motion.h4> 
                  <motion.p className="drch__pUno"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >Ponemos la experiencia en el</motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >centro para generar conexión,</motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >impacto y valor sostenible </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >mediante el análisis de tu marca, </motion.p>
                  <motion.p className="drch__pDos"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >público y contexto.</motion.p> 
                </div>
                  <div className="hacemos__izq">
                     <motion.div className="linea__hacemos"
                      initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}></motion.div>
                      <motion.h3 className="drch__h3"
                     initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}  
                      >Creamos</motion.h3>
                  <motion.h4 className="drch__h4"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >CREATIVIDAD</motion.h4> 
                  <motion.p className="drch__pUno"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >Definimos propósito, narrativa y </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >conceptos que diferencian tu </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >marca, uniendo estrategia y  </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >creatividad para crear </motion.p>
                  <motion.p className="drch__pDos"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >experiencias memorables.</motion.p> 
                </div>
                 
                </div>
                <div className="hacemos__organizado">
                <div className="hacemos__drch">
                  <motion.div className="linea__hacemos"
                   initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  ></motion.div> 
                  <motion.h3 className="drch__h3"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >Innovamos</motion.h3>
                  <motion.h4 className="drch__h4"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >INNOVACIÓN TECNOLÓGICA</motion.h4> 
                  <motion.p className="drch__pUno"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >Integramos soluciones </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >interactivas e inmersivas que</motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >amplifican el impacto, usando la  </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >tecnología como herramienta  </motion.p>
                  <motion.p className="drch__pDos"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >para potenciar la experiencia.</motion.p> 
                </div>
                 <div className="hacemos__izq">
                     <motion.div className="linea__hacemos"
                      initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                     ></motion.div>
                      <motion.h3 className="drch__h3"
                      initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}} 
                      >Producimos</motion.h3>
                  <motion.h4 className="drch__h4"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >PRODUCCIÓN TÉCNICA Y LOGÍSTICA</motion.h4> 
                  <motion.p className="drch__pUno"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >Coordinamos todos los recursos,  </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >equipos y procesos para  </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >garantizar una ejecución  </motion.p>
                  <motion.p className="drch__p"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >impecable y eficiente en cada </motion.p>
                  <motion.p className="drch__pDos"
                   initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
                  >proyecto.</motion.p> 
                </div>
                </div>
            </div>
            </div>
    </div>
    <div className="grid">
      <div className="content__grid">
      <motion.h2 className="grid__h2"
       initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
      >Expertos en</motion.h2>
       <motion.div className="linea"
        initial={{width:0, }}
        whileInView={{width:'100%',  transition:{delay:0.4, duration:2,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
       ></motion.div>
       </div>
     <div className='containero'>
   <><div className='container__box'>
    <figure className='container__figure'>
   <img  className='container__img' src={Corporativo} alt="corporativo" />
   </figure  >
   <div className="containero__descipcion">
       <h2 className="containero__h2">CORPORATIVO</h2>
     <p className="containero__p">CORPORATE EVENTS</p>
     <ol className="containero__ul">
     <li className="containero__li">Conferencias y Congresos.</li>
     <li className="containero__li">Ferias y Exposiciones.</li>
     <li className="containero__li">Networking B2B.</li>
     <li className="containero__li">P.R. Events.</li>
     <li className="containero__li">Convenciones.</li>
     <li className="containero__li">Juntas directivas.</li>
     <li className="containero__li">Inauguraciones, aniversarios.</li>
     <li className="containero__li">Team building y capacitaciones.</li>
     <li className="containero__li">Reuniones de empresa.</li>
     <li className="containero__li">Actos institucionales</li>
     <li className="containero__li">Giras corporativas.</li>
    
     </ol>
     
   </div>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img  className='container__img' src={Marca} alt="marca" />
   </figure>
   <div className="containero__descipcion">
     <h2 className="containero__h2">MARCA</h2>
      <p className="containero__p">EXPERIENTIAL BRANDING</p>
     <ol className="containero__ul">
     <li className="containero__li">Eventos inmersivos.</li>
     <li className="containero__li">Lanzamientos de producto.</li>
     <li className="containero__li">Activaciones.</li>
     <li className="containero__li">Roadshows.</li>
     <li className="containero__li">Street Mk.</li>
     <li className="containero__li">Sampling.</li>
     <li className="containero__li">Guerrilla Mk.</li>
     
    
     </ol>
   </div>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img  className='container__img' src={Retail} alt="retail" />
   </figure>
    <div className="containero__descipcion">
        <h2 className="containero__h2">RETAIL</h2>
       <p className="containero__p">RETAIL ACTIVATION</p>
     <ol className="containero__ul">
     <li className="containero__li">Pop Up stores.</li>
     <li className="containero__li">Shop-in-shop.</li>
     <li className="containero__li">Activación P.O.S.</li>
     <li className="containero__li">Visual merchandising.</li>
     <li className="containero__li">Sampling en tienda.</li>
     <li className="containero__li">Lanzamientos en retail.</li>
    
    
     </ol>
    
   </div>
  
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img'  src='https://live.staticflickr.com/65535/54870588515_c3ca32266e_w.jpg' alt=" digital" />
   </figure>
    <div className="containero__descipcion">
     <h2 className="containero__h2">DIGITAL</h2>
      <p className="containero__p">DIGITAL EXPERIENCE</p>
     <ol className="containero__ul">
     <li className="containero__li">Experiencias híbridas.</li>
     <li className="containero__li">Activación digital.</li>
     <li className="containero__li">Eventos virtuales.</li>
     <li className="containero__li">Realidad aumentada y virtual (AR/VR)..</li>
     <li className="containero__li">Mapping.</li>
     <li className="containero__li">Interactivos.</li>
      <li className="containero__li">Gaming.</li>
       <li className="containero__li">Apps y herramientas de engagement.</li>
        <li className="containero__li">Streaming.</li>
    
    
     </ol>
   </div>
   
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img'  src='https://live.staticflickr.com/65535/54864539776_29299781aa_z.jpg' alt="espacios" />
   </figure>
   <div className="containero__descipcion">
     <h2 className="containero__h2">ESPACIOS</h2>
       <p className="containero__p">EVENT ARCHITECTURE</p>
     <ol className="containero__ul">
     <li className="containero__li">Instalaciones temporales.</li>
     <li className="containero__li">Ecenarios y Escenografía.</li>
     <li className="containero__li">Stands.</li>
     <li className="containero__li">Exposiciones.</li>
     <li className="containero__li">Ferias.</li>
    
    
    
     </ol>
   </div>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img' src='https://live.staticflickr.com/65535/54870524143_48e8d4e9ba_w.jpg' alt="cultura" />
   </figure>
   <div className="containero__descipcion">
     <h2 className="containero__h2">CULTURA</h2>
      <p className="containero__p">CULTURAL & LIVE EVENTS</p>
     <ol className="containero__ul">
     <li className="containero__li">Eventos culturales</li>
     <li className="containero__li">Eventos deportivos</li>
     <li className="containero__li">Entretenimiento y Espectáculos</li>
     <li className="containero__li">Festivales y Conciertos</li>
     <li className="containero__li">Exposiciones de Arte</li>
     <li className="containero__li">Gastro experiences</li>
     
     
    
     </ol>
   </div>
    </div>
    <div className='container__box'>
    <figure className='container__figure'>
   <img className='container__img' src='https://live.staticflickr.com/65535/54870515963_8e72deb283_z.jpg' alt="contenido" />
   </figure>
   <div className="containero__descipcion">
     <h2 className="containero__h2">CONTENIDO</h2>
     <p className="containero__p">CONTENT & VIDEO PRODUCTION</p>
     
     <ol className="containero__ul">
     <li className="containero__li">Experience content</li>
     <li className="containero__li">Vídeos de apertura eventos</li>
     <li className="containero__li">Vídeos Corporativos</li>
     <li className="containero__li">Integración producto y lifestyle</li>
     <li className="containero__li">Animación y Motions Graphic</li>
     
    
     </ol> 
     
   </div>
    </div>
    
    </>
    </div>
    </div>

    </>
  )
}

export default Hacemos