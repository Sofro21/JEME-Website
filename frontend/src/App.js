import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import ServiceSection from './Components/Service-Section/ServiceSection';

function App() {
  return (
    <>
      <Navbar/>
      <ServiceSection/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
