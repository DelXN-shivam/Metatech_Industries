'use client';

import React from 'react';
import Image from 'next/image';
import CompanyHeader from '../components/CompanyHeader';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import VisionMission from '../components/VisionAndCoreValues';

const AboutUsPage = () => {

    // Variants for general section animation on load
    const containerVarients = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2, ease: 'easeInOut',
            }
        },
    };

    // Variants for buttons hover animation
    const buttonVarients = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            }
        },
    };

    // Scroll animation variant for each section
    const scrollVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <motion.section
                className="relative bg-cover bg-center h-screen opacity-50"
                style={{
                    backgroundImage: "url('/images/aboutus_bg.jpg')"
                }}
                initial="hidden"
                animate="visible"
                variants={containerVarients}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="max-w-screen-xl mx-auto text-center items-center justify-center text-white relative px-6 md:px-8 lg:px-12 py-1">
                    <CompanyHeader />
                    <Header />

                    {/* Main Heading motion.div */}
                    <div className="justify-evenly text-right flex flex-row pt-12 ">
                        <Image src="/images/40_Years_Image.png" alt="40 Years in Service" width={500} height={500} className='animate-image-lightning-bg overflow-hidden'/>
                        <div className='space-y-6'>
                            <motion.h1
                                className="text-5xl font-bold leading-tight text-orange-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 1 }}
                            >
                                About Us
                            </motion.h1>
                            <motion.p
                                className="w-96 leading-relaxed text-balance hover:underline"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 1 }}
                            >
                                At Metatech, we’re not just a provider of Metallography solutions – we’re your trusted partner in materials
                                analysis and innovation. With over 40 years of industry experience, we’ve honed our expertise to offer a comprehensive
                                suite of services and facilities that empower our clients to achieve their goals with confidence.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Vision and Mission Section */}
            <VisionMission />

            {/* Our Experience Section */}
            <motion.section
                className="container mx-auto px-16 flex flex-col md:flex-row items-center"
                initial="hidden"
                animate="visible"
                variants={scrollVariant}
            >
                <div className="md:w-1/2 text-left">
                    <motion.h2
                        className="text-5xl font-bold text-orange-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        Our Experience
                    </motion.h2>
                    <motion.h3
                        className="text-2xl font-bold text-orange-400 mt-2 hover:underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Trusted Globally, Recognized Locally
                    </motion.h3>
                    <motion.p
                        className="mt-4 text-gray-700 leading-relaxed text-balance"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        With a proven track record of serving multinationals, research institutes, defense and aerospace laboratories,
                        educational institutions, and clients across the globe, we’re dedicated to delivering reliable results and exceeding expectations.
                        Trust Metatech to be your partner in pushing the boundaries of materials analysis and achieving success in your endeavors.
                    </motion.p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image src="/images/experience.png" alt="Our Experiences" width={500} height={400} className='rounded-xl hover:scale-105 shadow-md transition-shadow duration-900'/>
                </div>
            </motion.section>

            {/* Our Services Section */}
            <motion.section
                className="container mx-auto py-10 text-center"
                initial="hidden"
                animate="visible"
                variants={scrollVariant}
            >
                <motion.h2
                    className="text-5xl font-bold text-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-16">
                    {/* Service 1 */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                        whileHover="hover"
                        variants={buttonVarients}
                    >
                        <h3 className="text-lg font-bold text-orange-500">Metallography Analysis</h3>
                        <p className="text-gray-600 mt-2">Detailed analysis of material properties through advanced metallography techniques.</p>
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                        whileHover="hover"
                        variants={buttonVarients}
                    >
                        <h3 className="text-lg font-bold text-orange-500">Materials Testing</h3>
                        <p className="text-gray-600 mt-2">Comprehensive testing services to assess material quality and performance under various conditions.</p>
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                        whileHover="hover"
                        variants={buttonVarients}
                    >
                        <h3 className="text-lg font-bold text-orange-500">Consulting & Support</h3>
                        <p className="text-gray-600 mt-2">Expert consulting services to guide your projects and ensure optimal material choices.</p>
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                <motion.h1
                    className="text-orange-500 text-xl font-bold hover:text-2xl mt-8 text-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    View All Services
                </motion.h1>
            </motion.section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;
