import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import ServiceSection from './Components/Service-Section/ServiceSection';
import Board_of_Directors from './Components/Board_of_Directors/Board_of_Directors';
import ShowBoardofDirectors from './Components/Board_of_Directors/Board_of_Directors';

function App() {
  return (
    <>
      <Navbar/>
      <ShowBoardofDirectors/>
      <ServiceSection/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
