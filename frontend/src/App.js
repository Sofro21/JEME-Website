//Imports
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientsSection from "./Components/Clients-Section/ClientsSection";
import EntryAnim from "./Components/EntryAnim/EntryAnim";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import Footer from "./Components/Footer/Footer";
import FAQ from "./Components/FAQ/FAQ";
import ServiceSection from "./Components/Service-Section/ServiceSection";
import CntForm from "./Components/ContactForm/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pages } from "./pages";

//Component Loading
const loadComponent = (componentName) => {
  return React.lazy(() => import(`./Pages/${componentName}`));
};

//Main App
function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={React.createElement(loadComponent(page.component))}
            />
          ))}
        </Routes>
      </React.Suspense>
      <EntryAnim />
      <SuccessStory />
      <ServiceSection />
      <ClientsSection />
      <FAQ />
      <Footer />
      <CntForm />
    </Router>
  );
}

// <Route exact path="/" element={<Home />} />
// could be added

export default App;
