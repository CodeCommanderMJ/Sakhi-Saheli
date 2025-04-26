import React from 'react';
import { BookOpen, Video, Award, CheckCircle, Laptop } from 'lucide-react';

const EducationHubPage: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Educational Hub</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Knowledge is power. Explore our educational resources designed to help you stay safe and informed.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <EducationCard 
            icon={<BookOpen className="h-8 w-8 text-purple-600" />}
            title="Digital Safety"
            description="Learn how to protect yourself online and maintain privacy."
            lessons={8}
            difficulty="Beginner"
            color="bg-purple-50"
          />
          <EducationCard 
            icon={<Laptop className="h-8 w-8 text-teal-600" />}
            title="Personal Security"
            description="Essential knowledge for staying safe in various situations."
            lessons={12}
            difficulty="Intermediate"
            color="bg-teal-50"
          />
          <EducationCard 
            icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
            title="Legal Rights"
            description="Understanding the laws that protect women in India."
            lessons={6}
            difficulty="All Levels"
            color="bg-blue-50"
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Webinars</h2>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WebinarCard 
              title="Staying Safe Online: Social Media Privacy"
              instructor="Priya Sharma"
              date="June 15, 2025"
              duration="60 min"
              image="webinar1.jpg"
            />
            <WebinarCard 
              title="Self-Defense Basics for Women"
              instructor="Ritu Verma"
              date="June 20, 2025"
              duration="90 min"
              image="webinar2.jpg"
            />
            <WebinarCard 
              title="Workplace Harassment: Know Your Rights"
              instructor="Advocate Kavita Malhotra"
              date="June 25, 2025"
              duration="75 min"
              image="webinar3.jpg"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Safety Quizzes</h2>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuizCard 
              title="Digital Safety Assessment"
              questions={10}
              timeRequired="5 min"
              completions={1245}
              color="bg-gradient-to-r from-purple-500 to-indigo-500"
            />
            <QuizCard 
              title="Public Transportation Safety"
              questions={8}
              timeRequired="4 min"
              completions={876}
              color="bg-gradient-to-r from-teal-500 to-green-500"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Achievement Badges</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <BadgeItem 
                  icon={<Award className="h-8 w-8 text-amber-500" />}
                  title="Safety Champion"
                  description="Completed all beginner courses"
                  unlocked={true}
                />
                <BadgeItem 
                  icon={<BookOpen className="h-8 w-8 text-purple-500" />}
                  title="Digital Defender"
                  description="Aced the Digital Safety quiz"
                  unlocked={true}
                />
                <BadgeItem 
                  icon={<Video className="h-8 w-8 text-blue-500" />}
                  title="Webinar Enthusiast"
                  description="Attended 5 webinars"
                  unlocked={false}
                />
                <BadgeItem 
                  icon={<CheckCircle className="h-8 w-8 text-teal-500" />}
                  title="Legal Expert"
                  description="Completed the Legal Rights course"
                  unlocked={false}
                />
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  View All Badges
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <Video className="h-12 w-12 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Join Our Next Live Session</h2>
              <p className="text-gray-700 mb-4">
                "Navigating Public Spaces Safely: Tips and Strategies" with safety expert Aarti Desai.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-5 w-5 mr-1 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  June 30, 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-5 w-5 mr-1 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  7:00 PM IST
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface EducationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  lessons: number;
  difficulty: string;
  color: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ icon, title, description, lessons, difficulty, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="h-5 w-5 mr-1 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            {lessons} Lessons
          </div>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {difficulty}
          </span>
        </div>
        
        <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Start Learning
        </button>
      </div>
    </div>
  );
};

interface WebinarCardProps {
  title: string;
  instructor: string;
  date: string;
  duration: string;
  image: string;
}

const WebinarCard: React.FC<WebinarCardProps> = ({ title, instructor, date, duration, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-video bg-gray-200 relative">
        {/* This would be an actual image in production */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-600/20 flex items-center justify-center">
          <Video className="h-12 w-12 text-white/80" />
        </div>
        <div className="absolute bottom-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">With {instructor}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{date}</span>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

interface QuizCardProps {
  title: string;
  questions: number;
  timeRequired: string;
  completions: number;
  color: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ title, questions, timeRequired, completions, color }) => {
  return (
    <div className={`rounded-xl shadow-md overflow-hidden ${color} text-white`}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-sm">
            <svg className="h-5 w-5 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {questions} Questions
          </div>
          <div className="flex items-center text-sm">
            <svg className="h-5 w-5 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {timeRequired}
          </div>
        </div>
        
        <p className="text-sm opacity-80 mb-6">
          {completions} women have completed this quiz
        </p>
        
        <button className="w-full py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Take Quiz
        </button>
      </div>
    </div>
  );
};

interface BadgeItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  unlocked: boolean;
}

const BadgeItem: React.FC<BadgeItemProps> = ({ icon, title, description, unlocked }) => {
  return (
    <div className={`text-center ${unlocked ? 'opacity-100' : 'opacity-50'}`}>
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 ${
        unlocked ? 'bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-300' : 'bg-gray-100 border-2 border-gray-200'
      }`}>
        {icon}
      </div>
      <h3 className="font-bold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
      {!unlocked && (
        <span className="text-xs text-gray-500 mt-1 inline-block">Locked</span>
      )}
    </div>
  );
};

export default EducationHubPage;