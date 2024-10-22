import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import ChoosePlan from "./components/ChoosePlan";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      i18n.changeLanguage("en");
      localStorage.setItem("selectedLanguage", "en");
    } else if (path.startsWith("/de")) {
      i18n.changeLanguage("de");
      localStorage.setItem("selectedLanguage", "de");
    }
  }, [i18n]);

  return (
    <div>
      <Header />
      <Hero />
      <KeyFeatures />
      <Testimonials />
      <ChoosePlan />
      <WhyChoose />
      <FrequentlyAskedQuestion />
      <Footer />
    </div>
  );
}

export default App;
