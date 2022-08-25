import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "../components/home/Home"
import ModaFeminina from "../components/moda-feminina/ModaFeminina"
import ModaInfantil from "../components/moda-infantil/ModaInfantil"
import ModaMasculina from "../components/moda-masculina/ModaMasculina"
import Sobre from "../components/sobre/Sobre"

export default function MainRoutes() {
    return (
      <>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/modamasculina" element={<ModaMasculina/>} />
         <Route path="/modafeminina" element={<ModaFeminina/>} />
         <Route path="/modainfantil" element={<ModaInfantil/>} />
         <Route path="/sobre" element={<Sobre/>} />
      </Routes>
      </>
    )
  }
  