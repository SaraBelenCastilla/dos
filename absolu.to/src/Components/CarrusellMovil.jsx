import React from 'react'
import Ero from '../div/Seccion0'
import Cero from '../div/Section1'
import Uno from '../div/Section11'
import Dos from '../div/Section2'
import DosDos from '../div/Section22'

 const imgs =[
      {
        index: 1 , page : Ero
      },
        {
          index: 2 , page : Cero
        },
        {
          index: 3 , page: Uno
        },
        {
          index: 4 , page: Dos
        },
        {
          index: 5 , page: DosDos
        },
       
      ]

function CarrusellMovil() {
  return (
    <>
    <Ero />
    <Cero />
    <Uno />
    <Dos />
    <DosDos />
    </>
   
  )
}

export default CarrusellMovil