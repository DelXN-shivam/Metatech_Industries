'use client';

import Image from 'next/image';
import React from 'react';


const QueryAndMap = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50">
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl  font-bold text-center text-black mb-6">
                    Ask a Query
                </h2>

                {/* Content Wrapper */}
                <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 px-2">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="relative w-full h-64 md:h-80 lg:h-[380px]">
                            <Image
                                src="/images/laptop.jpg"
                                alt="Machine Background"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="border w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center lg:items-start">
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                                Request for a Machine
                            </h2>
                            <form>
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Product"
                                        className="border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Textarea */}
                                <textarea
                                    placeholder="Describe the product"
                                    className="border border-orange-300 rounded-md p-2 mt-4 w-full h-24 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                ></textarea>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md mt-4 w-full hover:bg-orange-500"
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

export default MapPage;
