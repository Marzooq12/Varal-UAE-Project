import "./App.css";
import Header from "./components/Header/Header";
import Section1 from './components/main/mainContent';
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/pricing";
import About from "./components/About Us/About";
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="md:container mx-auto ">

      <Header />

      <Section1 />
      <Services />
      <Pricing />
      <About />
      <Footer />
    </div>
  );
}

export default App;
