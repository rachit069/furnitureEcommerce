// import React, { useState } from "react";
// // Import images from assets
// import chair1 from "../assets/chair1.png";
// import chair2 from "../assets/chair2.png";
// import chair3 from "../assets/chair3.png";
// import bed1 from "../assets/bed1.png";
// // import table from "../assets/table.png"

// const ChairPages = () => {
//   const [activeProduct, setActiveProduct] = useState(0);
//   const [category, setCategory] = useState("chairs"); // New state for category filtering
  
//   // Product data with actual images
//   const allProducts = {
//     chairs: [
//       {
//         id: 1,
//         name: "Nordic Chair",
//         price: 50.00,
//         image: chair1,
//         description: "Minimalist design with premium comfort",
//         material: "Wool blend upholstery with wooden legs",
//         colors: ["#E0D9D2", "#8B8378", "#4B3621"],
//         rating: 4.8,
//         tag: "bestseller"
//       },
//       {
//         id: 2,
//         name: "Kruzo Aero Chair",
//         price: 78.00,
//         image: chair2,
//         description: "Modern swivel design with plush cushioning",
//         material: "Brushed metal base with fabric upholstery",
//         colors: ["#D3D3D3", "#A9A9A9", "#5F5F5F"],
//         rating: 4.9,
//         tag: "new"
//       },
//       {
//         id: 3,
//         name: "Ergonomic Chair",
//         price: 43.00,
//         image: chair3, // Using chair3 as requested
//         description: "Designed for optimal posture and support",
//         material: "Sustainable wood with eco-friendly fabric",
//         colors: ["#636F57", "#8F9779", "#BDC9A7"],
//         rating: 4.7
//       }
//     ],
//     beds: [
//       {
//         id: 4,
//         name: "Luxury Bed Frame",
//         price: 199.00,
//         image: bed1,
//         description: "Elegant design with sturdy construction",
//         material: "Solid oak wood with premium finish",
//         colors: ["#5C4033", "#8B4513", "#A0522D"],
//         rating: 4.9,
//         tag: "premium"
//       }
//     ]
//   };

//   // Get current category products
//   const products = allProducts[category] || allProducts.chairs;

//   // Handle navigation
//   const nextProduct = () => {
//     setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
//   };

//   const prevProduct = () => {
//     setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };

//   // Handle dot navigation
//   const goToProduct = (index) => {
//     setActiveProduct(index);
//   };

