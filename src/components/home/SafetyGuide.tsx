import React, { useState, useEffect } from 'react';
import { Bell, MapPin, Shield } from 'lucide-react';

const SafetyGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: <Bell className="h-12 w-12 text-purple-600" />,
      title: "Send Panic Alerts",
      description: "Instantly notify your trusted contacts with your real-time location data with just a shake of your phone.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <MapPin className="h-12 w-12 text-teal-600" />,
      title: "Live Location Tracking",
      description: "Share your journey in real-time with trusted contacts who can monitor your travel for added security.",
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: <Shield className="h-12 w-12 text-rose-600" />,
      title: "Self-Defense Resources",
      description: "Access instructional videos and tips on basic self-defense techniques to help you stay safe.",
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your 3-Step Safety Guide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sakhi Saheli provides you with essential tools for your protection, accessible in just three simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Progress Bar */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1 bg-gray-200 rounded-full">
            <div 
              className={`h-full bg-gradient-to-r ${steps[activeStep].color} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`${steps[index].bgColor} rounded-xl p-6 transition-all duration-500 ${
                  index === activeStep 
                    ? 'transform scale-105 shadow-xl' 
                    : 'opacity-80'
                }`}
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                
                <div className="mt-6 flex justify-center">
                  <span className={`h-2 w-2 rounded-full ${index <= activeStep ? `bg-gradient-to-r ${step.color}` : 'bg-gray-300'}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuide;