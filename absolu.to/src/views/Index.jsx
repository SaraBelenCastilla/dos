import React from 'react'
import AutoImageSlider from '../Components/AutoImageSlider';

function Index() {

     const images = [
    "https://live.staticflickr.com/65535/54815516323_a1c8cdf775_z.jpg",
    "https://live.staticflickr.com/65535/54814411347_93ce402500_z.jpg",
    "https://live.staticflickr.com/65535/54815262581_db7e449f46_z.jpg",
    "https://live.staticflickr.com/65535/54814415572_99e3037256_z.jpg",
    'https://live.staticflickr.com/65535/54815606905_22448eed46_z.jpg',
    'https://live.staticflickr.com/65535/54815264696_52738fd414_z.jpg',
    'https://live.staticflickr.com/65535/54815608680_e1547c9498_z.jpg',
    'https://live.staticflickr.com/65535/54815609800_7fda6f076d_z.jpg'
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