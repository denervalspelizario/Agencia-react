import '../styles/componentes/Card.sass'

function Card() {
  

  return (
    <section className="card__container">
      <div className='card__cards'>
        <p className='card__text--up'>
          Junho 2012 -2016
        </p>
        <h3>Web Designer</h3>
        <p className='card__text'>
          Pied Piper StartUp
        </p>
        <p className='card__text'>
          Criação de Landing pages, sites institucionais e E-comemerces completamente personalizados e otimizados para buscadores
        </p>
      </div>
      <div className='card__cards'>
        <p className='card__text--up'>
          Agosto 2016 -2019
        </p>
        <h3>Product Designer</h3>
        <p className='card__text'>
          E Corp
        </p>
        <p className='card__text'>
          Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra, impactando-o no momento certo
        </p>
      </div>
      <div className='card__cards'>
        <p className='card__text--up'>
          Fevereiro 2019 - 2021
        </p>
        <h3>Digital Consulting</h3>
        <p className='card__text'>
          Arasaka Inc
        </p>
        <p className='card__text'>
          Consultoria em estratégias digitais para todas as etapas do cliclo do projeto, desde a definição inicial até a execução do plano de ação
        </p>
      </div>
      
        
    </section>
  )
}

export default Card;
