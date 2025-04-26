import React from 'react';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';

const EmergencyHelp: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Immediate Help When You Need It</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EmergencyCard 
            icon={<ShieldCheck className="h-12 w-12 text-purple-600" />}
            title="Panic Alert"
            description="Send instant SOS alerts to trusted contacts with your location data with a single tap."
            action="Activate"
            color="bg-purple-50 hover:bg-purple-100"
            textColor="text-purple-700"
          />
          
          <EmergencyCard 
            icon={<Phone className="h-12 w-12 text-teal-600" />}
            title="Emergency Call"
            description="Directly connect to women's helpline or local police with location sharing."
            action="Call Now"
            color="bg-teal-50 hover:bg-teal-100"
            textColor="text-teal-700"
          />
          
          <EmergencyCard 
            icon={<MapPin className="h-12 w-12 text-coral-600" />}
            title="Safe Locations"
            description="Find nearby safe zones, police stations, and women's shelters."
            action="Find Nearby"
            color="bg-red-50 hover:bg-red-100"
            textColor="text-red-700"
          />
        </div>
      </div>
    </div>
  );
};

interface EmergencyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  color: string;
  textColor: string;
}

const EmergencyCard: React.FC<EmergencyCardProps> = ({ icon, title, description, action, color, textColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className={`w-full py-3 rounded-lg font-medium ${color} ${textColor} transition-all duration-300`}>
          {action}
        </button>
      </div>
    </div>
  );
};

export default EmergencyHelp;