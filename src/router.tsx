import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Construction from './pages/services/construction';
import EngineeringResearch from './pages/services/engineeringResearch';
import Supply from './pages/services/supply';
import Loans from './pages/services/loans';
import ServiceDetail from './pages/ServiceDetail';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/engineering" element={<EngineeringResearch/>} />
        <Route path="/supply" element={<Supply />} />
        <Route path="/loans" element={<Loans/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
