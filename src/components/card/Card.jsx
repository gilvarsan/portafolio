import './Card.css'

function Card(props) {
  const { title, description, path } = props.data;

  return (
    <div key={title} className='Card'>
      <h2>{title}</h2>
        <p>{description}</p>
    </div>    
  )
}

export default Card