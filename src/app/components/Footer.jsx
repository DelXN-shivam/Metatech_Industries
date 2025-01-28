'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <div>
            <section className="py-10 bg-gray-800 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
                    About Us
                </h2>
                <div className="container mx-auto flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6 px-4">
                    {/* Left Section: Company Details */}
                    <div className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg">
                        <div className="space-y-4">
                            {/* Logo */}
                            <div className=" bg-white p-4 flex items-start">
                                <img
                                    src="/images/metatech_logo.png" // Replace with your logo path
                                    alt="Company Logo"
                                    className="w-48 h-auto"
                                />
                            </div>


                            {/* Address & Contact */}
                            <p className="text-lg text-center lg:text-left">
                                476, Narayan Peth, Cosmos Bank Building, Off Laxmi Road, Pune - 411 030.
                            </p>
                            <p className="text-lg text-center lg:text-left">
                                Phone: <a href="tel:+919422526706" className="text-yellow-400">+91 94225 26706</a>
                            </p>
                            <p className="text-lg text-center lg:text-left">
                                Email: <a href="mailto:sales@metatechind.com" className="text-yellow-400">sales@metatechind.com</a>
                            </p>

                            {/* Products & Links */}
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Products</h3>
                                    <ul className="space-y-2">
                                        <li>Abrasive Sectioning</li>
                                        <li>Diamond Sectioning</li>
                                        <li>Hot/Cold Mounting</li>
                                        <li>Manual/Automatic Polishing</li>
                                        <li>Microscopes</li>
                                       
                                        
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
                                        <li><a href="#lab-service" className="hover:text-yellow-400">Lab Service</a></li>
                                        <li><a href="#product" className="hover:text-yellow-400">Product</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                            <a href="#" className="p-2 border rounded-lg border-white">
                                <Facebook style={{ fontSize: 24, color: 'white' }} />
                            </a>
                            <a href="#" className="p-2 border rounded-lg border-white">
                                <Instagram style={{ fontSize: 24, color: 'white' }} />
                            </a>
                            <a href="#" className="p-2 border rounded-lg border-white">
                                <LinkedIn style={{ fontSize: 24, color: 'white' }} />
                            </a>
                            <a href="#" className="p-2 border rounded-lg border-white">
                                <YouTube style={{ fontSize: 24, color: 'white' }} />
                            </a>
                        </div>
                    </div>

                    {/* Right Section: Map */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-64 md:h-80 lg:h-[550px]">
                            <Image
                                src="/images/map.png" // Replace with your map image path
                                alt="Location Map"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;