//   // Handle category change
//   const changeCategory = (newCategory) => {
//     setCategory(newCategory);
//     setActiveProduct(0); // Reset to first product when changing category
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1C1C1E] to-[#2A2A2E] py-24 px-6 md:px-20 text-white font-['Poppins',sans-serif] relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute w-[500px] h-[500px] rounded-full bg-[#444]/10 blur-[100px] -top-20 -left-20"></div>
//         <div className="absolute w-[600px] h-[600px] rounded-full bg-[#222]/20 blur-[150px] bottom-0 right-0"></div>
//         <div className="absolute w-[300px] h-[300px] rounded-full bg-[#777]/5 blur-[100px] top-1/3 right-1/3"></div>
        
//         {/* Grid pattern */}
//         <div className="absolute bottom-10 right-10 grid grid-cols-8 gap-2 opacity-10">
//           {Array.from({ length: 64 }).map((_, i) => (
//             <span key={i} className="w-2 h-2 rounded-full bg-gray-300"></span>
//           ))}
//         </div>
//       </div>
      
//       {/* Content container */}
//       <div className="max-w-7xl mx-auto">
//         {/* Section heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Collections</h1>
//           <p className="text-gray-400 max-w-xl mx-auto">Explore our carefully curated selection of premium furniture designed for modern living.</p>
//         </div>
      
//         {/* Category selector */}
//         <div className="flex justify-center mb-16">
//           <div className="inline-flex bg-[#2C2C30]/70 backdrop-blur-sm p-1.5 rounded-full shadow-lg border border-gray-700">
//             <button 
//               onClick={() => changeCategory("chairs")}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 category === "chairs" 
//                   ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md border border-gray-600" 
//                   : "text-gray-400 hover:text-white hover:bg-white/5"
//               }`}
//             >
//               Chairs
//             </button>
//             <button 
//               onClick={() => changeCategory("beds")}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 category === "beds" 
//                   ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md border border-gray-600" 
//                   : "text-gray-400 hover:text-white hover:bg-white/5"
//               }`}
//             >
//               Beds
//             </button>
//             <button 
//               className="px-6 py-2 rounded-full text-sm font-medium text-gray-500"
//             >
//               Tables
//             </button>
//           </div>
//         </div>
      
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
//           {/* Left content */}
//           <div className="w-full lg:w-1/3 space-y-6 z-10">
//             <div className="relative">
//               <div className="absolute -left-3 top-0 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-600"></div>
//               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//                 Crafted with <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100">excellent</span> material.
//               </h2>
//             </div>
            
//             <p className="text-gray-400 leading-relaxed">
//               Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
//             </p>
            
//             <div className="pt-6">
//               <button className="group relative overflow-hidden bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-gray-400/10 hover:shadow-xl">
//                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
//               </button>
//             </div>
            
//             {/* Product count */}
//             <div className="pt-8 flex items-center">
//               <div className="h-px bg-gray-800 flex-grow"></div>
//               <div className="px-4 text-sm text-gray-500">Showing {products.length} products</div>
//               <div className="h-px bg-gray-800 flex-grow"></div>
//             </div>
            
//             {/* Quick filter */}
//             <div className="flex flex-wrap gap-2">
//               <span className="text-sm text-gray-500 mr-2">Quick filters:</span>
//               <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors">
//                 New arrivals
//               </button>
//               <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors">
//                 Bestsellers
//               </button>
//               <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors">
//                 Price: Low to High
//               </button>
//             </div>
//           </div>
          
//           {/* Product carousel */}
//           <div className="w-full lg:w-2/3 z-10">
//             <div className="relative">
//               {/* Products row with animation */}
//               <div className="flex flex-wrap md:flex-nowrap gap-6 transition-all duration-500">
//                 {products.map((product, index) => (
//                   <div 
//                     key={product.id}
//                     className={`flex-1 min-w-[280px] transition-all duration-700 transform
//                       ${index === activeProduct 
//                         ? 'scale-100 opacity-100 z-20' 
//                         : 'scale-95 opacity-50'
//                       }
//                     `}
//                   >
//                     <div 
//                       className={`
//                         rounded-3xl p-6 h-full flex flex-col relative overflow-hidden group
//                         ${index === activeProduct 
//                           ? 'bg-gradient-to-br from-[#2C2C30] to-[#3A3A3E] shadow-xl border border-gray-700' 
//                           : 'bg-[#2C2C30]/70 border border-gray-800'
//                         }
//                       `}
//                     >
//                       {/* Product tag */}
//                       {product.tag && (
//                         <div className="absolute top-4 left-4 z-20">
//                           <div className={`
//                             text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wide
//                             ${product.tag === 'new' ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' : 
//                               product.tag === 'bestseller' ? 'bg-gray-900/30 text-gray-300 border border-gray-500/30' :
//                               product.tag === 'premium' ? 'bg-gray-900/30 text-gray-300 border border-gray-500/30' : ''}
//                           `}>
//                             {product.tag}
//                           </div>
//                         </div>
//                       )}
                      
//                       {/* Image container */}
//                       <div className="mb-4 rounded-2xl bg-gradient-to-br from-[#333] to-[#222] p-4 h-[220px] flex items-center justify-center relative overflow-hidden">
//                         {/* Actual image */}
//                         <img 
//                           src={product.image} 
//                           alt={product.name} 
//                           className="h-full w-auto mx-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl" 
//                         />
                        
//                         {/* Quick view button */}
//                         <button 
//                           className={`
//                             absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
//                             ${index === activeProduct 
//                               ? 'bg-white text-gray-900' 
//                               : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                             }
//                           `}
//                           onClick={() => setActiveProduct(index)}
//                         >
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                           </svg>
//                         </button>
                        
//                         {/* Hover actions */}
//                         <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                           <div className="flex gap-2">
//                             <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
//                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
//                               </svg>
//                             </button>
//                             <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
//                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
//                               </svg>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Product info */}
//                       <div className="flex flex-col justify-between flex-grow">
//                         <div className="mb-2">
//                           <h3 className="font-medium text-lg text-white">{product.name}</h3>
                          
//                           {/* Show more details for active product */}
//                           {index === activeProduct && (
//                             <div className="mt-2 text-sm text-gray-400 animate-fadeIn">
//                               <p>{product.description}</p>
                              
//                               {/* Material info */}
//                               <p className="mt-1 text-xs text-gray-500">Material: {product.material}</p>
                              
//                               {/* Color options */}
//                               <div className="mt-3 flex items-center gap-2">
//                                 <span className="text-xs text-gray-500">Colors:</span>
//                                 {product.colors.map((color, i) => (
//                                   <div 
//                                     key={i} 
//                                     className="w-4 h-4 rounded-full border border-gray-700 cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-offset-[#2C2C30] hover:ring-gray-600 transition-all" 
//                                     style={{ backgroundColor: color }}
//                                   ></div>
//                                 ))}
//                               </div>
                              
//                               {/* Rating stars */}
//                               <div className="mt-2 flex items-center gap-1">
//                                 <div className="flex text-gray-400">
//                                   {Array.from({ length: 5 }).map((_, i) => (
//                                     <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gray-300' : 'text-gray-600'}`}>
//                                       <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
//                                     </svg>
//                                   ))}
//                                 </div>
//                                 <span className="text-xs text-gray-500">({product.rating})</span>
//                               </div>
//                             </div>
//                           )}
//                         </div>
                        
//                         <div className="flex justify-between items-end mt-2">
//                           <div className="font-semibold text-gray-200">
//                             ${product.price.toFixed(2)}
//                           </div>
                          
//                           {index === activeProduct && (
//                             <button className="group relative overflow-hidden px-3 py-1 rounded-full bg-white text-gray-900 text-xs font-medium transition-all hover:shadow-md">
//                               <span className="relative z-10 group-hover:text-white transition-colors duration-300">Add to cart</span>
//                               <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Navigation arrows */}
//               <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full left-0 px-4 pointer-events-none">
//                 <button 
//                   onClick={prevProduct} 
//                   className="w-10 h-10 rounded-full bg-[#2C2C30]/80 border border-gray-700 backdrop-blur-sm shadow-lg text-white flex items-center justify-center pointer-events-auto hover:bg-[#2C2C30] transition-colors"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                   </svg>
//                 </button>
                
//                 <button 
//                   onClick={nextProduct} 
//                   className="w-10 h-10 rounded-full bg-[#2C2C30]/80 border border-gray-700 backdrop-blur-sm shadow-lg text-white flex items-center justify-center pointer-events-auto hover:bg-[#2C2C30] transition-colors"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
            
//             {/* Pagination dots */}
//             <div className="flex justify-center mt-10 space-x-2">
//               {products.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToProduct(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === activeProduct 
//                       ? 'bg-white w-6' 
//                       : 'bg-gray-700 hover:bg-gray-600'
//                   }`}
//                 ></button>
//               ))}
//             </div>
            
//             {/* View all button */}
//             <div className="text-center mt-8">
//               <button className="text-sm text-gray-500 hover:text-white flex items-center gap-1 mx-auto transition-colors group">
//                 View all {category}
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChairPages;

import React, { useState } from "react";
// Import images from assets
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import bed1 from "../assets/bed1.png";
// import table from "../assets/table.png"

const ChairPages = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [category, setCategory] = useState("chairs"); // New state for category filtering
  
  // Product data with actual images
  const allProducts = {
    chairs: [
      {
        id: 1,
        name: "Nordic Chair",
        price: 50.00,
        image: chair1,
        description: "Minimalist design with premium comfort",
        material: "Wool blend upholstery with wooden legs",
        colors: ["#E0D9D2", "#8B8378", "#4B3621"],
        rating: 4.8,
        tag: "bestseller"
      },
      {
        id: 2,
        name: "Kruzo Aero Chair",
        price: 78.00,
        image: chair2,
        description: "Modern swivel design with plush cushioning",
        material: "Brushed metal base with fabric upholstery",
        colors: ["#D3D3D3", "#A9A9A9", "#5F5F5F"],
        rating: 4.9,
        tag: "new"
      },
      {
        id: 3,
        name: "Ergonomic Chair",
        price: 43.00,
        image: chair3, // Using chair3 as requested
        description: "Designed for optimal posture and support",
        material: "Sustainable wood with eco-friendly fabric",
        colors: ["#636F57", "#8F9779", "#BDC9A7"],
        rating: 4.7
      }
    ],
    beds: [
      {
        id: 4,
        name: "Luxury Bed Frame",
        price: 199.00,
        image: bed1,
        description: "Elegant design with sturdy construction",
        material: "Solid oak wood with premium finish",
        colors: ["#5C4033", "#8B4513", "#A0522D"],
        rating: 4.9,
        tag: "premium"
      }
    ]
  };

  // Get current category products
  const products = allProducts[category] || allProducts.chairs;

  // Handle navigation
  const nextProduct = () => {
    setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Handle dot navigation
  const goToProduct = (index) => {
    setActiveProduct(index);
  };

  // Handle category change
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setActiveProduct(0); // Reset to first product when changing category
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18181A] to-[#222224] pt-24 pb-0 px-6 md:px-20 text-white font-['Poppins',sans-serif] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#444]/10 blur-[100px] -top-20 -left-20"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#222]/20 blur-[150px] bottom-0 right-0"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#777]/5 blur-[100px] top-1/3 right-1/3"></div>
        
        {/* Grid pattern */}
        <div className="absolute bottom-10 right-10 grid grid-cols-8 gap-2 opacity-10">
          {Array.from({ length: 64 }).map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-gray-300"></span>
          ))}
        </div>
      </div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Collections</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Explore our carefully curated selection of premium furniture designed for modern living.</p>
        </div>
      
        {/* Category selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#2C2C30]/70 backdrop-blur-sm p-1.5 rounded-full shadow-lg border border-gray-700">
            <button 
              onClick={() => changeCategory("chairs")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === "chairs" 
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md border border-gray-600" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Chairs
            </button>
            <button 
              onClick={() => changeCategory("beds")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === "beds" 
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md border border-gray-600" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Beds
            </button>
            <button 
              className="px-6 py-2 rounded-full text-sm font-medium text-gray-500"
            >
              Tables
            </button>
          </div>
        </div>
      
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/3 space-y-6 z-10">
            <div className="relative">
              <div className="absolute -left-3 top-0 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-600"></div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Crafted with <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100">excellent</span> material.
              </h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
            </p>
            
            <div className="pt-6">
              <button className="group relative overflow-hidden bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-gray-400/10 hover:shadow-xl">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </button>
            </div>
            
            {/* Product count */}
            <div className="pt-8 flex items-center">
              <div className="h-px bg-gray-800 flex-grow"></div>
              <div className="px-4 text-sm text-gray-500">Showing {products.length} products</div>
              <div className="h-px bg-gray-800 flex-grow"></div>
            </div>
            
            {/* Quick filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Quick filters:</span>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors">
                New arrivals
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors">
                Bestsellers
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors">
                Price: Low to High
              </button>
            </div>
          </div>
          
          {/* Product carousel */}
          <div className="w-full lg:w-2/3 z-10">
            <div className="relative">
              {/* Products row with animation */}
              <div className="flex flex-wrap md:flex-nowrap gap-6 transition-all duration-500">
                {products.map((product, index) => (
                  <div 
                    key={product.id}
                    className={`flex-1 min-w-[280px] transition-all duration-700 transform
                      ${index === activeProduct 
                        ? 'scale-100 opacity-100 z-20' 
                        : 'scale-95 opacity-50'
                      }
                    `}
                  >
                    <div 
                      className={`
                        rounded-3xl p-6 h-full flex flex-col relative overflow-hidden group
                        ${index === activeProduct 
                          ? 'bg-gradient-to-br from-[#2C2C30] to-[#3A3A3E] shadow-xl border border-gray-700' 
                          : 'bg-[#2C2C30]/70 border border-gray-800'
                        }
                      `}
                    >
                      {/* Product tag */}
                      {product.tag && (
                        <div className="absolute top-4 left-4 z-20">
                          <div className={`
                            text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wide
                            ${product.tag === 'new' ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' : 
                              product.tag === 'bestseller' ? 'bg-gray-900/30 text-gray-300 border border-gray-500/30' :
                              product.tag === 'premium' ? 'bg-gray-900/30 text-gray-300 border border-gray-500/30' : ''}
                          `}>
                            {product.tag}
                          </div>
                        </div>
                      )}
                      
                      {/* Image container */}
                      <div className="mb-4 rounded-2xl bg-gradient-to-br from-[#333] to-[#222] p-4 h-[220px] flex items-center justify-center relative overflow-hidden">
                        {/* Actual image */}
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-full w-auto mx-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl" 
                        />
                        
                        {/* Quick view button */}
                        <button 
                          className={`
                            absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
                            ${index === activeProduct 
                              ? 'bg-white text-gray-900' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }
                          `}
                          onClick={() => setActiveProduct(index)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                        
                        {/* Hover actions */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              </svg>
                            </button>
                            <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product info */}
                      <div className="mt-2 flex-grow">
                        <h3 className="text-lg font-medium text-white mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-2">{product.description}</p>
                        
                        {/* Material info */}
                        <div className="mb-3">
                          <p className="text-xs text-gray-500">Material: <span className="text-gray-400">{product.material}</span></p>
                        </div>
                        
                        {/* Colors */}
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-1.5">Colors:</p>
                          <div className="flex gap-1.5">
                            {product.colors.map((color, i) => (
                              <div key={i} className="w-6 h-6 rounded-full cursor-pointer border border-gray-700 transition-transform hover:scale-110" style={{ backgroundColor: color }}></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : i < product.rating ? 'text-gradient-to-r from-yellow-400 to-gray-500' : 'text-gray-600'}`}>
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-400 text-xs ml-1">({product.rating})</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-700">
                        <div className="text-white font-medium">${product.price.toFixed(2)}</div>
                        <button className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-8 gap-1.5">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProduct(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeProduct ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to product ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation arrows */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={prevProduct}
                  className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={nextProduct}
                  className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairPages;