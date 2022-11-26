import '../styles/componentes/Card.sass'

function Card( props) {  
  return (
    <section className="card__container">
      <div className='card__cards'>
        <p className='card__text--up'>
          {props.textUp}
        </p>
        <h3>{props.titulo}</h3>
        <p className='card__text'>
          {props.textDown}
        </p>
        <p className='card__text'>
          {props.paragrafo}
        </p>
      </div>
    </section>
  )
}

export default Card;
