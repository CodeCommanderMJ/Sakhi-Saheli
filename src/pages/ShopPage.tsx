import React from 'react';
import { ShoppingBag, Bell, Shield, Heart, Filter, Search } from 'lucide-react';

const ShopPage: React.FC = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Personal Alarm Keychain",
      description: "130dB emergency personal alarm with LED light",
      price: "₹599",
      image: "alarm.jpg",
      category: "Alarms",
      bestSeller: true,
      icon: <Bell className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Pepper Spray",
      description: "Compact and easy to use self-defense spray",
      price: "₹499",
      image: "spray.jpg",
      category: "Defense",
      bestSeller: false,
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Safety Smart Band",
      description: "Wearable device with emergency SOS button",
      price: "₹1,299",
      image: "band.jpg",
      category: "Wearables",
      bestSeller: true,
      icon: <Heart className="h-6 w-6" />
    },
    {
      id: 4,
      name: "Defense Keychain",
      description: "Discrete self-defense tool for emergency situations",
      price: "₹399",
      image: "keychain.jpg",
      category: "Defense",
      bestSeller: false,
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 5,
      name: "Safety App Subscription",
      description: "1-year premium access to Sakhi Saheli safety app",
      price: "₹999/year",
      image: "app.jpg",
      category: "Digital",
      bestSeller: false,
      icon: <Heart className="h-6 w-6" />
    },
    {
      id: 6,
      name: "Emergency Whistle",
      description: "Ultra-loud emergency whistle with neck strap",
      price: "₹199",
      image: "whistle.jpg",
      category: "Alarms",
      bestSeller: false,
      icon: <Bell className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Safety Shop</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover our curated collection of discreet and effective self-defense products designed specifically for women.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-4 border-b">
                <h2 className="font-bold flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </h2>
              </div>
              
              <div className="p-4 border-b">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <FilterCheckbox label="Alarms" count={12} />
                  <FilterCheckbox label="Defense Tools" count={8} />
                  <FilterCheckbox label="Wearables" count={5} />
                  <FilterCheckbox label="Digital" count={3} />
                  <FilterCheckbox label="Training" count={4} />
                </div>
              </div>
              
              <div className="p-4 border-b">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <FilterCheckbox label="Under ₹500" count={7} />
                  <FilterCheckbox label="₹500 - ₹1000" count={10} />
                  <FilterCheckbox label="₹1000 - ₹2000" count={5} />
                  <FilterCheckbox label="Above ₹2000" count={3} />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium mb-3">Ratings</h3>
                <div className="space-y-2">
                  <FilterCheckbox label="4★ & above" count={15} />
                  <FilterCheckbox label="3★ & above" count={22} />
                  <FilterCheckbox label="2★ & above" count={25} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="w-full md:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative flex-grow max-w-md">
                <input 
                  type="text" 
                  placeholder="Search safety products..." 
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
            
            {/* Featured Banner */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="p-4 bg-white rounded-full">
                    <Shield className="h-10 w-10 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Safety Starter Pack</h2>
                  <p className="text-gray-700 mb-4">
                    Our most popular safety tools bundled together at a special price.
                  </p>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded text-sm font-medium">
                    Save 20%
                  </span>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    View Bundle
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-md bg-purple-600 text-white">
                  1
                </button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Donation Banner */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block bg-purple-100 px-3 py-1 rounded text-purple-800 text-sm font-medium mb-4">
                Make a Difference
              </div>
              <h2 className="text-2xl font-bold mb-4">Donate Safety Products</h2>
              <p className="text-gray-600 mb-6">
                Help us provide essential safety tools to underprivileged women and girls across India. Your contribution can make a significant difference in someone's life.
              </p>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">1,500+</div>
                <p className="text-purple-800">Safety products donated so far</p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <p className="font-bold text-purple-700">450</p>
                    <p className="text-xs text-gray-600">Alarms</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <p className="font-bold text-purple-700">650</p>
                    <p className="text-xs text-gray-600">Defense Tools</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <p className="font-bold text-purple-700">400</p>
                    <p className="text-xs text-gray-600">Wearables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FilterCheckboxProps {
  label: string;
  count: number;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label, count }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" id={label} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
      <label htmlFor={label} className="ml-2 text-gray-700">{label}</label>
      <span className="ml-auto text-xs text-gray-500">({count})</span>
    </div>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    bestSeller: boolean;
    icon: React.ReactNode;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          {/* In a real implementation, this would be an actual product image */}
          <div className="p-4 rounded-full bg-purple-100 text-purple-600">
            {product.icon}
          </div>
        </div>
        
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Verified Safe
          </span>
        </div>
        
        {product.bestSeller && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Best Seller
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <span className="text-xs text-gray-500">{product.category}</span>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-purple-600">{product.price}</span>
          <div className="flex text-amber-500">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
            Add to Cart
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-xs text-gray-500">
          <span className="flex items-center">
            <span className="relative flex h-2 w-2 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {Math.floor(Math.random() * 5) + 1} people bought in last hour
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;