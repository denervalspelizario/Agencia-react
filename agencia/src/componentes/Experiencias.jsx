import '../styles/componentes/Experiencias.sass'
import Card from '../componentes/Card'

function Experiencias() {
  

  return (
    <article className="exp__container">
      <h2>Experiências de Trabalho</h2>
      <div className='exp__border'></div>
      <p className='exp__text'>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
      <Card 
        textUp="Junho 2012 - 2016"
        titulo="Web Designer"
        textDown="Pied Piper startUp"
        paragrafo="Criação de Landing, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
      
      />  
      <Card 
        textUp="Agosto 2016 - 2019"
        titulo="Product Designer"
        textDown="E Corp."
        paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra, impactando-o no momento certo"
      
      />  
      <Card 
        textUp="Fevereiro 2019 - 2021"
        titulo="Digital Consulting"
        textDown="Arasaka Inc"
        paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução do plano de ação"
      />  
    </article>
  )
}

export default Experiencias;
