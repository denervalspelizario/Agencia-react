
import './styles/App.sass';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Experiencias from './componentes/Experiencias';
import Footer from './componentes/Footer';
import Theme from './componentes/Theme';

function App() {
  

  return (
    <section className="App">
      <Theme />
      <Header />
      <Banner />
      <Experiencias />
      <Footer />
    </section>
  )
}

export default App
