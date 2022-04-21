import './App.css';
import AboutUs from './components/AboutUs';
import Explore from './components/Explore';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Home/>
      <Explore/>
      <AboutUs/>
    </div>
  );
}

export default App;
