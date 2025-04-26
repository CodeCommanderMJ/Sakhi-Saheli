import React from 'react';
import { Map, LocateFixed, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapPreview: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Safety Map</h2>
            <p className="text-lg text-gray-600 mb-6">
              Visualize safety information around you with our interactive map showing police stations, safe zones, and real-time community alerts.
            </p>
            
            <div className="space-y-4">
              <FeatureItem 
                icon={<LocateFixed className="h-5 w-5 text-purple-600" />}
                title="Nearby Safety Resources"
                description="Find police stations, hospitals, and women's support centers in your vicinity."
              />
              
              <FeatureItem 
                icon={<Shield className="h-5 w-5 text-teal-600" />}
                title="Safe Zone Indicators"
                description="Areas verified as safe with good lighting and regular patrolling."
              />
              
              <FeatureItem 
                icon={<Map className="h-5 w-5 text-red-600" />}
                title="Real-time Risk Alerts"
                description="Community-reported alerts about potentially unsafe areas or incidents."
              />
            </div>
            
            <div className="mt-8">
              <Link to="/safety-map" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors">
                Explore Safety Map
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg aspect-square">
              {/* Placeholder for map - in a real implementation, you would integrate a map API here */}
              <div className="w-full h-full bg-gradient-to-br from-purple-50 to-indigo-100 p-4 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-700 font-medium">Interactive Safety Map</p>
                  <p className="text-sm text-purple-600 mt-2">Displays nearby safety resources and community alerts</p>
                </div>
              </div>
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
        <div className="p-2 bg-purple-50 rounded-lg">{icon}</div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MapPreview;