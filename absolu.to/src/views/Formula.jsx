import React from 'react'
import Receta from '../assets/img/formula.png'
import { useNavigate } from "react-router-dom";

function Formula() {
   const navigate = useNavigate();
  return (
    <div className='formula__div'>
         <h2 className="formula__h2">FÓRMULA by ABSOLUTO</h2>
         <img src={Receta} alt="formula" className="formula__img" />

          <button className="volver-footer" onClick={() => navigate(-1)}>
        Volver 
      </button>                 
         </div>
  )
}

export default Formula