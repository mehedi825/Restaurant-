import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-white">
      <Home />
      <About />
      <Menu />
      <Reservation />
      <Contact />
    </div>
  );
}

export default App;