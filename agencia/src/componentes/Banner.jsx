import '../styles/componentes/Banner.sass';
import BannerImage from '/image/banner.png';
const Banner = () => {
  

  return (
    <section className="banner__container">
      <img src={BannerImage} alt="Colaborador da Agencia"  title='Agencia de brading e design'/>
      <div className='banner__text'>
        <p>brading / ui / ux tecnologia</p>
        <h1>Agência de Branding</h1>
        <h1><span>e design digital</span></h1>
      </div>
    </section>
  )
}

export default Banner;
