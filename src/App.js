import './App.css';
import { AboutSection } from './components/About';
import { HeroSection } from './components/Hero';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    </div>
  );
}

export default App;
