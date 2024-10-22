import './App.css';
import Footer from './components/Footer';
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <KeyFeatures/>
      <FrequentlyAskedQuestion/>
      <Footer/>
    </div>
  );
}

export default App;
