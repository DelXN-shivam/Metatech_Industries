import React from 'react';

function CardsLayout() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      {/* Top Card */}
      <div
        className="p-8 w-96 border-4 border-transparent bg-[#4949c3] text-center rounded-lg mb-16 z-10 relative 
                   transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-900 
                   animate-fade-in"
      >
        <h3 className="text-2xl font-bold text-white mb-4 underline">
          Innovation
        </h3>
        <p className="text-lg text-gray-700 text-white">
          We constantly innovate to meet the evolving needs of our clients.
        </p>
      </div>

      {/* Middle Two Cards */}
      <div className="flex gap-32 mt-[-50px] relative z-10 justify-center mb-24">
        <div
          className="p-8 w-96 border-4 border-transparent bg-[#826abe] text-center rounded-lg w-1/2 -mt-8 z-0 
                     transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-900 
                     animate-slide-in-left"
          style={{ marginLeft: "-2rem" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline">
            Creativity
          </h3>
          <p className="text-lg text-gray-700 text-white">
            We think outside the box to provide unique solutions.
          </p>
        </div>
        <div
          className="p-8 w-96 border-4 border-transparent bg-[#826abe] text-center rounded-lg w-1/2 -mt-8 z-0 
                     transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-900 
                     animate-slide-in-right"
          style={{ marginRight: "-2rem" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline">
            Expertise
          </h3>
          <p className="text-lg text-gray-700 text-white">
            Our team has the expertise to deliver high-quality results.
          </p>
        </div>
      </div>

      {/* Bottom Two Cards */}
      <div className="flex gap-96 mt-[-50px] relative z-10 justify-center mb-24">
        <div
          className="p-8 border-4 border-transparent bg-[#b68cb8] text-center rounded-lg w-1/2 -mt-16 z-0 
                     transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-900 
                     animate-slide-in-left"
          style={{ marginLeft: "-4rem" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline">
            Quality
          </h3>
          <p className="text-lg text-gray-700 text-white">
            We strive for excellence in everything we do.
          </p>
        </div>
        <div
          className="p-8 border-4 border-transparent bg-[#b68cb8] text-center rounded-lg w-1/2 -mt-16 z-0 
                     transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-900 
                     animate-slide-in-right"
          style={{ marginRight: "-4rem" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 underline">
            Satisfaction
          </h3>
          <p className="text-lg text-gray-700 text-white">
            Our goal is to exceed our clients' expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardsLayout;



// import React from "react";

// const CardsLayout = () => {
//   return (
//     <div className="relative max-w-7xl mx-auto mt-16">
//       <div className="absolute inset-0 flex justify-center items-center">
//         {/* First Card */}
//         <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border">
//           <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
//           <p className="text-lg text-gray-700">
//             We constantly innovate to meet the evolving needs of our clients.
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-between mt-24">
//         {/* Second and Third Cards (with overlapping) */}
//         <div className="relative w-1/3">
//           <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border z-10">
//             <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
//             <p className="text-lg text-gray-700">
//               We constantly innovate to meet the evolving needs of our clients.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-1/3 -mt-16">
//           <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border z-20">
//             <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
//             <p className="text-lg text-gray-700">
//               We constantly innovate to meet the evolving needs of our clients.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-between mt-36">
//         {/* Fourth and Fifth Cards (with more distance) */}
//         <div className="relative w-1/3">
//           <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border">
//             <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
//             <p className="text-lg text-gray-700">
//               We constantly innovate to meet the evolving needs of our clients.
//             </p>
//           </div>
//         </div>

//         <div className="relative w-1/3 -mt-24">
//           <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border">
//             <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
//             <p className="text-lg text-gray-700">
//               We constantly innovate to meet the evolving needs of our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardsLayout;



// import React from 'react';

// const CardsLayout = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center p-8">
//             <div className="grid grid-cols-2 gap-8 relative">
//                 {/* Top Card */}
//                 <div className="col-span-2 flex justify-center">
//                     <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border w-full max-w-md">
//                         <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
//                         <p className="text-lg text-gray-700">
//                             We constantly innovate to meet the evolving needs of our clients.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Middle Two Cards */}
//                 <div className="col-span-2 gap-36 flex justify-between mt-[-50px] relative z-10">
//                     <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border w-full max-w-sm">
//                         <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
//                         <p className="text-lg text-gray-700">
//                             We deliver high-quality solutions tailored to your needs.
//                         </p>
//                     </div>
//                     <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border w-full max-w-sm">
//                         <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
//                         <p className="text-lg text-gray-700">
//                             We work closely with our clients to achieve their goals.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Last Two Cards */}
//                 <div className="col-span-2 flex justify-between mt-[-50px] relative z-10">
//                     <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border w-full max-w-sm">
//                         <h3 className="text-2xl font-bold text-white mb-4">Sustainability</h3>
//                         <p className="text-lg text-gray-700">
//                             We focus on sustainable solutions for a better future.
//                         </p>
//                     </div>
//                     <div className="p-8 border-4 border-transparent bg-gray-100 text-center rounded-lg animate-lightning-border w-full max-w-sm">
//                         <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
//                         <p className="text-lg text-gray-700">
//                             We strive for excellence in everything we do.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardsLayout;