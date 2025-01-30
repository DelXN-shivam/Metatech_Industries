'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MapPage from './MapService';
import GoogleMap from './MapService';

const QueryAndMap = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Function to handle visibility check
    const checkVisibility = () => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check on mount

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    // Animation Variants with reduced x-values
    const leftAnimation = {
        hidden: { opacity: 0, x: -30 }, 
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const rightAnimation = {
        hidden: { opacity: 0, x: 30 }, 
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="overflow-hidden">
            <section
                ref={sectionRef}
                className="w-full py-10 bg-gray-50 transition-opacity duration-1000 overflow-hidden"
            >
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
                    Ask a Query
                </h2>

                {/* Content Wrapper */}
                <div className="w-full mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 px-8">
                    
                    {/* Image Section with Animation */}
                    <motion.div
                        className="w-full lg:w-1/2 flex items-center rounded-lg"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={leftAnimation}
                    >
                        <div className="relative w-full h-64 md:h-80 lg:h-[380px] rounded-lg overflow-hidden shadow-lg">
                            {/* <MapPage /> */}
                            <GoogleMap />
                        </div>
                    </motion.div>

                    {/* Form Section with Animation */}
                    <motion.div
                        className="border w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center lg:items-start transition-transform duration-500 hover:shadow-2xl"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={rightAnimation}
                    >
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left transform transition duration-500 hover:text-orange-500">
                                Request for a Machine
                            </h2>
                            <form className="space-y-4">
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform duration-300 hover:scale-105"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform duration-300 hover:scale-105"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform duration-300 hover:scale-105"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Product"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* Textarea */}
                                <textarea
                                    placeholder="Describe the product"
                                    className="border border-orange-300 rounded-md p-2 mt-4 w-full h-24 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform duration-300 hover:scale-105"
                                ></textarea>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md mt-4 w-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default QueryAndMap;
