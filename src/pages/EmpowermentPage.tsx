import React from 'react';

const EmpowermentPage: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Economic Empowerment</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Join our network of verified women drivers providing safe transportation options while earning a steady income.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Become a Verified Driver</h2>
              <p className="text-gray-600 mb-6">
                Join our network of certified women drivers who provide safe transportation for women across the city. Our platform connects you with ride-sharing apps like Ola and Uber, ensuring you have a steady stream of customers and income.
              </p>
              
              <div className="space-y-4 mb-8">
                <BenefitItem 
                  title="Higher Earnings"
                  description="Women passengers often prefer female drivers, increasing your ride requests and earnings."
                />
                <BenefitItem 
                  title="Safety Network"
                  description="Connect with other female drivers for support and safety."
                />
                <BenefitItem 
                  title="Flexible Hours"
                  description="Choose when you work and maintain your own schedule."
                />
              </div>
              
              <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors inline-flex">
                Apply to Become a Driver
              </button>
            </div>
            
            <div className="bg-teal-50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-16 w-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="font-medium">Easy Application Process</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="font-medium">Verification within 48 hours</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="font-medium">Training & Resources Provided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Driver Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Priya Sharma"
              location="Delhi"
              quote="Joining Sakhi Saheli as a driver has changed my life. I earn more than my previous job and feel safer knowing I'm connected to a community of women drivers."
            />
            <TestimonialCard 
              name="Meena Gupta"
              location="Mumbai"
              quote="I was hesitant at first, but the training and support from Sakhi Saheli made the transition to becoming a driver smooth. Now I can support my family while being my own boss."
            />
            <TestimonialCard 
              name="Lakshmi Patel"
              location="Bengaluru"
              quote="The flexible hours allow me to take care of my children while still earning a good income. The safety network gives both me and my passengers peace of mind."
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Income Potential</h3>
              
              <div className="space-y-4">
                <IncomeItem 
                  title="Part-Time (4 hours/day)"
                  amount="₹15,000 - ₹20,000"
                  period="monthly"
                />
                <IncomeItem 
                  title="Full-Time (8 hours/day)"
                  amount="₹30,000 - ₹40,000"
                  period="monthly"
                />
                <IncomeItem 
                  title="Peak Hours Bonus"
                  amount="₹100 - ₹200"
                  period="per ride"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Requirements to Join</h3>
              
              <ul className="space-y-3">
                <RequirementItem text="Valid driver's license with minimum 1 year experience" />
                <RequirementItem text="Clean driving record" />
                <RequirementItem text="Own or have access to a 4-wheeler vehicle" />
                <RequirementItem text="Smartphone with data plan" />
                <RequirementItem text="Pass Sakhi Saheli safety verification" />
                <RequirementItem text="Attend a one-day training session" />
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl overflow-hidden text-white shadow-lg">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="opacity-90">
                  Join our community of 500+ women drivers today and transform your economic future.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-colors font-medium">
                  Apply Now
                </button>
                <button className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, quote }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-teal-600 font-bold">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
        
        <blockquote className="text-gray-600 italic mb-4">
          "{quote}"
        </blockquote>
        
        <div className="flex text-amber-500">
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
      </div>
    </div>
  );
};

interface IncomeItemProps {
  title: string;
  amount: string;
  period: string;
}

const IncomeItem: React.FC<IncomeItemProps> = ({ title, amount, period }) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <span className="font-medium">{title}</span>
      <div className="text-right">
        <span className="text-lg font-bold text-teal-600">{amount}</span>
        <span className="text-sm text-gray-600 block">{period}</span>
      </div>
    </div>
  );
};

interface RequirementItemProps {
  text: string;
}

const RequirementItem: React.FC<RequirementItemProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <span className="ml-3 text-gray-700">{text}</span>
    </li>
  );
};

export default EmpowermentPage;