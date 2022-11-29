import '../styles/componentes/Card.sass'

function Card( props) {  
  return (
    <section className="card">
      <div className='card__inside'>
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
