// import React, { useState } from "react";
// import chair1 from "../assets/chair1.png";
// import chair2 from "../assets/chair2.png";
// import chair3 from "../assets/chair3.png";
// import bed1 from "../assets/bed1.png";

// const ChairPages = () => {
//   const [activeProduct, setActiveProduct] = useState(0);
//   const [category, setCategory] = useState("chairs");

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
//         image: chair3,
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

//   const products = allProducts[category] || allProducts.chairs;

//   const nextProduct = () => setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
//   const prevProduct = () => setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   const goToProduct = (index) => setActiveProduct(index);
//   const changeCategory = (newCategory) => {
//     setCategory(newCategory);
//     setActiveProduct(0);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-24 pb-12 px-6 md:px-20 text-white font-['Poppins', sans-serif] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
//             Explore Our <span className="text-indigo-400">Collections</span>
//           </h1>
//           <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
//             Discover meticulously crafted furniture that blends modern aesthetics with unparalleled comfort and quality.
//           </p>
//         </div>

//         <div className="flex justify-center mb-16">
//           <div className="inline-flex bg-black/50 backdrop-blur-md p-2 rounded-full shadow-lg border border-gray-700">
//             <button
//               onClick={() => changeCategory("chairs")}
//               className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 category === "chairs"
//                   ? "bg-indigo-500 text-white shadow-md"
//                   : "text-gray-400 hover:text-indigo-300 hover:bg-black/70"
//               }`}
//             >
//               Chairs
//             </button>
//             <button
//               onClick={() => changeCategory("beds")}
//               className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 category === "beds"
//                   ? "bg-indigo-500 text-white shadow-md"
//                   : "text-gray-400 hover:text-indigo-300 hover:bg-black/70"
//               }`}
//             >
//               Beds
//             </button>
//             <button className="px-8 py-3 rounded-full text-sm font-semibold text-gray-500 hover:text-indigo-300 hover:bg-black/70 transition-colors">
//               Tables <span className="opacity-50">(Coming Soon)</span>
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
//           <div className="w-full lg:w-1/3 space-y-8">
//             <div className="relative">
//               <h2 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-200 tracking-wide">
//                 Crafted with <span className="text-indigo-400">Exceptional</span> Materials.
//               </h2>
//             </div>
//             <p className="text-gray-400 leading-relaxed text-lg">
//               Experience the difference of furniture made with premium materials, ensuring lasting quality and timeless style.
//             </p>

//             <div className="pt-6">
//               <button className="group relative overflow-hidden bg-indigo-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-indigo-400/30 hover:shadow-xl">
//                 <span className="relative z-10 transition-colors duration-300">Explore Collection</span>
//                 <span className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15.75m-16.5 0a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H4.5z" />
//                 </svg>
//               </button>
//             </div>

//             <div className="pt-8 flex items-center">
//               <div className="h-px bg-gray-700 flex-grow"></div>
//               <div className="px-4 text-sm text-gray-500">Showing {products.length} items</div>
//               <div className="h-px bg-gray-700 flex-grow"></div>
//             </div>

//             <div className="flex flex-wrap gap-3 mt-4">
//               <span className="text-sm text-gray-500">Quick filters:</span>
//               <button className="px-4 py-2 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-700 hover:text-indigo-300 transition-colors font-medium">
//                 New Arrivals
//               </button>
//               <button className="px-4 py-2 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-700 hover:text-indigo-300 transition-colors font-medium">
//                 Bestsellers
//               </button>
//               <button className="px-4 py-2 text-xs rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-700 hover:text-indigo-300 transition-colors font-medium">
//                 Price: Low to High
//               </button>
//             </div>
//           </div>

//           <div className="w-full lg:w-2/3 relative">
//             <div className="flex flex-wrap md:flex-nowrap gap-8">
//               {products.map((product, index) => (
//                 <div
//                   key={product.id}
//                   className={`flex-1 min-w-[280px] transition-all duration-500 transform ${
//                     index === activeProduct ? "scale-105 opacity-100 z-20 shadow-2xl" : "scale-90 opacity-60 blur-sm md:blur-none"
//                   }`}
//                 >
//                   <div
//                     className={`rounded-3xl p-8 h-full flex flex-col relative overflow-hidden bg-black/70 border border-gray-700 backdrop-blur-md ${
//                       index === activeProduct ? "border-indigo-600" : ""
//                     }`}
//                   >
//                     {product.tag && (
//                       <div className="absolute top-6 left-6 z-30">
//                         <div
//                           className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide shadow-md ${
//                             product.tag === "new" ? "bg-blue-600 text-blue-100" : (product.tag === "bestseller" ? "bg-green-600 text-green-100" : "bg-yellow-600 text-yellow-100")
//                           }`}
//                         >
//                           {product.tag}
//                         </div>
//                       </div>
//                     )}

//                     <div className="mb-6 rounded-2xl bg-gray-800/50 p-6 h-[240px] flex items-center justify-center relative overflow-hidden">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="h-full w-auto mx-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-xl"
//                       />
//                       <button
//                         className={`absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
//                           index === activeProduct ? "bg-indigo-500 text-white hover:bg-indigo-600" : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
//                         }`}
//                         onClick={() => setActiveProduct(index)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={1.5}
//                           stroke="currentColor"
//                           className="w-5 h-5"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                         </svg>
//                       </button>
//                     </div>

