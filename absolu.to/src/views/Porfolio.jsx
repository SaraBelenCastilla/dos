import React ,{useEffect,useRef,useState} from 'react'
// import {backInOut, motion}from "framer-motion";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { IoClose } from "react-icons/io5";
import LogoSlider1 from '../Components/LogoSlider1';
import LogoSlider2 from '../Components/LogoSlider2';
import LogoSlider3 from '../Components/LogoSlider3';
import LogoSlider from '../Components/LogoSlider';
import Foto from '../assets/img/cabezara.jpg';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const icons = [
  {
    index:1,
    icon:'https://live.staticflickr.com/65535/54536722252_3ed7f2d25a_w.jpg',
    descripcion:'API MÓVILES',
    gallery:[
      'https://live.staticflickr.com/65535/54552094975_c8875ac48e_w.jpg',
      'https://live.staticflickr.com/65535/54550880372_9f335c73f7_w.jpg',
      'https://live.staticflickr.com/65535/54551757491_05a59bfe65_w.jpg',
      'https://live.staticflickr.com/65535/54551757486_e526a7982c_w.jpg',
      'https://live.staticflickr.com/65535/54552094980_fa94a6810c_w.jpg',
      'https://live.staticflickr.com/65535/54550880367_422288ec4c_w.jpg',
      
      

    ],
      h2:'API DISPOSITIVOS MÓVILES',

      h3:'DIGITAL: IMPRESIONISTAS EXPO',


      p:'#Digital #ActivacionDeMarca #DiseñoWeb&App #ActivacionRedesSociales #Contenido #HazteUnSelfie',

  },
   {
    index:2,
    icon:'https://live.staticflickr.com/65535/54537947840_3d7950d74b_w.jpg',
    descripcion:'CONFERENCIAS INVERSORES',
    gallery:[
      'https://live.staticflickr.com/65535/54552082095_b3280c2e61_w.jpg',
      'https://live.staticflickr.com/65535/54551979228_ac33f5041e_w.jpg',
      'https://live.staticflickr.com/65535/54551979213_a8a8d40fdb_w.jpg',
      'https://live.staticflickr.com/65535/54552082070_5caff5a9fc_w.jpg',
      'https://live.staticflickr.com/65535/54552082060_b3cbe91ec7_w.jpg',
      'https://live.staticflickr.com/65535/54551924624_3a9de0be9c_w.jpg',
      'https://live.staticflickr.com/65535/54551924609_f427a6b0d3_w.jpg',
      'https://live.staticflickr.com/65535/54550867662_60026db882_w.jpg',
      'https://live.staticflickr.com/65535/54550867642_e2a6d6d207_w.jpg',
      'https://live.staticflickr.com/65535/54552082035_5caff5a9fc_w.jpg'
    ],
     h2:'CONFERENCIAS PLAN ANUAL DE INVERSIÓN',

      h3:'EVENTO: INVERSIS BANCO',


      p:'#Evento #Produccion360 #RoadShow #ProduccionAudiovisual #Atrezzo #Escenografia #Madrid #Barcelona #Bilbao #SanSebastian #Valencia #LaCoruña #Zaragoza',

  },
  {
    index:3,
    icon:'https://live.staticflickr.com/65535/54537950360_fd1956f306_w.jpg',
    descripcion:'THE CUBE EXPERIENCE',
    gallery:[
      'https://live.staticflickr.com/65535/54551951368_0e36a351e6_w.jpg',
      'https://live.staticflickr.com/65535/54551897144_4cf645db1b_w.jpg',
      'https://live.staticflickr.com/65535/54552054430_138b43f300_w.jpg',
      'https://live.staticflickr.com/65535/54550840397_22d49d194e_w.jpg,',
      'https://live.staticflickr.com/65535/54551717311_a786ac0816_w.jpg',
      'https://live.staticflickr.com/65535/54552054390_c60243f54d_w.jpg',
      'https://live.staticflickr.com/65535/54550840332_d8e0a654f4_w.jpg',
      'https://live.staticflickr.com/65535/54550840347_ecaaa50f6b_w.jpg',
      'https://live.staticflickr.com/65535/54551897059_50c78fb62e_w.jpg',
      'https://live.staticflickr.com/65535/54551897054_3555b9e370_w.jpg',
      'https://live.staticflickr.com/65535/54550840327_5ab3c602a6_w.jpg',
      'https://live.staticflickr.com/65535/54552054375_92e4ffb23b_w.jpg'
    ],
    h2:'THE CUBE',


      h3:'EXPERIENCIA DE MARCA: LUCKY STRIKE',
      p:'#ExperienciaDeMarca #Produccion360 #ProduccionAudiovisual #IntervencionDeEspacios #LiveShow #Contenido',    
  },{
    index:4,
    icon:'https://live.staticflickr.com/65535/54536731682_cd9091ef6d_w.jpg',
    descripcion:'FERIA INMOBILIARIA',
    gallery:[
      'https://live.staticflickr.com/65535/54552045275_14eceaa5a7_w.jpg',
      'https://live.staticflickr.com/65535/54551708206_c47aa308fd_w.jpg',
      'https://live.staticflickr.com/65535/54550831192_dc29b21445_w.jpg',
      'https://live.staticflickr.com/65535/54551888274_58a28c52f0_w.jpg',
      'https://live.staticflickr.com/65535/54551888244_0ec6516bc4_w.jpg',
      'https://live.staticflickr.com/65535/54551708161_808e8c1a3e_w.jpg',
      'https://live.staticflickr.com/65535/54552045230_78fecfc161_w.jpg',
      'https://live.staticflickr.com/65535/54551708121_afb433d081_w.jpg',
      'https://live.staticflickr.com/65535/54551942503_52a876a48c_w.jpg',
      'https://live.staticflickr.com/65535/54551708141_30403c324e_w.jpg',
      'https://live.staticflickr.com/65535/54552045220_91df7ee89c_w.jpg'
    ],
    h2:'SALÓN INMOBILIARIO COSTA DE LA LUZ',

      h3:'FERIA INMOBILIARIA',
      p:'#GranEvento #FeriaInmobiliaria #ConvocatoriaPrensa #ActivacionPatrocinios #DiseñoGrafico #IdentidadCorporativa #Produccion360 #Hospitality #ConilDeLaFrontera',
  },
  {
    index:5,
    icon:'https://live.staticflickr.com/65535/54537614271_121360d7e1_w.jpg',
    descripcion:'STAND MERCEDES',
    gallery:[
      'https://live.staticflickr.com/65535/54550574002_f6699ef631_w.jpg',
      'https://live.staticflickr.com/65535/54551630344_e0c142c21b_w.jpg',
      'https://live.staticflickr.com/65535/54551630319_7a16bd6e53_w.jpg',
      'https://live.staticflickr.com/65535/54551630349_e2a83c3045_w.jpg',
      'https://live.staticflickr.com/65535/54550573992_13355170b5_w.jpg',
      
    ],
    h2:'ESPACIO MERCEDES VIANO',

      h3:'ACTIVACIÓN: MERCEDES BENZ VEHÍCULOS INDUSTRIALES',
      p:'#Cobranding #Stand #Digital #Gymkana #DiseñoWeb',
  },
  {
    index:6,
    icon:'https://live.staticflickr.com/65535/54537615751_448187cebe_w.jpg',
    descripcion:'ROAD SHOW JUNTA A.',
    gallery:[
      'https://live.staticflickr.com/65535/54550805267_0ab1ea35d1_w.jpg',
      'https://live.staticflickr.com/65535/54551862714_b4be2b2c23_w.jpg',
      'https://live.staticflickr.com/65535/54552019700_632a187045_w.jpg',
      'https://live.staticflickr.com/65535/54550805222_73e50d9704_w.jpg',
      'https://live.staticflickr.com/65535/54550805192_6d1c37f302_w.jpg',
      'https://live.staticflickr.com/65535/54551682531_8cbed0e33a_w.jpg',
      'https://live.staticflickr.com/65535/54550805197_dc4dd6da86_w.jpg',
      'https://live.staticflickr.com/65535/54551682546_35b35d6c85_w.jpg',
      'https://live.staticflickr.com/65535/54550805182_c48c516fc3_w.jpg',
      'https://live.staticflickr.com/65535/54551682461_f514964555_w.jpg',
      'https://live.staticflickr.com/65535/54551916908_1c4d737d6c_w.jpg',
      'https://live.staticflickr.com/65535/54552019645_e4b9508009_w.jpg',
      'https://live.staticflickr.com/65535/54551916868_162ab4697f_w.jpg',
      'https://live.staticflickr.com/65535/54551682436_3790d25913_w.jpg',
      'https://live.staticflickr.com/65535/54551682431_b5b18c17b9_w.jpg',
      'https://live.staticflickr.com/65535/54551682426_2468a10713_w.jpg'
    ],
    h2:'LUJITA Y LOS CALICERTIS',
    h3:'ROADSHOW: CONSEJERÍA DE AGRICULTURA Y PESCA, JUNTA DE ANDALUCÍA.',
    p:'#CalidadCertificada #ConcienciacionAlimentaria #AlimentacionInfantil #Gymkana #Interactivos #Digital',
  },
  {
    index:7,
    icon:'https://live.staticflickr.com/65535/54536735702_9c15e97103_w.jpg',
    descripcion:'ACTIVACION JUNTA A.',
    gallery:[
      'https://live.staticflickr.com/65535/54550771872_76568b05ac_w.jpg',
      'https://live.staticflickr.com/65535/54551649331_fc7c4b65bb_w.jpg',
      'https://live.staticflickr.com/65535/54550771882_f62a897e37_w.jpg',
      'https://live.staticflickr.com/65535/54550771897_55e871f093_w.jpg',
      'https://live.staticflickr.com/65535/54550771847_866e459326_w.jpg',
      'https://live.staticflickr.com/65535/54551985355_ee862e7903_w.jpg',
      'https://live.staticflickr.com/65535/54550771802_7dc7dc2ca8_w.jpg',
      'https://live.staticflickr.com/65535/54550771802_7dc7dc2ca8_w.jpg',
      'https://live.staticflickr.com/65535/54550771787_90692c981e_w.jpg',
      'https://live.staticflickr.com/65535/54550771792_8947be3d78_w.jpg',
      'https://live.staticflickr.com/65535/54551828989_7ac133f046_w.jpg',
      'https://live.staticflickr.com/65535/54550771767_4efc4b5644_w.jpg',
      'https://live.staticflickr.com/65535/54551882508_4de5712817_w.jpg',
      'https://live.staticflickr.com/65535/54551649261_aaeb31e915_w.jpg'
    ],
    h2:'LUJITA Y LOS CALICERTIS',
    h3:'ACTIVACION NAVIDEÑA: CONS. DE AGRICULTURA Y PESCA, J. DE ANDALUCÍA.',
    p:'#Activacion #CalidadCertificada #ConcienciacionAlimentaria #AlimentacionInfantil #Interactivos #Animacion',
  },
  {
    index:8,
    icon:'https://live.staticflickr.com/65535/54537799844_5f77706766_w.jpg',
    descripcion:'ACTIVACION FERRY IBIZA',
    gallery:[
      'https://live.staticflickr.com/65535/54551622569_3401968739_w.jpg',
      'https://live.staticflickr.com/65535/54550566422_799ce1f9ed_w.jpg',
      'https://live.staticflickr.com/65535/54551622529_f504e153f0_w.jpg',
      'https://live.staticflickr.com/65535/54551442361_28e4ff6932_w.jpg',
      'https://live.staticflickr.com/65535/54551676018_4ee82ca7ef_w.jpg',
      'https://live.staticflickr.com/65535/54550566402_961c6e75f1_w.jpg'
    ],
    h2:'VIAJA EN FERRY A IBIZA',
    h3:'ACTIVACIÓN: ACCIONA, TRASMEDITERRANEA',
    p:'#GuerrillaMarketing #StreetMarketing #Performance #LiveShow',
  },
  {
    index:9,
    icon:'https://live.staticflickr.com/65535/54537801424_9135204b65_w.jpg',
    descripcion:'LA CAÑA PERFECTA',
    gallery:[
      'https://live.staticflickr.com/65535/54551764245_1fc56f1d1a_w.jpg',
      'https://live.staticflickr.com/65535/54551662118_83c0de9b46_w.jpg',
      'https://live.staticflickr.com/65535/54551662113_c4f24ac9b8_w.jpg',
      'https://live.staticflickr.com/65535/54551764215_d4f5dc2ab5_w.jpg',
     
      'https://live.staticflickr.com/65535/54551662073_31cc267577_w.jpg',
      'https://live.staticflickr.com/65535/54551662083_119274f3b4_w.jpg',
      'https://live.staticflickr.com/65535/54551662078_ca95e80deb_w.jpg',
      'https://live.staticflickr.com/65535/54551428196_ba377c1109_w.jpg',
      'https://live.staticflickr.com/65535/54551764160_de908d7188_w.jpg',
      'https://live.staticflickr.com/65535/54551608344_d43179e552_w.jpg',
      'https://live.staticflickr.com/65535/54550551857_a43f6829d5_w.jpg'
    ],
   
      h2:'LA CAÑA PERFECTA. VAMOS, DILO',
      h3:'ACTIVACION: CRUZCAMPO',

      p:'#GuerrillaMarketing #StreetMarketing #ActivacionPuntoDeVenta #LaCañaTambienDeNoche',

    
  },
  {
    index:10,
    icon:'https://live.staticflickr.com/65535/54536779487_3742e6ea6e_w.jpg',
    descripcion:'LA CENTRAL DE LOS DESEOS',
    gallery:[
      'https://live.staticflickr.com/65535/54551641533_27a4886f4a_w.jpg',
      'https://live.staticflickr.com/65535/54551743240_4139c09cc9_w.jpg',
      'https://live.staticflickr.com/65535/54550534022_b950d4aeba_w.jpg',
      'https://live.staticflickr.com/65535/54551588394_94d14f9ed1_w.jpg',
      'https://live.staticflickr.com/65535/54551407921_bb52cd6bc0_w.jpg',
      'https://live.staticflickr.com/65535/54551410686_b105b1acfa_w.jpg',
      'https://live.staticflickr.com/65535/54551407896_8af37ce0e6_w.jpg',
      'https://live.staticflickr.com/65535/54551641443_95a4cf3d1b_w.jpg',
      'https://live.staticflickr.com/65535/54551588374_76478da18a_w.jpg',
      'https://live.staticflickr.com/65535/54550531537_21623827bc_w.jpg'
    ],
    h2:'LA CENTRAL DE LOS DESEOS',
    h3:'ACTIVACION: MASTER CARD',
    p:'#ActivacionPuntoDeVenta #Animacion #Fotomaton #PhotoBooth #ChristmasPersonalizados #CentrosComerciales #Madrid #Barcelona #Bilbao #Malaga #Zaragoza #Alicante #LaCoruña',
  },
  {
    index:11,
    icon:'https://live.staticflickr.com/65535/54536739962_7152697f17_w.jpg',
    descripcion:'PRODUCCIÓN',
    gallery:[
      'https://live.staticflickr.com/65535/54551737710_55ffd67b1c_w.jpg',
      'https://live.staticflickr.com/65535/54551402286_48d2647d3f_w.jpg',
      'https://live.staticflickr.com/65535/54551402211_e42b2062a7_w.jpg',
      'https://live.staticflickr.com/65535/54551635633_bac3aa6954_w.jpg',
      'https://live.staticflickr.com/65535/54551635618_9b5ee8225b_w.jpg',
      'https://live.staticflickr.com/65535/54551635638_6bd1ebd5d7_w.jpg',
      'https://live.staticflickr.com/65535/54551737630_174a535bee_w.jpg',
      'https://live.staticflickr.com/65535/54551582719_db84ebb9d8_w.jpg',
      'https://live.staticflickr.com/65535/54551635628_3e5e996a4a_w.jpg'
    ],
    h2:'PRODUCCIÓN',
    h3:'',
    p:'#ProduccionAudiovisual #Contenidos #ProduccionTecnica #SolucionesTecnicas #Interactivos #VideosCorporativos',
    
  },
  {
    index:12,
    icon:'https://live.staticflickr.com/65535/54537963280_9fbf13b073_w.jpg',
    descripcion:'ROADSHOWS',
    gallery:[
      'https://live.staticflickr.com/65535/54550500607_2e585a379e_w.jpg',
      'https://live.staticflickr.com/65535/54551611628_4a7001c457_w.jpg',
      'https://live.staticflickr.com/65535/54550502782_d72763db36_w.jpg',
      'https://live.staticflickr.com/65535/54551613593_e008340a43_w.jpg',
      'https://live.staticflickr.com/65535/54551717580_2851226df2_w.jpg',
      'https://live.staticflickr.com/65535/54551717555_ef768da7a4_w.jpg',
      'https://live.staticflickr.com/65535/54550505062_007b41f0ca_w.jpg',
      'https://live.staticflickr.com/65535/54551717540_7dd04221ff_w.jpg',
      'https://live.staticflickr.com/65535/54551561624_260227095b_w.jpg',
      'https://live.staticflickr.com/65535/54550504997_f67b7815c2_w.jpg',
      'https://live.staticflickr.com/65535/54551381711_23a94aa2aa_w.jpg',
      'https://live.staticflickr.com/65535/54551381716_83fa76cd81_w.jpg',
      'https://live.staticflickr.com/65535/54551717505_2838baf0cf_w.jpg',
      'https://live.staticflickr.com/65535/54550504977_37d05858fd_w.jpg',
      'https://live.staticflickr.com/65535/54551614913_2082e810ca_w.jpg',
      'https://live.staticflickr.com/65535/54551717500_40e60a318b_w.jpg'

    ],
    h2:'ROADSHOWS',
   
    p:'#Activaciones #Roadshow #ProduccionLogistica #OnTheRoad',
    
  },
  {
    index:13,
    icon:'https://live.staticflickr.com/65535/54537859093_8ba8e285d2_w.jpg',
    descripcion:'TALLERES METRO',
    gallery:[
      'https://live.staticflickr.com/65535/54549716718_a56af49333_w.jpg',
      'https://live.staticflickr.com/65535/54548608782_ff3381e327_w.jpg',
      'https://live.staticflickr.com/65535/54548609852_60c481c7e3_w.jpg',
      'https://live.staticflickr.com/65535/54548610857_05442cb763_w.jpg',
      'https://live.staticflickr.com/65535/54549721553_9848c2625d_w.jpg',
      'https://live.staticflickr.com/65535/54549723183_992bfe62e8_w.jpg',
      'https://live.staticflickr.com/65535/54549724043_95c449d77f_w.jpg',
      'https://live.staticflickr.com/65535/54549671674_59d7157739_w.jpg',
      'https://live.staticflickr.com/65535/54549726108_519b6755fc_w.jpg',
      'https://live.staticflickr.com/65535/54549726973_457f9ba04f_w.jpg'
    ],
    h2:'TALLERES METRO',
    h3:'ACTIVACION: METRO DE MADRID',
    p:'#AniversarioMetro #TalleresInfantiles #Literatura #Quimica #Animacion',
    
  },
  {
    index:14,
    icon:'https://live.staticflickr.com/65535/54536744012_327ee8ce3e_w.jpg',
    descripcion:'ACTIVACION CAMEL',
    gallery:[
      'https://live.staticflickr.com/65535/54549617828_01fe2cb496_w.jpg',
      'https://live.staticflickr.com/65535/54549621203_3b5aecb735_w.jpg',
      'https://live.staticflickr.com/65535/54548512867_d158834447_w.jpg',
      'https://live.staticflickr.com/65535/54549569064_5543815b20_w.jpg',
      'https://live.staticflickr.com/65535/54549625063_c274edd888_w.jpg',
      'https://live.staticflickr.com/65535/54549571789_fb6025c9a3_w.jpg',
      'https://live.staticflickr.com/65535/54548517622_108df5c040_w.jpg',
      'https://live.staticflickr.com/65535/54549629158_376715aa94_w.jpg',
      'https://live.staticflickr.com/65535/54548519502_29e009ed02_w.jpg'
    ],
    h2:'ACTIVACION CAMEL',
    
    p:'#JTINederlands #Salou #ActivacionDeMarca #AnimacionPuntoDeVenta #LiveShow',
    
  },
  {
    index:15,
    icon:'https://live.staticflickr.com/65535/54537808789_3d6286827f_w.jpg',
    descripcion:'ACTIVACION SHWEPPES',
    gallery:[
      'https://live.staticflickr.com/65535/54549582213_2a4cc50cc2_w.jpg',
      'https://live.staticflickr.com/65535/54549529989_f9a454247d_w.jpg',
      'https://live.staticflickr.com/65535/54549531364_bd72675314_w.jpg',
      'https://live.staticflickr.com/65535/54549532899_6935d5cd33_w.jpg',
      'https://live.staticflickr.com/65535/54549534199_1b30eaaefe_w.jpg',
      'https://live.staticflickr.com/65535/54549694740_323cf449bf_w.jpg',
      'https://live.staticflickr.com/65535/54549358616_54db894dcd_w.jpg',
     

    ],
    h2:'ACTIVACIONES SHWEPPES',
    
    p:'#AcivacionDeMarca #RoadShow #AnimacionPuntoDeVenta #LiveShow #BodyPainting',
  },
 
]


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


