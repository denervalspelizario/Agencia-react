import '../styles/componentes/Topo.sass';
import Logo from '/image/logo.png';
import Moon from '/image/moon.png';
import Sun from '/image/sun.png';


function Topo() {
  

  return (
    <header className="header">
      <div className='header__container'>
        <img src={Logo} alt="logo da agencia" />
      </div>
      <nav>
        <ul>
          <li><a href="#experiencias">Sobre</a></li>
          <li><a href="#experiencias">Projetos</a></li>
          <li><a href="#experiencias">Contato</a></li>
        </ul>
      </nav>
      <button>
        <img src={Moon} alt="" />
      </button>
        
    </header>
  )
}

export default Topo
