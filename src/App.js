import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default App;
