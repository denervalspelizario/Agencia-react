import '../styles/componentes/Banner.sass';
import BannerImage from '/image/banner.png';
const Banner = () => {
  

  return (
    <section className="banner__container">
      <img src={BannerImage} alt="Colaborador da Agencia"  title='Agencia de brading e design'/>
        
    </section>
  )
}

export default Banner;
