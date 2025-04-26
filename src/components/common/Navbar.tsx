import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldAlert, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/safety-map", label: "Safety Map" },
    { path: "/education", label: "Education" },
    { path: "/empowerment", label: "Empowerment" },
    { path: "/shop", label: "Shop" },
    { path: "/support", label: "Support" },
    { path: "/stories", label: "Stories" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`font-bold text-xl ${isScrolled ? 'text-purple-700' : 'text-white'}`}>
              Sakhi Saheli
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? (location.pathname === link.path ? 'text-purple-700 bg-purple-50' : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50') 
                    : (location.pathname === link.path ? 'text-white bg-white/20' : 'text-white/90 hover:text-white hover:bg-white/10')
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button className={`px-4 py-2 rounded-md text-sm font-medium ${
              isScrolled 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}>
              <ShieldAlert className="h-4 w-4 inline mr-1" />
              SOS
            </button>
            
            <button className={`px-4 py-2 rounded-md text-sm font-medium ${
              isScrolled 
                ? 'border border-purple-600 text-purple-600 hover:bg-purple-50' 
                : 'border border-white text-white hover:bg-white/10'
            }`}>
              <LogIn className="h-4 w-4 inline mr-1" />
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-3 bg-white rounded-lg shadow-xl animate-fade-in-down">
            <div className="px-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'text-purple-700 bg-purple-50' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-purple-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-4 pb-2 border-t border-gray-200 flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600">
                  <ShieldAlert className="h-4 w-4 inline mr-1" />
                  SOS
                </button>
                
                <button className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50">
                  <LogIn className="h-4 w-4 inline mr-1" />
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;