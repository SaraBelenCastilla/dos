import React from 'react'
import { useNavigate } from "react-router-dom";

function Cockies() {
    const navigate = useNavigate();
  return (
    <div
      className="cockies-div">
        <h1 className="cockies-h1">WE ARE COOKIELESS</h1>
        <h2 className="cockies-h2">NO COOKIES, NO DRAMA</h2>
        <p className="cockies-p">
          Este sitio es cookieless friendly. Aquí no usamos cookies de terceros. Ni para espiar, ni para vender tus datos, ni para mostrarte zapatos con brillantina que juraste no buscar. Así de claro.
        </p>
        <p className="cockies-p">
          Tu privacidad está a salvo porque no tenemos nada que almacenar. Nada de trackers ocultos. Nada de “aceptar todas” mientras cruzas los dedos. Aquí entras, navegas y punto. Sin letra pequeña ni ventanas molestas.
        </p>
        <p className="cockies-p">
          ¿Te pica la curiosidad?
        </p>
        <p className="cockies-p">
          Sigue leyendo y te contamos por qué podemos pasar del aviso de cookies, cómo medimos sin espiarte y por qué este mundo sin cookies es más amable (aunque tenga menos galletas).

        </p>
        <p className="cockies-p">
          ¿Entonces no hay cookies?
        </p>
        <p className="cockies-p">
          Y no, no usamos esas cookies de personalización que te siguen como un ex. Porque aquí creemos que la experiencia del usuario se mejora con ideas, no con vigilancia.

        </p>
        <p className="cockies-p">
          Las que no usamos (y por qué eso mola)
        </p>
        <p className="cockies-p">
          Nada de cookies publicitarias.
           
        </p>
        <p className="cockies-p">
          Nada de cookies sociales.
        </p>
        <p className="cockies-p">
          Nada de cookies de analítica invasiva.
        </p>  
        <p className="cockies-p">
          Nada de nada que venga de terceros.
        </p> 
        <p className="cockies-p">
         ¿Y el dichoso aviso?
        </p> 
        <p className="cockies-p">
          No lo necesitas. La ley solo exige ese pop-up si usas cookies que no son estrictamente necesarias. Como nosotros pasamos de todo eso, también pasamos del aviso. Legal y con estilo.

        </p>  
        <p className="cockies-p">
         ¿Por qué esto importa?
        </p>
        <p className="cockies-p">
         Porque tus datos son tuyos. Porque la publicidad no debería perseguirte por todos tus dispositivos. Porque un botón de “Me gusta” no debería colarse en tu privacidad.

        </p>
        <p className="cockies-p">
          Y porque creemos en un Internet más transparente, más limpio y, sí, con menos anuncios de suelas fosforitas.

        </p>
        <p className="cockies-p1">
          Así que aquí estamos, sin cookies, sin dramas y con un compromiso firme: tu privacidad es sagrada. Y si te gusta la idea, ¡bienvenido a la revolución cookieless! 
        </p>
        <h3 className="cockies-h3">Bye-bye cookies de terceros</h3>
        <h3 className="cockies-h3">¡Hola! navegación tranquila</h3>
        <h3 className="cockies-h3">We are cookieless friendly</h3>
         {/* ...tu contenido... */}
      <button className="volver-footer" onClick={() => navigate(-1)}>
        Volver 
      </button>

       
  

    </div>
  )
}

export default Cockies