'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
    const expertiseData = [
        {
            title: 'Automatic Cutting Machines',
            image: '/images/image_1.png',
        },
        {
            title: 'Spectro Grinding Machines',
            image: '/images/image_2.jpg',
        },
        {
            title: 'Automatic Cutting Machines',
            image: '/images/image_3.png',
        },
        {
            title: 'Polishing Machines',
            image: '/images/image_4.png',
        },
        {
            title: 'Repair and Maintenance Services',
            image: '/images/image_5.png',
        },
        {
            title: 'Hot/Cold Mounting',
            image: '/images/image_6.png',
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.07, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' },
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            className="p-4 sm:p-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Title */}
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
                Explore Our Expertise
            </motion.h2>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertiseData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full overflow-hidden shadow-md transition-shadow duration-300 rounded-lg bg-gray-100 flex flex-col items-center hover:underline"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="w-full p-4 bg-white rounded-b-lg hover:bg-slate-100">
                            <h3 className="text-lg font-semibold text-gray-800 text-center">
                                {item.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Explore More */}
            <motion.div
                className="mt-8 text-center"
                whileHover="hover"
                variants={buttonVariants}
            >
                <a
                    href="#"
                    className="text-orange-500 font-bold text-lg flex items-center justify-center space-x-2 hover:underline sm:text-base md:text-lg lg:text-xl"
                >
                    <span>Explore More</span>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                        />
                    </motion.svg>
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ExpertiseSection;
