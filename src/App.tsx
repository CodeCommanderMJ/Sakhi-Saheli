import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SafetyMapPage from './pages/SafetyMapPage';
import EducationHubPage from './pages/EducationHubPage';
import EmpowermentPage from './pages/EmpowermentPage';
import ShopPage from './pages/ShopPage';
import SupportPage from './pages/SupportPage';
import StoriesPage from './pages/StoriesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/safety-map" element={<SafetyMapPage />} />
            <Route path="/education" element={<EducationHubPage />} />
            <Route path="/empowerment" element={<EmpowermentPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/stories" element={<StoriesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;