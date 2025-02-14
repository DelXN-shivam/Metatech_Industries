'use client';

import CompanyHeader from './CompanyHeader';
import Header from './Header';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ImageScrolling from '../components/ImageScrolling' 

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
                className="relative bg-contain bg-center h-full"
                style={{
                    // backgroundImage: "url('/images/bg5.jpg')"
                    // backgroundImage: "url('/images/bg1.jpg')"
                    // backgroundImage: "url('/images/bg7.jpg')"
                    backgroundImage: "url('/images/bg8.jpg')"
                    // backgroundImage: "url('/images/main_new_bg.jpg')"
                }}
                initial="hidden"
                animate="visible"
                variants={containerVarients}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gray-700 opacity-30"></div>

                {/* Content */}
                <div className="max-w-screen-xl mx-auto text-center text-white relative px-6 py-1">
                    {/* <CompanyHeader /> */}
                    <Header />

                    {/* Main Heading motion.section */}
                    <motion.div
                        className="flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <h1 className=" text-2xl md:text-5xl lg:text-4xl font-bold leading-tight pt-10 text-blue-800">
                            Most Advanced Machinery
                        </h1>
                        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold pt-4 leading-tight text-blue-800">
                            MECHANICAL COMPANY
                        </h1>
                        <h3 className="font-semibold text-lg md:text-xl lg:pt-4 text-black">
                            Real Measuring System,
                        </h3>
                        <h3 className="font-semibold text-lg md:text-xl text-black">
                            Reliability, and Performance
                        </h3>
                    </motion.div>
                    <ImageScrolling />
                </div>
            </motion.section>
            
            <motion.div
                className="absolute inset-x-0 bottom-24 transform -translate-x-1/2 flex sm:flex-row items-center justify-center space-y-4 sm:space-y-0 z-10"
                initial="hidden"
                animate="visible"
                variants={containerVarients}
            >
                <div className="bg-blue-400 text-white font-semibold px-6 py-4 text-lg w-80 text-center shadow-lg">
                    40 Years of Undefeated Success
                </div>
                <div className="bg-gray-500 text-white font-semibold px-10 py-4 text-lg w-80 text-center shadow-lg">
                    <a href="/aboutus">Explore Us !</a>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
