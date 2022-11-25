import '../styles/componentes/Footer.sass'
import Logo from '/image/logo.png'
import Facebook from '/image/facebook.png'
import Twitter from '/image/twitter.png'
import Linkedin from '/image/linkedin.png'
import Dribble from '/image/dribble.png'
import Behance from '/image/behance.png'
import Google from '/image/google-plus.png'


function Footer() {
  

  return (
    <footer >
      <div className="footer__container">
        <img src={Logo} alt="Logo da Agencia M dourado" />
        <p>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online ultilizando estratégias,
            ferramentas e tecnologias personalizadas
        </p>
        <ul>
          <li>
            <a href="#">
              <img src={Facebook} alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Twitter} alt="logo Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Linkedin} alt="logo linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Dribble} alt="logo dribble" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Behance} alt="logo behance" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Google} alt="logo google plus" />
            </a>
          </li>
        </ul>
        <p className='footer__copy'>
          Copyright 2022 DS Pelizario
        </p>
      </div>
    </footer>
  )
}

export default Footer;
