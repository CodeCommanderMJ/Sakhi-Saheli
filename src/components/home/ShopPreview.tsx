import React from 'react';
import { ShoppingBag, Bell, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopPreview: React.FC = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Personal Alarm Keychain",
      description: "130dB emergency personal alarm with LED light",
      price: "₹599",
      image: "alarm.jpg",
      icon: <Bell className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Pepper Spray",
      description: "Compact and easy to use self-defense spray",
      price: "₹499",
      image: "spray.jpg",
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Safety Smart Band",
      description: "Wearable device with emergency SOS button",
      price: "₹1,299",
      image: "band.jpg",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop Safety</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of discreet and effective self-defense products designed specifically for women.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-purple-50 rounded-lg p-4 mb-8">
            <p className="text-purple-800 text-sm font-medium">
              For every purchase, we donate 5% to women's safety initiatives across India
            </p>
          </div>
          
          <div>
            <Link to="/shop" className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Visit Safety Shop
            </Link>
          </div>
        </div>
      </div>
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
    icon: React.ReactNode;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
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
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">{product.price}</span>
          <button className="inline-flex items-center px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
            View Details
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500">
          <span className="flex items-center">
            <span className="relative flex h-2 w-2 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            3 people bought in last hour
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopPreview;