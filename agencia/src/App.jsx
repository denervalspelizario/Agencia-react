
import './styles/App.sass';
import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import Experiencias from './componentes/Experiencias';
import Footer from './componentes/Footer';

function App() {
  

  return (
    <section className="App">
      <Topo />
      <Banner />
      <Experiencias />
      <Footer />
    </section>
  )
}

export default App
