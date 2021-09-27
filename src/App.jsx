import './app.scss';
import {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/menu/Menu';
import Intro from './components/intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';


function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro />
      <Portfolio />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
