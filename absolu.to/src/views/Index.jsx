import React from 'react'
import AutoImageSlider from '../Components/AutoImageSlider';
import Foto1 from '../assets/img/foto1.jpg'
import Foto2 from '../assets/img/foto2.jpg'
import Foto3 from '../assets/img/foto3.jpg'
import Foto4 from '../assets/img/foto4.jpg'
import Foto5 from '../assets/img/foto5.jpg'
import Foto6 from '../assets/img/foto6.jpg'
import Foto7 from '../assets/img/foto7.jpg'
import Foto8 from '../assets/img/foto8.jpg'


function Index() {

     const images = [
    Foto1   ,
   Foto2,
   Foto3,
   Foto4 ,
    Foto5,
    Foto6,
    Foto7,
    Foto8
  ];

  return (
   <div className='containerS'>
      <div className='wrapper'>
        {/* <div className='headerS'>
          <h1 className='title'>Slider Automático con Fundido</h1>
          <p className='subtitle'>Slider de imágenes con transición automática</p>
        </div> */}
        
        <div className='sliderWrapper'>
          <AutoImageSlider 
            images={images}
            interval={1500}
            className="h-96"
            alt="Imagen de naturaleza"
          />
        </div>
        
        {/* <div className='footerS'>
          <p className='footerText'>
            Las imágenes cambian automáticamente cada 3 segundos con efecto de fundido
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Index