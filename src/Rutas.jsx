import { Routes, Route } from 'react-router-dom'
import Card from './components/card/Card.jsx'
import Inicio from './components/inicio/Inicio.jsx';
//import datosHV from './data/datosHV.js'
import datosHV from './data/datosHV.json'

const routeIniciar = [<Route key="/" path='/' element={<Inicio />} />]

const routeDynamic = datosHV.map( dato => (  
  <Route key={dato.path} path={dato.path} element={<Card data={dato} />} />
))

const routes = [...routeIniciar, ...routeDynamic]

function Rutas() {
  return (
    <Routes>
      {routes}
    </Routes>
  )
}

export default Rutas