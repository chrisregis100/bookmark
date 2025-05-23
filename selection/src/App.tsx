// App.jsx - Structure principale
import "./App.css";
import CallToAction from "./components/CallToAction";
import { Download } from "./components/Dpwnload-version";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FrequentlyQuestions from "./components/FrequentlyQuestions";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>

      <Hero />

      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Download />
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <FrequentlyQuestions />
        </div>
      </div>

      <CallToAction />

      <Footer />
    </div>
  );
}

export default App;
