import '../styles/componentes/Banner.sass';
import BannerImage from '/image/banner.png';
const Banner = (props) => {
  

  return (
    <section id="banner__container" className={props.darkMode ? 'header__dark__mode' : 'header__light__mode'}>
      <img src={BannerImage} alt="Colaborador da Agencia"  title='Agencia de brading e design'/>
      <div className='banner__text'>
        <p>brading / ui / ux tecnologia</p>
        <h1><span>Agência de Branding</span></h1>
        <h1>e design digital</h1>
      </div>
    </section>
  )
}

export default Banner;
