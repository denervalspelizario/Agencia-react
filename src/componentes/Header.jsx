import '../styles/componentes/Header.sass';
import Moon from '/image/moon.png';
import Sun from '/image/sun.png';
import Logo from '/image/logo.png';


function Header(props) {
  return (
    <header className={props.darkMode ? 'header__dark__mode' : 'header__light__mode'}>
      <div  className='button__container'>
        <button onClick={props.alterTheme}  type='submit' className={props.darkMode ? 'dark__mode' : 'light__mode' }>
          <img src={props.darkMode ? Sun : Moon} alt="" className='image__button'/>
        </button>
      </div>
      <div id='header__container'  >
        <img src={Logo} alt="logo da agencia" className='header__logo'/>
        <nav>
          <ul>
            <li><a href="#experiencias" className={props.darkMode ? 'dark__mode' : 'light__mode'}>Sobre</a></li>
            <li><a href="#experiencias" className={props.darkMode ? 'dark__mode' : 'light__mode'}>Projetos</a></li>
            <li><a href="#experiencias" className={props.darkMode ? 'dark__mode' : 'light__mode'}>Contato</a></li>
          </ul>
        </nav> 
      </div>
    </header>
  )
};

export default Header;
