// InteriorDesignPage.jsx
import React from 'react';

const InteriorDesignPage = () => {
  return (
    <div className="w-full pt-16 pb-24 px-4 bg-gradient-to-b from-[#18181A] to-[#222224]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Images Section */}
          <div className="w-full lg:w-3/5 relative">
            {/* Dot Pattern */}
            <div className="absolute top-10 left-10 w-56 h-56 grid grid-cols-8 gap-1 z-0">
              {[...Array(64)].map((_, index) => (
                <div key={index} className="w-1.5 h-1.5 rounded-full bg-yellow-300 opacity-60"></div>
              ))}
            </div>
            
            {/* Main Image Grid */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {/* Large image */}
              <div className="col-span-1 row-span-2 rounded-xl overflow-hidden h-[400px] border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern interior with couch" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Top small image */}
              <div className="col-span-1 rounded-xl overflow-hidden h-[190px] border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80" 
                  alt="Chair and desk" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom small image */}
              <div className="col-span-1 rounded-xl overflow-hidden h-[190px] border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" 
                  alt="Wooden stool" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content Section */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We help you make<br />
              Modern Interior Design
            </h2>
            
            <p className="text-gray-300 mb-8">
              Transform your living space into a masterpiece of contemporary design. Our expert designers 
              combine aesthetics with functionality to create interiors that reflect your personality and 
              lifestyle. From concept to completion, we handle every detail to deliver spaces that inspire.
            </p>
            
            {/* Bullet points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2"></div>
                <p className="text-gray-400 flex-1">Personalized consultation to understand your vision and requirements</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2"></div>
                <p className="text-gray-400 flex-1">Curated selection of premium furniture and decor elements</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2"></div>
                <p className="text-gray-400 flex-1">Detailed 3D visualizations to preview your space before implementation</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2"></div>
                <p className="text-gray-400 flex-1">Comprehensive project management from design to installation</p>
              </div>
            </div>
            
            {/* Explore button */}
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignPage;