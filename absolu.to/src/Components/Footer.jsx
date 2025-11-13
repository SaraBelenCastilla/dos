import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lgo from '../assets/img/logoFoter.png'
import { FaRegCopyright } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>
    <footer id='footer' className='footer'>
      {/* <div className='footer__cabecera'>
        
        <div className='arroba'><DotLottieReact
      src="https://lottie.host/c8cf3a7a-5303-474c-9307-d60a2a1d120e/BSK9SpugrK.json"
      loop
      autoplay
    /></div>
      </div> */}
     
     <Link to="/home"><img className='logo__footer' src={Lgo} alt="logo" /></Link>  
      
         
      <div className="footer__cuerpo">
        <div className="footer__drc">
         
          <div className="footer__direccion">
          <h3 className="footer__h3">Madrid</h3>
          <p className="footer__p">C/ Concepción Jerónima 22, 28012</p>
          </div>
          <div className="footer__direccion">
          <h2 className="footer__h3">Sevilla</h2>
          <p className="footer__p">Av. República Argentina 15, 41011</p>
          </div>
        
        </div>
        <div className="footer__izq">
        <div className="footer__email"  onClick={(e) => {window.location.href ='mailto: hola@absolu.to';}}> hola@absolu.to </div>
          {/* <p className="footer__email"> hola@absolu.to</p> */}
          {/* <div className="footer__llamar">
          <FaPhoneAlt className='fono' />
          <p className="footer__telf">+34 643 470 163</p>
          </div> */}
           <div className="contactoF__email"  onClick={(e) => {window.location.href ='mailto: becomeabrander@absolu.to';}}>
            <span className="contactoF__default-text">ÚNETE AL EQUIPO</span>
             <span className="contactoF__hover-text">BECOME A BRANDER</span>
           </div>
            {/* <div className="contactoF__email"  onClick={(e) => {window.location.href ='mailto: becomeabrander@absolu.to';}}>
            <span className="contactoF__default-text">PROVEDORES</span>
             <span className="contactoF__hover-text">PROVEDORES</span>
           </div> */}
 <div className="footer__social">
             <a
    href="https://www.facebook.com/absolutoexperiential/
"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
          <svg className='social' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
<path className='social-path' fill="currentColor" d="M67.8,116.9c-1.7,0-3-1.4-3-3c0,0,0,0,0,0c0-0.9,0-20.6,0-37.3c0-1.7,1.3-3,3-3h7.8l0.7-7.2h-8.5c-1.7,0-3-1.3-3-3v-7.8c0-4.5,3.3-6.6,6.3-6.6h5.4v-6.9l-8.5,0c-11.5,0-12.7,8.9-12.7,12.7v8.6c0,1.7-1.3,3-3,3h-6.9v7.2h6.9c1.7,0,3,1.3,3,3v36.1c0,1.7-1.3,3-3,3s-3-1.3-3-3V79.6h-6.9c-1.7,0-3-1.3-3-3V63.3c0-1.7,1.3-3,3-3h6.9v-5.6c0-8.6,4.9-18.7,18.7-18.7l11.5,0c1.7,0,3,1.3,3,3V52c0,1.7-1.3,3-3,3h-8.4c-0.1,0-0.2,0-0.2,0c0,0.1-0.1,0.3-0.1,0.6v4.8h8.9c0.8,0,1.7,0.4,2.2,1c0.6,0.6,0.8,1.5,0.8,2.3l-1.4,13.2c-0.2,1.5-1.4,2.7-3,2.7h-7.5c0,7.7,0,15.7,0,22.1l0,11.4c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.3l0,0C70.5,116.4,69,116.9,67.8,116.9z"></path><path fill="#3f4a54" d="M67.8,116.9c-1.6,0-2.9-1.2-3-2.8c-0.1-1.7,1.1-3.1,2.8-3.2c24.4-1.8,43.4-22.4,43.4-46.9c0-25.9-21.1-47-47-47s-47,21.1-47,47c0,21.8,14.8,40.6,35.9,45.7c1.6,0.4,2.6,2,2.2,3.6c-0.4,1.6-2,2.6-3.6,2.2C27.7,109.8,11,88.6,11,64.1c0-29.2,23.8-53,53-53c29.2,0,53,23.8,53,53c0,27.6-21.5,50.8-49,52.8C67.9,116.9,67.9,116.9,67.8,116.9z"></path>
</svg>
</a>
<a
    href="https://www.instagram.com/absolutoexperiential/
