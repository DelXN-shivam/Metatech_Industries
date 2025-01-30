'use client';

import { motion } from 'framer-motion';

export default function WhatSetsUsApart() {
    const features = [
        { title: '38+ Years of Expertise', description: 'Decades of Mastery in Metallography' },
        { title: 'State-of-the-Art Equipment', description: 'Equipped with Cutting-Edge Technology' },
        { title: 'Customizable Solutions', description: 'Tailored to Meet Your Unique Needs' },
        { title: 'Excellent After-Sales Support', description: 'Unmatched After-Sales Support You Can Rely On' },
        { title: 'Trusted by Leading Brands', description: 'Collaborating with Industry Leaders to Drive Excellence and Innovation' },
    ];

    // Determine animation direction based on index (left or right)
    const getAnimationVariant = (index) => ({
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    });

    return (
        <motion.div
            className="container mx-auto px-8 py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Triggers animation when in view
        >
            {/* Title */}
            <motion.h2
                className="text-2xl md:text-3xl font-bold text-black text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                What Sets Us Apart
            </motion.h2>

            {/* First Row - 3 Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                {features.slice(0, 3).map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        variants={getAnimationVariant(index)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover="hover"
                    >
                        <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                        <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
                        <p className="text-gray-600 max-w-[200px]">{feature.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Second Row - 2 Centered Features */}
            <div className="grid lg:grid-cols-2 lg:px-32 gap-10 mb-5">
                {features.slice(3, 5).map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        variants={getAnimationVariant(index)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover="hover"
                    >
                        <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                        <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
                        <p className="text-gray-600 max-w-[200px]">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}



// 'use client';

// import { motion } from 'framer-motion';

// export default function WhatSetsUsApart() {
//     const features = [
//         {
//             title: '38+ Years of Expertise',
//             description: 'Decades of Mastery in Metallography',
//         },
//         {
//             title: 'State-of-the-Art Equipment',
//             description: 'Equipped with Cutting-Edge Technology',
//         },
//         {
//             title: 'Customizable Solutions',
//             description: 'Tailored to Meet Your Unique Needs',
//         },
//         {
//             title: 'Excellent After-Sales Support',
//             description: 'Unmatched After-Sales Support You Can Rely On',
//         },
//         {
//             title: 'Trusted by Leading Brands',
//             description: 'Collaborating with Industry Leaders to Drive Excellence and Innovation',
//         },
//     ];

//     // Animation Variants
//     const getAnimationVariant = (index) => ({
//         hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
//         visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
//         hover: { scale: 1.05, transition: { duration: 0.3 } },
//     });

//     return (
//         <motion.div
//             className="container mx-auto px-4 py-10"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//         >
//             {/* Title */}
//             <motion.h2
//                 className="text-2xl md:text-3xl font-bold text-black text-center mb-8"
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: false }}
//             >
//                 What Sets Us Apart
//             </motion.h2>

//             {/* First Row - 3 Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
//                 {features.slice(0, 3).map((feature, index) => (
//                     <motion.div
//                         key={index}
//                         className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                         variants={getAnimationVariant(index)}
//                         whileHover="hover"
//                     >
//                         <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
//                         <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
//                         <p className="text-gray-600 max-w-[200px]">{feature.description}</p>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Second Row - 2 Centered Features */}
//             <div className="flex gap-10 mb-5 justify-evenly">
//                 {features.slice(3, 5).map((feature, index) => (
//                     <motion.div
//                         key={index}
//                         className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                         variants={getAnimationVariant(index)}
//                         whileHover="hover"
//                     >
//                         <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
//                         <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
//                         <p className="text-gray-600 max-w-[200px]">{feature.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// }


// 'use client';

// import { motion } from 'framer-motion';

// export default function WhatSetsUsApart() {
//     const features = [
//         {
//             title: '38+ Years of Expertise',
//             description: 'Decades of Mastery in Metallography',
//         },
//         {
//             title: 'State-of-the-Art Equipment',
//             description: 'Equipped with Cutting-Edge Technology',
//         },
//         {
//             title: 'Customizable Solutions',
//             description: 'Tailored to Meet Your Unique Needs',
//         },
//         {
//             title: 'Excellent After-Sales Support',
//             description: 'Unmatched After-Sales Support You Can Rely On',
//         },
//         {
//             title: 'Trusted by Leading Brands',
//             description:
//                 'Collaborating with Industry Leaders to Drive Excellence and Innovation',
//         },
//     ];

//     // Animation Variants
//     const containerVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6, staggerChildren: 0.2 },
//         },
//     };

//     const featureVariants = {
//         hidden: { opacity: 0, scale: 0.8 },
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
//         hover: { scale: 1.05, transition: { duration: 0.3 } },
//     };

//     return (
//         <motion.div
//             className="container mx-auto px-4 py-10"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//         >
//             {/* Title */}
//             <motion.h2
//                 className="text-2xl md:text-3xl font-bold text-black text-center mb-8"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 What Sets Us Apart
//             </motion.h2>

//             {/* First Row - 3 Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
//                 {features.slice(0, 3).map((feature, index) => (
//                     <motion.div
//                         key={index}
//                         className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                         variants={featureVariants}
//                         whileHover="hover"
//                     >
//                         <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
//                         <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
//                         <p className="text-gray-600 max-w-[200px]">{feature.description}</p>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Second Row - 2 Centered Features */}
//             <div className="flex gap-10 mb-5 justify-evenly">
//                 {features.slice(3, 5).map((feature, index) => (
//                     <motion.div
//                         key={index}
//                         className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                         variants={featureVariants}
//                         whileHover="hover"
//                     >
//                         <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
//                         <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
//                         <p className="text-gray-600 max-w-[200px]">{feature.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// }
