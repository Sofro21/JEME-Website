import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FAQ from "./Components/FAQ/FAQ";
import ServiceSection from "./Components/Service-Section/ServiceSection";
import CntForm from "./Components/ContactForm/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { pages } from "./pages";

const loadComponent = (componentName) => {
  return React.lazy(() => import(`./pages/${componentName}`));
};

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
