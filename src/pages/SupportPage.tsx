import React from 'react';
import { MessageCircle, PhoneCall, Clock, User, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Support & Counseling</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Connect with trained counselors and support services to address your concerns and needs.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold">Chat Support</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Connect with trained counselors through our secure chat platform. All conversations are confidential and handled by professionals specialized in women's issues.
              </p>
              
              <div className="space-y-4 mb-6">
                <SupportFeature 
                  title="24/7 Availability"
                  description="Our counselors are available round the clock to assist you."
                />
                <SupportFeature 
                  title="Confidential Conversations"
                  description="Your privacy is our priority. All conversations are secure and confidential."
                />
                <SupportFeature 
                  title="Specialized Counselors"
                  description="Connect with professionals experienced in trauma, harassment, and women's safety."
                />
              </div>
              
              <button className="w-full py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition-colors flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Chat Support
              </button>
              
              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>Average response time: under 2 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <PhoneCall className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Helpline Services</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Our dedicated helplines provide immediate assistance for various situations, from emergencies to mental health support.
              </p>
              
              <div className="space-y-4 mb-6">
                <HelplineItem 
                  name="Emergency Helpline"
                  number="1800-XXX-XXX1"
                  description="For immediate danger or emergency situations"
                  color="bg-red-50 text-red-800"
                />
                <HelplineItem 
                  name="Mental Health Support"
                  number="1800-XXX-XXX2"
                  description="For anxiety, depression, or emotional support"
                  color="bg-purple-50 text-purple-800"
                />
                <HelplineItem 
                  name="Legal Assistance"
                  number="1800-XXX-XXX3"
                  description="For legal advice and guidance on women's rights"
                  color="bg-blue-50 text-blue-800"
                />
                <HelplineItem 
                  name="Workplace Harassment"
                  number="1800-XXX-XXX4"
                  description="For reporting and handling workplace incidents"
                  color="bg-amber-50 text-amber-800"
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  All helplines are toll-free and available 24/7 with trained professionals ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Meet Our Counselors</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CounselorCard 
              name="Dr. Priya Sharma"
              specialization="Trauma & PTSD"
              experience="15+ years"
              languages={["English", "Hindi", "Bengali"]}
            />
            <CounselorCard 
              name="Anita Desai"
              specialization="Domestic Violence"
              experience="10+ years"
              languages={["English", "Hindi", "Marathi"]}
            />
            <CounselorCard 
              name="Dr. Meera Kapoor"
              specialization="Workplace Harassment"
              experience="12+ years"
              languages={["English", "Hindi", "Tamil"]}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="divide-y">
              <FAQItem 
                question="Is the counseling service free?"
                answer="Yes, our basic counseling services are completely free. We also offer specialized sessions with our expert counselors at nominal charges."
              />
              <FAQItem 
                question="How is my privacy protected?"
                answer="All conversations are encrypted and confidential. Our counselors follow strict privacy guidelines and we never share your information with third parties unless required by law."
              />
              <FAQItem 
                question="Can I request a specific counselor?"
                answer="Yes, you can request a specific counselor based on their specialization or language preferences, subject to their availability."
              />
              <FAQItem 
                question="How long do counseling sessions last?"
                answer="Initial chat sessions typically last 30-45 minutes, while follow-up sessions may be scheduled for longer durations based on your needs."
              />
              <FAQItem 
                question="Do you offer in-person counseling?"
                answer="We primarily offer online counseling, but can refer you to partner organizations for in-person sessions in major cities across India."
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="bg-white p-4 rounded-full shadow-md">
                <User className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Need Immediate Support?</h2>
              <p className="text-gray-700 mb-4">
                Our counselors are available 24/7 to provide the support you need. Don't hesitate to reach out - we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start Chat Now
                </button>
                <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call Helpline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SupportFeatureProps {
  title: string;
  description: string;
}

const SupportFeature: React.FC<SupportFeatureProps> = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle className="h-5 w-5 text-green-500" />
      </div>
      <div className="ml-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface HelplineItemProps {
  name: string;
  number: string;
  description: string;
  color: string;
}

const HelplineItem: React.FC<HelplineItemProps> = ({ name, number, description, color }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">{name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${color}`}>
          24/7
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="font-mono font-bold text-lg">{number}</span>
        <button className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors">
          <PhoneCall className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

interface CounselorCardProps {
  name: string;
  specialization: string;
  experience: string;
  languages: string[];
}

const CounselorCard: React.FC<CounselorCardProps> = ({ name, specialization, experience, languages }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-purple-600 font-bold">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-purple-600">{specialization}</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm">
            <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="text-gray-700">{experience} experience</span>
          </div>
          <div className="flex items-center text-sm">
            <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
            </svg>
            <span className="text-gray-700">Languages: {languages.join(", ")}</span>
          </div>
        </div>
        
        <div className="flex text-amber-500 mb-4">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        
        <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Schedule Session
        </button>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <svg 
          className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className={`mt-2 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default SupportPage;