import { NavLink } from "react-router-dom";
//import datosHV from "../../data/datosHV";
import datosHV from "../../data/datosHV.json";
import './Menu.css';

function Menu() {
  const menuDynamic = datosHV.map( dato => (
    <NavLink to={dato.path} key={dato.path} className="nav-link text-white" >{dato.title}</NavLink>
))

  return (
    <nav id="menu" className="nav nav-underline justify-content-center fixed-top">
      <NavLink to={'/'} className="nav-link text-white" aria-current="page">Inicio</NavLink>
      {menuDynamic}
    </nav>
  )
}

export default Menu;