import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="w-full pt-16 pb-0 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-10 max-w-lg">
            We pride ourselves on providing exceptional furniture with unmatched quality, 
            style, and customer service. Our commitment to excellence makes us the preferred choice for your home.
          </p>

          {/* Grid of Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit Items */}
            {[
              {
                title: "Fast & Free Shipping",
                description:
                  "Enjoy complimentary delivery on all orders with no minimum purchase required. We ensure your furniture arrives promptly and in perfect condition.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                ),
              },
              {
                title: "Easy to Shop",
                description:
                  "Our intuitive website makes finding the perfect furniture simple. Browse by category, style, or room to discover pieces that match your vision.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated customer service team is available around the clock to answer questions, provide guidance, and ensure your complete satisfaction.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                ),
              },
              {
                title: "Hassle Free Returns",
                description:
                  "If you're not completely satisfied with your purchase, we offer a simple return process within 30 days, no questions asked and with free return shipping.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                ),
              },
            ].map((benefit, idx) => (
              <div className="flex flex-col" key={idx}>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image with Dots */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          {/* Dot Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 grid grid-cols-8 gap-1">
            {[...Array(64)].map((_, index) => (
              <div key={index} className="w-1 h-1 rounded-full bg-yellow-300"></div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full h-[500px] bg-[#F9FAFB] relative z-10 rounded-2xl overflow-hidden border border-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt="Modern living room with furniture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
