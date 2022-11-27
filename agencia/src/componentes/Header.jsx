import '../styles/componentes/Header.sass';
import Logo from '/image/logo.png';


function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <img src={Logo} alt="logo da agencia" className='header__logo'/>
        <nav>
          <ul>
            <li><a href="#experiencias">Sobre</a></li>
            <li><a href="#experiencias">Projetos</a></li>
            <li><a href="#experiencias">Contato</a></li>
          </ul>
        </nav>
      </div>       
    </header>
  )
};

export default Header;
