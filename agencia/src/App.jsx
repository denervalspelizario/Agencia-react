
import './styles/App.sass';
import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import Experiencias from './componentes/Experiencias';
import Card from './componentes/Card';
import Footer from './componentes/Footer';

function App() {
  

  return (
    <section className="App">
      <Topo />
      <Banner />
      <Experiencias />
      <Card />
      <Footer />
    </section>
  )
}

export default App
