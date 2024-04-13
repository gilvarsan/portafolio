import Card from '../card/Card.jsx'
//import datosHV from '../../data/datosHV.js'
import datosHV from '../../data/datosHV.json'

function Inicio() {
    const cardDynamic = datosHV.map( dato => (
        <Card key={dato.path} data={dato} />
    ))

    return (
        <> 
            {cardDynamic}
        </>
    )
}

export default Inicio