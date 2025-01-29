'use client';

import React, { useEffect, useState } from 'react';
import MapPage from './MapService';

const QueryAndMap = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    return (
        <div>
            <section className={`py-10 bg-gray-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6 transition-transform duration-700 ease-in-out transform hover:scale-105">
                    Ask a Query
                </h2>

                {/* Content Wrapper */}
                <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 px-4">
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex items-center rounded-lg">
                        <div className="relative w-full h-64 md:h-80 lg:h-[380px] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                            <MapPage />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="border w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center lg:items-start transition-transform duration-500 hover:shadow-2xl">
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QueryAndMap;
