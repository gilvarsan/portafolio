import './App.css'
import './global.css'
import Menu from "./components/menu/Menu";
import Rutas from './Rutas';


function App() {

  return (
    <div className="App">
      <Menu />      
      <div className="container d-flex justify-content-center align-items-center">          
          <Rutas />
      </div>
    </div>
  )
}

export default App
