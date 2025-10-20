import React from 'react'
import { useNavigate } from "react-router-dom";

function Sostenibilidad() {
    const navigate = useNavigate();
  return (
    <div className='privacidad'>
         <h2 className='privacidad__h2'>Política de Sostenibilidad
</h2>
<p className='privacidad__p'>En Absoluto no hacemos postureo verde: hacemos sostenibilidad real. La de verdad, la que se suda, se planifica y se nota en cada evento. Porque el impacto importa, y si va a dejar huella, que sea la correcta.

        </p>
        <p className='privacidad__p'>Creemos que la sostenibilidad no es un complemento de moda ni un hashtag bonito: es una obligación. Nuestro compromiso es diseñar experiencias que inspiren sin hipotecar el planeta. Apostamos por colaboraciones locales, reducimos residuos y nos enchufamos —literalmente— a energías renovables. Hacemos eventos que dejan huella en la memoria, no en el medio ambiente.
</p>
        <p className='privacidad__p'>Puede que no tengamos el diploma colgado ni un sello verde que brille en la web, pero tenemos algo mucho más valioso: compromiso, acción y cero excusas. La sostenibilidad es nuestro método, no nuestra campaña.
</p>
<h3 className="privacidad__h3">Nuestro manifiesto sostenible
</h3>
 <ul className='privacidad__ul'>
          <li className='li'><div className="soste__div"><h4 className="soste__h4"> Recursos con cabeza<p className="privacidad__p">Reducimos, reutilizamos y reciclamos todo lo posible. La economía circular no es una teoría: es práctica diaria en cada producción.
</p></h4></div></li>  
          <li className='li'><div className="soste__div"><h4 className="soste__h4"> Energía limpia y tecnología eficiente
<p className="privacidad__p">Trabajamos con equipos de bajo consumo, iluminación LED y soluciones que optimizan recursos sin sacrificar la experiencia. Además, compensamos nuestra huella de carbono apoyando proyectos de energías renovables.

</p></h4></div></li>  
           <li className='li'><div className="soste__div"><h4 className="soste__h4">  Proveedores responsables<p className="privacidad__p">Solo jugamos con quienes comparten nuestra visión. Si no respetas el planeta, no entras en el juego. Apostamos por proveedores locales y procesos sostenibles.

</p></h4></div></li>  
           <li className='li'><div className="soste__div"><h4 className="soste__h4">  Impacto social real<p className="privacidad__p">Creemos en la inclusión, en dar oportunidades y en apoyar el talento y la economía local. Cada evento es una oportunidad para que la riqueza se quede en casa.

</p></h4></div></li>  
 <li className='li'><div className="soste__div"><h4 className="soste__h4"> Mejora continua<p className="privacidad__p">No nos dormimos en los laureles. Evaluamos, revisamos y perfeccionamos nuestras prácticas de manera constante, buscando siempre hacerlo un poco mejor, con coherencia y sin artificios.


</p></h4></div></li>  
            </ul> 
            <h3 className="privacidad__h3">Nuestro compromiso</h3>
             <p className='privacidad__p'>No presumimos de ser perfectos, pero sí de ser coherentes.
Porque en Absoluto Experiential, la sostenibilidad no es un extra:
es parte de nuestra forma de hacer las cosas.

</p>

 <p className='privacidad__p'>Eventos con alma, cabeza y conciencia.


</p>
<h4 className="soste__h4">Sostenibilidad sin postureo. Impacto positivo. Acción real.

</h4>

 <button className="volver-footer" onClick={() => navigate(-1)}>
        Volver 
      </button>                 
    </div>
  )
}

export default Sostenibilidad