//                     <div className="mt-auto flex-grow">
//                       <h3 className="text-xl font-semibold text-gray-200 mb-2">{product.name}</h3>
//                       <p className="text-sm text-gray-400 leading-relaxed mb-4">{product.description}</p>
//                       <div className="flex justify-between items-center">
//                         <span className="font-bold text-xl text-indigo-300">${product.price}</span>
//                         <span className="text-yellow-400 text-sm">⭐ {product.rating}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 mt-12">
//               <button
//                 onClick={prevProduct}
//                 className="text-gray-500 hover:text-indigo-300 transition-colors focus:outline-none"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-7 h-7"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 </svg>
//               </button>
//               {products.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                     index === activeProduct ? "bg-indigo-400" : "bg-gray-700 hover:bg-gray-600"
//                   }`}
//                   onClick={() => goToProduct(index)}
//                 ></button>
//               ))}
//               <button
//                 onClick={nextProduct}
//                 className="text-gray-500 hover:text-indigo-300 transition-colors focus:outline-none"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-7 h-7"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import bed1 from "../assets/bed1.png";

const ChairPages = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [category, setCategory] = useState("chairs");

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
        image: chair3,
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

  const products = allProducts[category] || allProducts.chairs;

  const nextProduct = () => setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  const prevProduct = () => setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const goToProduct = (index) => setActiveProduct(index);
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setActiveProduct(0);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6 md:px-20 text-black font-['Poppins', sans-serif] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900">
            Explore Our <span className="text-indigo-600">Collections</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Discover meticulously crafted furniture that blends modern aesthetics with unparalleled comfort and quality.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 p-2 rounded-full shadow-lg border border-gray-300">
            <button
              onClick={() => changeCategory("chairs")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                category === "chairs"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-200"
              }`}
            >
              Chairs
            </button>
            <button
              onClick={() => changeCategory("beds")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                category === "beds"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-200"
              }`}
            >
              Beds
            </button>
            <button className="px-8 py-3 rounded-full text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-gray-200 transition-colors">
              Tables <span className="opacity-50">(Coming Soon)</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 tracking-wide">
                Crafted with <span className="text-indigo-600">Exceptional</span> Materials.
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-lg">
              Experience the difference of furniture made with premium materials, ensuring lasting quality and timeless style.
            </p>

            <div className="pt-6">
              <button className="group relative overflow-hidden bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-indigo-400/30 hover:shadow-xl">
                <span className="relative z-10 transition-colors duration-300">Explore Collection</span>
                <span className="absolute inset-0 bg-indigo-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15.75m-16.5 0a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H4.5z" />
                </svg>
              </button>
            </div>

            <div className="pt-8 flex items-center">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <div className="px-4 text-sm text-gray-500">Showing {products.length} items</div>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-sm text-gray-500">Quick filters:</span>
              <button className="px-4 py-2 text-xs rounded-full bg-gray-200 text-gray-600 hover:bg-indigo-200 hover:text-indigo-700 transition-colors font-medium">
                New Arrivals
              </button>
              <button className="px-4 py-2 text-xs rounded-full bg-gray-200 text-gray-600 hover:bg-indigo-200 hover:text-indigo-700 transition-colors font-medium">
                Bestsellers
              </button>
              <button className="px-4 py-2 text-xs rounded-full bg-gray-200 text-gray-600 hover:bg-indigo-200 hover:text-indigo-700 transition-colors font-medium">
                Price: Low to High
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3 relative">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex-1 min-w-[280px] transition-all duration-500 transform ${
                    index === activeProduct ? "scale-105 opacity-100 z-20 shadow-xl" : "scale-90 opacity-60 blur-sm md:blur-none"
                  }`}
                >
                  <div
                    className={`rounded-3xl p-8 h-full flex flex-col relative overflow-hidden bg-white border border-gray-200 shadow-sm ${
                      index === activeProduct ? "border-indigo-400 shadow-md" : ""
                    }`}
                  >
                    {product.tag && (
                      <div className="absolute top-6 left-6 z-30">
                        <div
                          className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide shadow-md ${
                            product.tag === "new" ? "bg-blue-200 text-blue-700" : (product.tag === "bestseller" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700")
                          }`}
                        >
                          {product.tag}
                        </div>
                      </div>
                    )}

                    <div className="mb-6 rounded-2xl bg-gray-100 p-6 h-[240px] flex items-center justify-center relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto mx-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-xl"
                      />
                      <button
                        className={`absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          index === activeProduct ? "bg-indigo-500 text-white hover:bg-indigo-600" : "bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-black"
                        }`}
                        onClick={() => setActiveProduct(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-auto flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl text-indigo-600">${product.price}</span>
                        <span className="text-yellow-400 text-sm">⭐ {product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 mt-12">
              <button
                onClick={prevProduct}
                className="text-gray-500 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeProduct ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => goToProduct(index)}
                ></button>
              ))}
              <button
                onClick={nextProduct}
                className="text-gray-500 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairPages;