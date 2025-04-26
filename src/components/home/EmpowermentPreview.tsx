import React from 'react';
import { Car, Users, MapPin, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmpowermentPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-700 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4">Economic Empowerment</h2>
              <p className="text-lg opacity-90 mb-8">
                Join our network of verified women drivers providing safe transportation options while earning a steady income.
              </p>
              
              <div className="space-y-6 mb-8">
                <FeatureItem 
                  icon={<BadgeCheck />}
                  title="Verified Driver Program"
                  description="Become a certified Sakhi Saheli driver for ride-sharing platforms like Ola and Uber."
                />
                
                <FeatureItem 
                  icon={<Users />}
                  title="Community Support"
                  description="Connect with a network of women drivers sharing experiences and safety tips."
                />
                
                <FeatureItem 
                  icon={<MapPin />}
                  title="Live Driver Tracking"
                  description="See other active female drivers in your area for added security and community."
                />
              </div>
              
              <Link to="/empowerment" className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-medium rounded-lg shadow-md hover:bg-teal-50 transition-colors">
                Join As Driver
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="aspect-video relative">
                  {/* This would be an actual image in production */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/40 to-teal-600/40 flex items-center justify-center">
                    <Car className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white text-teal-700 rounded-full px-5 py-3 font-bold shadow-lg transform rotate-3">
                <span className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                  </span>
                  42 Active Drivers Nearby
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <StatsCard number="500+" label="Verified Drivers" />
              <StatsCard number="2000+" label="Safe Rides" />
              <StatsCard number="₹15K" label="Avg. Monthly Income" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="p-2 bg-white/20 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 opacity-80 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, label }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
      <p className="text-2xl font-bold">{number}</p>
      <p className="text-sm opacity-80">{label}</p>
    </div>
  );
};

export default EmpowermentPreview;