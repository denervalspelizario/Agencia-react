
import './styles/App.sass';
import { useState } from 'react';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Experiencias from './componentes/Experiencias';
import Footer from './componentes/Footer';

function App() {
  const [ darkMode, setDarkmode ] = useState(false);

    const alterTheme = () => {
        setDarkmode(!darkMode)
    }

  return (
    <section className="App"> 
      <Header  alterTheme={alterTheme} darkMode={darkMode} />
      <Banner darkMode={darkMode}/>
      <Experiencias darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>   
    </section>
  )
}

export default App