"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="instagram"
  >
<svg className='social' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path className='social-path' fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path><path fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path><path d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
</svg>
</a>
<a
    href="https://www.linkedin.com/company/absoluto-experiential"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="linkedin"
  >
<svg className='social' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path className='social' fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path><circle cx="15.5" cy="15.5" r="2.5"></circle><path d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path><path d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-7.5	c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
</svg>
</a>
<a
    href="https://open.spotify.com/user/31ttt3wpl5zutlubkvghgqbowgom?si=35ce3140e2994e5c
"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="instagram"
  >
<svg className='social' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
<path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 22.628906 9.371094 28 16 28 C 22.628906 28 28 22.628906 28 16 C 28 9.371094 22.628906 4 16 4 Z M 16 6 C 21.554688 6 26 10.445313 26 16 C 26 21.554688 21.554688 26 16 26 C 10.445313 26 6 21.554688 6 16 C 6 10.445313 10.445313 6 16 6 Z M 14.40625 10.75 C 12.460938 10.75 10.765625 10.929688 9.15625 11.4375 C 8.730469 11.523438 8.375 11.84375 8.375 12.4375 C 8.375 13.03125 8.8125 13.554688 9.40625 13.46875 C 9.660156 13.46875 9.832031 13.375 10 13.375 C 11.355469 13.035156 12.882813 12.875 14.40625 12.875 C 17.367188 12.875 20.40625 13.535156 22.4375 14.71875 C 22.691406 14.804688 22.777344 14.90625 23.03125 14.90625 C 23.625 14.90625 24.039063 14.46875 24.125 13.875 C 24.125 13.367188 23.871094 13.042969 23.53125 12.875 C 20.992188 11.4375 17.621094 10.75 14.40625 10.75 Z M 14.125 14.46875 C 12.347656 14.46875 11.082031 14.722656 9.8125 15.0625 C 9.390625 15.230469 9.15625 15.492188 9.15625 16 C 9.15625 16.421875 9.492188 16.84375 10 16.84375 C 10.171875 16.84375 10.246094 16.835938 10.5 16.75 C 11.429688 16.496094 12.707031 16.34375 14.0625 16.34375 C 16.855469 16.34375 19.285156 17.023438 21.0625 18.125 C 21.230469 18.210938 21.402344 18.28125 21.65625 18.28125 C 22.164063 18.28125 22.5 17.851563 22.5 17.34375 C 22.5 17.003906 22.339844 16.667969 22 16.5 C 19.800781 15.144531 17.003906 14.46875 14.125 14.46875 Z M 14.40625 18.125 C 12.96875 18.125 11.605469 18.285156 10.25 18.625 C 9.910156 18.710938 9.65625 18.953125 9.65625 19.375 C 9.65625 19.714844 9.921875 20.0625 10.34375 20.0625 C 10.429688 20.0625 10.675781 19.96875 10.84375 19.96875 C 11.945313 19.714844 13.128906 19.5625 14.3125 19.5625 C 16.425781 19.5625 18.359375 20.070313 19.96875 21 C 20.140625 21.085938 20.332031 21.15625 20.5 21.15625 C 20.839844 21.15625 21.164063 20.902344 21.25 20.5625 C 21.25 20.136719 21.066406 19.980469 20.8125 19.8125 C 18.949219 18.710938 16.773438 18.125 14.40625 18.125 Z"></path>
</svg>
</a>
          </div>
           
    </div>
         
          
        </div>
     
      <div className="footer__pie">
      <FaRegCopyright className='copy'/>
      <p className="footer__p"> 2025 Absoluto Experiential  </p>
      <p className="footer__p"> <Link className="footer__link" to="/privacidad"> | Privacidad</Link><br /> </p>
      <p className="footer__p"> <Link className="footer__link" to="/coockies">| We are Cookieless</Link>  </p>
       <p className="footer__p"> <Link className="footer__link" to="/sostenibilidad">| Sostenibilidad</Link>  </p>
      </div>
    </footer>
    
    </>
  )
}
