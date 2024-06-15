import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FAQ from "./Components/FAQ/FAQ";
import ServiceSection from "./Components/Service-Section/ServiceSection";
import CntForm from "./Components/ContactForm/ContactForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <ServiceSection />
      <FAQ />
      <Footer />
      <CntForm />
    </Router>
  );
}

// <Route exact path="/" element={<Home />} />
// could be added

export default App;
