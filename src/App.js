import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <KeyFeatures />
      <Testimonials />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default App;
