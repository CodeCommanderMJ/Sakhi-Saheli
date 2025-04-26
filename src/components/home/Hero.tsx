import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-full h-full bg-black"></div>
        {/* In a real implementation, you would use a video element here */}
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 py-16 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="block">Sakhi Saheli</span>
          <span className="text-2xl md:text-3xl font-medium block mt-2 text-purple-200">Your Safety Companion</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-6 mb-12">
          Empowering women with urgent protection, education, and community support for a safer tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 transform hover:scale-105 animate-pulse">
            <ShieldAlert className="mr-2 h-6 w-6" />
            <span>EMERGENCY SOS</span>
          </button>
          
          <Link to="/safety-map" className="group px-8 py-4 bg-white hover:bg-purple-100 rounded-full flex items-center justify-center text-purple-900 font-bold transition-all duration-300">
            <span>Explore Safety Features</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;