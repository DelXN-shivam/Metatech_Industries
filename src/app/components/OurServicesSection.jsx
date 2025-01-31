"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const services = [
    {
      icon: "/images/Coffee maker.png",
      title: "Microhardness Tester with Image Analyser Facility",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "/images/Gears set.png",
      title: "Automatic Sectioning",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "/images/Laser.png",
      title: "Manual/Automatic Polishing/Grinding",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "/images/Coffee maker.png",
      title: "Microhardness Tester with Image Analyser Facility",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "/images/Gears set.png",
      title: "Automatic Sectioning",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "/images/Laser.png",
      title: "Manual/Automatic Polishing/Grinding",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "/images/Coffee maker.png",
      title: "Microhardness Tester with Image Analyser Facility",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
    },
    {
      icon: "/images/Gears set.png",
      title: "Automatic Sectioning",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
    },
    {
      icon: "/images/Laser.png",
      title: "Manual/Automatic Polishing/Grinding",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
    },
  ];

  return (
    <div ref={sectionRef} className="py-10">
      {/* Section Title */}
      <h2 className="text-2xl phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-4xl desktopxl:text-5xl font-bold text-black px-8 pb-8 text-center mb-8">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="mx-auto grid grid-cols-1 phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 desktopxl:grid-cols-3 gap-8 px-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group flex items-center justify-center bg-gray-100 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-100 py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-72 md:h-80 bg-white shadow-md rounded-lg transition-transform duration-300 group-hover:scale-105">
              {/* Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full p-4 shadow-md transition-colors duration-300 group-hover:bg-orange-500">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-orange-500 transition-colors duration-300 group-hover:bg-white">
                  <img
                    src={service.icon}
                    alt="Service Icon"
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-evenly text-center h-full mt-8 px-4">
                <h3 className="text-xl phone:text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl desktopxl:text-3xl font-bold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
                  {service.title}
                </h3>

                <div className="p-4 rounded bg-gray-800 text-white transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-gray-100">
                  <p className="text-sm phone:text-xs tablet:text-sm laptop:text-md desktop:text-lg desktopxl:text-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;






// import React from "react";

// const Services = () => {
//     const services = [
//         {
//             icon: "/images/Coffee maker.png", // Replace with your actual icon path
//             title: "Microhardness Tester with Image Analyser Facility",
//             description:
//                 "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
//         },
//         {
//             icon: "/images/Gears set.png", // Replace with your actual icon path
//             title: "Automatic Sectioning",
//             description:
//                 "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
//         },
//         {
//             icon: "/images/Laser.png", // Replace with your actual icon path
//             title: "Manual/Automatic Polishing/Grinding",
//             description:
//                 "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
//         },
//         {
//             icon: "/images/Coffee maker.png", // Replace with your actual icon path
//             title: "Microhardness Tester with Image Analyser Facility",
//             description:
//                 "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
//         },
//         {
//             icon: "/images/Gears set.png", // Replace with your actual icon path
//             title: "Automatic Sectioning",
//             description:
//                 "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
//         },
//         {
//             icon: "/images/Laser.png", // Replace with your actual icon path
//             title: "Manual/Automatic Polishing/Grinding",
//             description:
//                 "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
//         },
        // {
        //     icon: "/images/Coffee maker.png", // Replace with your actual icon path
        //     title: "Microhardness Tester with Image Analyser Facility",
        //     description:
        //         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        // },
        // {
        //     icon: "/images/Gears set.png", // Replace with your actual icon path
        //     title: "Automatic Sectioning",
        //     description:
        //         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        // },
        // {
        //     icon: "/images/Laser.png", // Replace with your actual icon path
        //     title: "Manual/Automatic Polishing/Grinding",
        //     description:
        //         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        // },
//     ];

//     return (
//         <div>
//             {/* Section Title */}
//             <h2 className="text-2xl md:text-3xl font-bold text-black px-8 text-center mb-8">
//                 Our Services
//             </h2>
//             <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="group flex items-center justify-center h-72 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-100"
//                     >
//                         <div className="relative w-64 h-56 bg-white shadow-md rounded-lg transition-transform duration-300 group-hover:scale-105">
//                             {/* Icon positioned at the top border */}
//                             <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full p-4 shadow-md transition-colors duration-300 group-hover:bg-orange-500">
//                                 <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-orange-500 transition-colors duration-300 group-hover:bg-white">
//                                     <img
//                                         src={service.icon}
//                                         alt="Service Icon"
//                                         className="h-10 w-10 object-contain"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Content inside the square container */}
//                             <div className="flex flex-col justify-evenly text-center h-full mt-8">
//                                 {/* Title Section */}
//                                 <h3 className="text-lg font-bold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
//                                     {service.title}
//                                 </h3>

//                                 {/* Description Section */}
//                                 <div className="p-4 rounded bg-gray-800 text-white transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-gray-100">
//                                     <p className="text-sm">{service.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;