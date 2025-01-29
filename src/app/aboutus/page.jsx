'use client';

import React from 'react';
import Image from 'next/image';


const AboutUsPage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-purple-900 text-white py-16 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
                <p className="text-lg md:text-xl mt-4 px-6 max-w-3xl mx-auto">
                    InvesGaurai is a top service platform that empowers investors to reach their financial goals efficiently.
                </p>
            </section>

            {/* Mission, Vision, Core Values Section */}
            <section className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/* Mission */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-purple-900">MISSION</h3>
                        <p className="mt-4 text-gray-600">
                            To guide investors in reaching financial goals with peace of mind.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-purple-900 text-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold">VISION</h3>
                        <p className="mt-4">
                            To be a leading financial advisory firm through a knowledge-driven approach.
                        </p>
                    </div>

                    {/* Core Values */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-purple-900">CORE VALUES</h3>
                        <p className="mt-4 text-gray-600">
                            1. Knowledge <br /> 2. Integrity <br /> 3. Service <br /> 4. Trust <br /> 5. Innovation
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Experience Section */}
            <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-left">
                    <h2 className="text-3xl font-bold text-gray-900">Our Experience</h2>
                    <h3 className="text-2xl font-bold text-black mt-2">
                        Trusted Globally, Recognized Locally
                    </h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        With a proven track record of serving multinationals, research institutes,
                        defense and aerospace laboratories, educational institutions, and clients across the globe,
                        we’re dedicated to delivering reliable results and exceeding expectations.
                        Trust Metatech to be your partner in pushing the boundaries of materials analysis and achieving success in your endeavors.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image src="/images/image_1.png" alt="38 Years in Service" width={400} height={300} />
                </div>
            </section>

            {/* Read Our Blog Section */}
            <section className="container mx-auto py-16 text-center">
                <h2 className="text-3xl font-bold text-purple-900">Read Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {/* Blog Post 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold text-orange-500">Sensex is at an all-time high</h3>
                        <p className="text-gray-600 mt-2">What investors should do now?</p>
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                            Read More
                        </button>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold text-orange-500">Lessons from 2016</h3>
                        <p className="text-gray-600 mt-2">Key investment strategies learned.</p>
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                            Read More
                        </button>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold text-orange-500">Best Performing Mutual Funds</h3>
                        <p className="text-gray-600 mt-2">Should you invest only in them?</p>
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                            Read More
                        </button>
                    </div>
                </div>

                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition mt-8">
                    View All Posts
                </button>
            </section>

            {/* Contact CTA */}
            <section className="bg-purple-900 text-white py-16 text-center">
                <h2 className="text-2xl font-bold">Get in Touch for Better Understanding</h2>
                <input type="text" placeholder="Enter your email" className="mt-4 px-4 py-2 rounded-lg text-black" />
                <button className="ml-4 bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                    Subscribe
                </button>
            </section>

            
            
        </div>
    );
};

export default AboutUsPage;
