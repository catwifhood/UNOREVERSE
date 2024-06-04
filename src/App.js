import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Gallery from './components/Gallery';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <div className="text-white">
      <Header />
      <div className='bg-[#2B464F]'>
        <Hero />
        <Slider />
        <Gallery />
        <Slider />
        <HowToBuy />
        <Tokenomics />
      </div>
    </div>
  );
}

export default App;
