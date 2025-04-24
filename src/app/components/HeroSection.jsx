'use client';

import CompanyHeader from './CompanyLogo';
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
                    backgroundImage: "url('/images/bg8.jpg')"
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
                    {/* <Header /> */}

                    {/* Main Heading motion.section */}
                    <motion.div
                        className="flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <h1 className=" text-2xl md:text-5xl lg:text-4xl font-bold leading-tight pt-10 text-[#0f7db7]">
                            Most Advanced Machinery
                        </h1>
                        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold pt-4 leading-tight text-[#0f7db7]">
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
                className="relative"
                initial="hidden"
                animate="visible"
                variants={containerVarients}
            >

                <div className="flex justify-center -mt-[35px]">
                    <div className="bg-[#0f7db7] text-white font-semibold px-12 py-4 text-lg w-[360px] text-center">
                        40 years of Undefeated Success
                    </div>
                    <div className="bg-gray-700 text-white font-semibold px-12 py-4 text-lg w-[300px] text-center">
                        <a href="/aboutus">Explore US</a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