function Porfolio() {
  
   const [isMobile, setIsMobile] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
     const serviciosRef = useRef(null);
     const [modalOpen, setModalOpen] = useState(false);
  const [selectedIconIdx, setSelectedIconIdx] = useState(0); // icono seleccionado
const [selectedImgIdx, setSelectedImgIdx] = useState(0);   // imagen de la galería seleccionada
 const [fade, setFade] = useState(false); 
const handleOpenModal = (iconIdx) => {
  setSelectedIconIdx(iconIdx);
  setSelectedImgIdx(0);
  setModalOpen(true);
};
const changeImg = (newIdx) => {
  setFade(false);
  setTimeout(() => {
    setSelectedImgIdx(newIdx);
    setFade(true);
  }, 50); // Pequeño retardo para reiniciar la animación
};

const prevImg = (e) => {
  e.stopPropagation();
  const gallery = icons[selectedIconIdx].gallery;
  changeImg((selectedImgIdx - 1 + gallery.length) % gallery.length);
};

const nextImg = (e) => {
  e.stopPropagation();
  const gallery = icons[selectedIconIdx].gallery;
  changeImg((selectedImgIdx + 1) % gallery.length);
};
useEffect(() => {
  if (modalOpen) setFade(true);
}, [modalOpen, selectedIconIdx]);
    useEffect(() => {
     const observerOptions = {
       root: null,
       rootMargin: '0px',
       threshold: 0.5
     };

     const observerCallback = (entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           setIsVisible(true);
         }
       });
     };

     const observer = new IntersectionObserver(observerCallback, observerOptions);
       if (serviciosRef.current) {
       observer.observe(serviciosRef.current);
     }
     return () => {
       if (serviciosRef.current) {
         observer.unobserve(serviciosRef.current);
       }
     };
   }, []);

   useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

   // Cambia la función de click para abrir el modal con el índice
  // const handleOpenModal = (idx) => {
  //   setSelectedIndex(idx);
  //   setModalOpen(true);
  // };

  // // Navegación del carrusel
  // const prevImg = (e) => {
  //   e.stopPropagation();
  //   setSelectedIndex((selectedIndex - 1 + icons.length) % icons.length);
  // };
  // const nextImg = (e) => {
  //   e.stopPropagation();
  //   setSelectedIndex((selectedIndex + 1) % icons.length);
  // };

  return (
    <>
   <div
    className="porfolio"
    style={{
      backgroundImage: isMobile
        ? "url('https://live.staticflickr.com/65535/54567322591_aaa41f1d62_w.jpg')"
        : {Foto},
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    }}
  >
    <h1 className="porfolio__h1">360 BRAND EXPERIENCES</h1>
  </div>
    <div className="porfolio__div"  ref={serviciosRef}>
       <motion.ul
          className="porfolio__container"
          variants={container}
          initial="hidden"
          animate= 'visible'
        >
          {icons.map((icon, idx) => (
  <motion.li key={icon.index} className="ite" variants={item}
    onClick={() => handleOpenModal(idx)}
    style={{ cursor: 'pointer' }}
  >
    <img className='img__item' src={icon.icon} alt={icon.descripcion} />
    <div className="descripcion__item">
       
      <h2 className='item__h2'>{icon.descripcion}</h2>
      <FaArrowUpRightFromSquare className='item__icon' />
    </div>
   
    {/* ... */}
  </motion.li>
))}
        </motion.ul>
    </div>
      {/* Modal */}
     {modalOpen && (
  <div className="modal-overlay" onClick={() => setModalOpen(false)}>
    <div className="modal" onClick={e => e.stopPropagation()}>
       <button className="modal-buttonC" onClick={() => setModalOpen(false)}> <IoClose className='modal-close' /></button>
      <button className="modal-buttonP" onClick={prevImg}>&lt;</button>
     <img
  className={`modal__image ${fade ? 'fade-in' : ''}`}
  src={icons[selectedIconIdx].gallery[selectedImgIdx]}
  alt="Ampliada"
  style={{ maxWidth: '90vw', maxHeight: '80vh' }}
/>
       <div style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
        {icons[selectedIconIdx].gallery.map((_, idx) => (
          <span
            key={idx}
            style={{
              height: '12px',
              width: '12px',
              margin: '0 4px',
              borderRadius: '50%',
              display: 'inline-block',
              background: idx === selectedImgIdx ? '#333' : '#bbb',
              border: '1px solid #888',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImgIdx(idx)}
          />
          
        ))}
                </div>
      <button className="modal-buttonN" onClick={nextImg}>&gt;</button>
      {/* Indicadores de puntos */}
       <div className="modal__info">
        <h2 className="modal__h2">{icons[selectedIconIdx].h2}</h2>
        <h3 className="modal__h3">{icons[selectedIconIdx].h3}</h3>
        <p className="modal__p">{icons[selectedIconIdx].p}</p>
     </div>
           
          </div>

         
        </div>
      )}
      <div className="show__logo" id='logos'>
     <LogoSlider2 />
     <LogoSlider />
     <LogoSlider1 /> 
     <LogoSlider3 />
    
     
     </div> 
     <div className="terminacion__porfolio">
       <div className="contacto__email"  onClick={(e) => {window.location.href ='mailto: hola@absolu.to';}}> ¡HABLEMOS! </div>
     </div>
    </>
  )
}

export default Porfolio