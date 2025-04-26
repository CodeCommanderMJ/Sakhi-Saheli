import React from 'react';
import { BookOpen, Check, Award, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationPreview: React.FC = () => {
  return (
    <div className="bg-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Knowledge is power. Explore our educational resources designed to help you stay safe and informed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EducationCard 
            icon={<BookOpen className="h-8 w-8 text-purple-600" />}
            title="Digital Safety"
            description="Learn how to protect yourself online and maintain privacy."
            color="bg-purple-100"
            textColor="text-purple-700"
          />
          
          <EducationCard 
            icon={<Check className="h-8 w-8 text-teal-600" />}
            title="Safety Quizzes"
            description="Test your knowledge and earn badges as you learn."
            color="bg-teal-100"
            textColor="text-teal-700"
          />
          
          <EducationCard 
            icon={<Award className="h-8 w-8 text-amber-600" />}
            title="Workplace Rights"
            description="Know your rights and how to address harassment issues."
            color="bg-amber-100"
            textColor="text-amber-700"
          />
          
          <EducationCard 
            icon={<Video className="h-8 w-8 text-rose-600" />}
            title="Live Webinars"
            description="Join expert-led sessions on various safety topics."
            color="bg-rose-100"
            textColor="text-rose-700"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/education" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
            Explore Educational Hub
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface EducationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  textColor: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ icon, title, description, color, textColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <div className="mt-4">
          <button className={`${textColor} font-medium flex items-center`}>
            Learn more
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPreview;