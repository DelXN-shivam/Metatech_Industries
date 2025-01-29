'use client';

import React from 'react';
import CompanyHeader from './CompanyHeader';
import Header from './Header';
import { motion } from 'framer-motion';

const HeroSection = () => {

    const containerVarients = {
        hidden: {
            opacity: 0, scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1, ease: 'easeInOut',
            }
        },
    };

    const buttonVarients = {
        hover: {
            scale: 1.1, transition: {
                duration: 0.3
            }
        },
    };

    return (
        <div>
            {/* Hero motion.section */}
            <motion.section
                className="relative bg-cover bg-center h-screen"
                style={{
                    backgroundImage: "url('/images/machine_bg.jpg')"
                }}
                initial="hidden"
                animate="visible"
                variants={containerVarients}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="max-w-screen-xl mx-auto text-center text-white relative px-6 md:px-8 lg:px-12 py-1">
                    <CompanyHeader />
                    <Header />

                    {/* Main Heading motion.section */}
                    <motion.div
                        className="flex flex-col max-w-screen-lg justify-start items-start pt-15 lg:pt-15"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold leading-tight pt-16">
                            Most Advanced Machinery
                        </h1>
                        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold pt-4 leading-tight">
                            MECHANICAL COMPANY
                        </h1>
                        <h3 className="font-semibold text-lg md:text-xl lg:pt-4">
                            Real Measuring System,
                        </h3>
                        <h3 className="font-semibold text-lg md:text-xl">
                            Reliability, and Performance
                        </h3>

                        {/* Buttons */}
                        <div className="space-x-2 sm:space-x-8 pt-10">
                            <a
                                href="#about"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 border border-black font-semibold"
                            >
                                Read More
                            </a>
                            <a
                                href="/aboutus"
                                className="bg-gray-500 hover:bg-orange-600 text-white px-5 py-2 border border-white font-semibold"
                            >
                                About Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.div
                className="absolute inset-x-0 -bottom-7 transform -translate-x-1/2 lg:pt-20 flex sm:flex-row items-center justify-center space-y-4 sm:space-y-0 z-10"
                initial="hidden"
                animate="visible"
                variants={containerVarients}
            >
                <div className="bg-orange-500 text-white font-semibold px-6 py-4 text-lg w-80 text-center shadow-lg">
                    40 Years of Undefeated Success
                </div>
                <div  className="bg-gray-500 text-white font-semibold px-10 py-4 text-lg w-80 text-center shadow-lg">
                    <a href="/aboutus">Explore Us !</a>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
