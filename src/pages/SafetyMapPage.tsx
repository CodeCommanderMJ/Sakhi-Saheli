import React from 'react';
import { MapPin, Shield, AlertTriangle, Badge } from 'lucide-react';

const SafetyMapPage: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Interactive Safety Map</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Visualize safety information around you with our interactive map showing police stations, safe zones, and real-time community alerts.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-4 border-b flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold">Safety Map</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Live Updates</span>
            </div>
            
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                My Location
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Report Incident
              </button>
            </div>
          </div>
          
          <div className="h-[70vh] bg-gray-100">
            {/* Placeholder for the map - in a real implementation, this would be an actual map */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Interactive Safety Map</p>
                <p className="text-sm text-gray-600 mt-2">Map would be integrated here</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MapFeatureCard 
            icon={<MapPin className="h-5 w-5 text-purple-600" />}
            title="Police Stations"
            count={18}
            color="bg-purple-50"
          />
          <MapFeatureCard 
            icon={<Shield className="h-5 w-5 text-teal-600" />}
            title="Safe Zones"
            count={24}
            color="bg-teal-50"
          />
          <MapFeatureCard 
            icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
            title="Alert Areas"
            count={7}
            color="bg-amber-50"
          />
          <MapFeatureCard 
            icon={<Badge className="h-5 w-5 text-blue-600" />}
            title="Female Guards"
            count={12}
            color="bg-blue-50"
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Community Alerts</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="space-y-4">
                <AlertItem 
                  type="Medium Risk"
                  location="Near Connaught Place"
                  time="2 hours ago"
                  description="Poor street lighting on the east side of the market."
                  color="bg-amber-100 text-amber-800"
                />
                <AlertItem 
                  type="Low Risk"
                  location="MG Road, South Delhi"
                  time="Yesterday, 9:30 PM"
                  description="Suspicious activity reported near the Metro Station."
                  color="bg-blue-100 text-blue-800"
                />
                <AlertItem 
                  type="High Risk"
                  location="Kamla Nagar Market"
                  time="3 days ago"
                  description="Multiple incidents of pickpocketing reported in crowded areas."
                  color="bg-red-100 text-red-800"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">How to Use the Safety Map</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-purple-700">1</span>
                </div>
                <h3 className="font-bold">Share Your Location</h3>
              </div>
              <p className="text-gray-600 text-sm">Enable location services to see safety information around your current position.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-purple-700">2</span>
                </div>
                <h3 className="font-bold">Check Safe Routes</h3>
              </div>
              <p className="text-gray-600 text-sm">Plan your journey using well-lit routes and areas with higher safety scores.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <span className="font-bold text-purple-700">3</span>
                </div>
                <h3 className="font-bold">Report Incidents</h3>
              </div>
              <p className="text-gray-600 text-sm">Help the community by reporting incidents or unsafe areas you encounter.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MapFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  color: string;
}

const MapFeatureCard: React.FC<MapFeatureCardProps> = ({ icon, title, count, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 flex items-center">
        <div className={`p-3 rounded-lg ${color} mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xl font-bold">{count}</p>
        </div>
      </div>
    </div>
  );
};

interface AlertItemProps {
  type: string;
  location: string;
  time: string;
  description: string;
  color: string;
}

const AlertItem: React.FC<AlertItemProps> = ({ type, location, time, description, color }) => {
  return (
    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="flex items-start">
        <span className={`text-xs px-2 py-1 rounded-full ${color} mr-3 whitespace-nowrap mt-1`}>
          {type}
        </span>
        <div>
          <div className="flex items-center">
            <h3 className="font-medium">{location}</h3>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SafetyMapPage;