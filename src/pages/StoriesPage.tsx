import React from 'react';
import { Play, Heart, Share2, MessageCircle, ChevronRight } from 'lucide-react';

const StoriesPage: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Real stories of strength, resilience and survival from women across India.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Story */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-video bg-purple-900 relative">
                {/* This would be an actual video in production */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Play className="h-10 w-10 text-white" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Story
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-3">From Victim to Advocate: Neha's Journey</h2>
              <p className="text-gray-600 mb-4">
                After surviving a traumatic incident in college, Neha Singh became an advocate for women's safety, helping over 200 women find justice and healing.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">N</span>
                </div>
                <div>
                  <h3 className="font-medium">Neha Singh</h3>
                  <p className="text-sm text-gray-500">Delhi, India</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <Quote text="The resources from Sakhi Saheli helped me not just recover, but transform my experience into a mission to help others." />
                <Quote text="Together, we can change the culture of silence around women's safety issues." />
              </div>
              
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Full Story
                </button>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Story Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Browse by Category</h2>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard 
              title="Safety Success"
              count={24}
              color="bg-gradient-to-br from-purple-500 to-indigo-600"
            />
            <CategoryCard 
              title="Recovery Stories"
              count={18}
              color="bg-gradient-to-br from-teal-500 to-green-600"
            />
            <CategoryCard 
              title="Community Impact"
              count={12}
              color="bg-gradient-to-br from-amber-500 to-orange-600"
            />
            <CategoryCard 
              title="Empowerment"
              count={32}
              color="bg-gradient-to-br from-rose-500 to-pink-600"
            />
          </div>
        </div>
        
        {/* Latest Stories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Stories</h2>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StoryCard 
              title="Finding Strength Through Education"
              excerpt="How Sakhi Saheli's educational resources helped Priya overcome workplace harassment."
              author="Priya Mishra"
              date="2 days ago"
              engagement={{ likes: 243, comments: 42 }}
            />
            <StoryCard 
              title="The Power of Community"
              excerpt="When Meena faced danger, the Sakhi Saheli network rallied to support her."
              author="Meena Gupta"
              date="5 days ago"
              engagement={{ likes: 189, comments: 37 }}
            />
            <StoryCard 
              title="A New Beginning"
              excerpt="After a traumatic experience, Lakshmi found healing and a new career path."
              author="Lakshmi Patel"
              date="1 week ago"
              engagement={{ likes: 312, comments: 56 }}
            />
          </div>
        </div>
        
        {/* Share Your Story */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="p-4 bg-white rounded-full shadow-md">
                <MessageCircle className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Share Your Story</h2>
              <p className="text-gray-700 mb-4">
                Your experience can inspire and help others on their journey. Share your story with our community.
              </p>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Submit Your Story
              </button>
            </div>
          </div>
        </div>
        
        {/* Community Impact */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ImpactCard number="500+" label="Success Stories" />
            <ImpactCard number="10,000+" label="Women Helped" />
            <ImpactCard number="250+" label="Communities Reached" />
            <ImpactCard number="85%" label="Report Feeling Safer" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuoteProps {
  text: string;
}

const Quote: React.FC<QuoteProps> = ({ text }) => {
  return (
    <blockquote className="pl-4 border-l-4 border-purple-300 italic text-gray-600">
      "{text}"
    </blockquote>
  );
};

interface CategoryCardProps {
  title: string;
  count: number;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, color }) => {
  return (
    <div className={`${color} text-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className="p-6">
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{count} stories</p>
      </div>
    </div>
  );
};

interface StoryCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  engagement: {
    likes: number;
    comments: number;
  };
}

const StoryCard: React.FC<StoryCardProps> = ({ title, excerpt, author, date, engagement }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-video bg-gray-100 relative">
        {/* This would be an actual image in production */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
          <svg className="h-12 w-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
              <span className="text-purple-600 font-bold text-sm">
                {author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{author}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-3 flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Heart className="h-4 w-4 mr-1" />
            <span>{engagement.likes}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span>{engagement.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ImpactCardProps {
  number: string;
  label: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ number, label }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
      <div className="text-3xl font-bold text-purple-600 mb-2">{number}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StoriesPage;