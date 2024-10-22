import './App.css';
import Footer from './components/Footer';
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <FrequentlyAskedQuestion/>
      <Footer/>
    </div>
  );
}

export default App;
