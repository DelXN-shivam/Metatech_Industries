import React from 'react';
import CompanyHeader from './CompanyHeader';
import Header from './Header';

const HeroSection = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: "url('/images/machine_bg.jpg')" }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="max-w-screen-xl mx-auto text-center text-white relative z-10 px-6 md:px-8 lg:px-12 py-8">
                    <CompanyHeader />
                    <Header />

                    {/* Main Heading Section */}
                    <div className="flex flex-col max-w-screen-lg mx-auto justify-start items-start pt-20 lg:pt-28">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Most Advanced Machinery
                        </h1>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pt-4 leading-tight">
                            MECHANICAL COMPANY
                        </h1>
                        <h3 className="font-bold text-lg md:text-xl pt-8">
                            Real Measuring System,
                        </h3>
                        <h3 className="font-bold text-lg md:text-xl">
                            Reliability, and Performance
                        </h3>

                        {/* Buttons */}
                        <div className="space-x-4 sm:space-x-10 pt-10">
                            <a
                                href="#about"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg border border-black font-semibold"
                            >
                                Read More
                            </a>
                            <a
                                href="#about"
                                className="bg-gray-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg border border-white font-semibold"
                            >
                                About Us
                            </a>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className=" lg:pt-20 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <div className="bg-orange-500 text-white font-semibold px-6 py-4 text-lg w-80 text-center rounded-lg shadow-lg">
                            38 Years of Undefeated Success
                        </div>
                        <div className="bg-gray-800 text-white font-semibold px-10 py-4 text-lg w-80 text-center rounded-lg shadow-lg">
                            Explore Us!
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
