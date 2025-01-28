'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CompanyHeader from './CompanyHeader';
import Header from './Header';

const HeroSection = () => {
    const [activeButton, setActiveButton] = useState('readMore'); // Manage active button state

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType); // Set the clicked button as active
    };

    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { duration: 0.3 } },
    };

    return (
        <div>
            {/* Hero Section */}
            <motion.section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: "url('/images/machine_bg.jpg')" }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="max-w-screen-xl mx-auto text-center text-white relative px-6 md:px-8 lg:px-12 py-4">
                    <CompanyHeader />
                    <Header />

                    {/* Main Heading Section */}
                    <motion.div
                        className="flex flex-col max-w-screen-lg justify-start items-start pt-16 lg:pt-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Most Advanced Machinery
                        </h1>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pt-4 leading-tight">
                            MECHANICAL COMPANY
                        </h1>
                        <h3 className="font-semibold text-lg md:text-xl lg:pt-4">
                            Real Measuring System,
                        </h3>
                        <h3 className="font-semibold text-lg md:text-xl">
                            Reliability, and Performance
                        </h3>

                        {/* Buttons */}
                        <div className="space-x-4 sm:space-x-10 pt-10">
                            <motion.button
                                onClick={() => handleButtonClick('readMore')}
                                className={`px-6 py-3 font-semibold border rounded-md transition-all duration-300 ease-in-out transform 
                                    ${
                                        activeButton === 'readMore'
                                            ? 'bg-orange-500 text-white border-black shadow-lg'
                                            : 'bg-gray-500 text-white border-gray-300'
                                    }`}
                                whileHover="hover"
                                variants={buttonVariants}
                            >
                                Read More
                            </motion.button>
                            <motion.button
                                onClick={() => handleButtonClick('aboutUs')}
                                className={`px-6 py-3 font-semibold border rounded-md transition-all duration-300 ease-in-out transform 
                                    ${
                                        activeButton === 'aboutUs'
                                            ? 'bg-orange-500 text-white border-black shadow-lg'
                                            : 'bg-gray-500 text-white border-gray-300'
                                    }`}
                                whileHover="hover"
                                variants={buttonVariants}
                            >
                                About Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Info Boxes */}
            <motion.div
                className="absolute -bottom-7 inset-0 left-1/2 transform -translate-x-1/2 lg:pt-20 flex flex-col sm:flex-row items-end justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="bg-orange-500 text-white font-semibold px-6 py-4 text-lg w-80 text-center shadow-lg">
                    38 Years of Undefeated Success
                </div>
                <div className="bg-gray-800 text-white font-semibold px-10 py-4 text-lg w-80 text-center shadow-lg">
                    Explore Us!
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
