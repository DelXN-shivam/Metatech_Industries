'use client';

import React from 'react';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4">
                {/* Left Section: Logo & Contact */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                    <div className="bg-white p-4 mb-4 rounded-lg">
                        <img
                            src="/images/metatech_logo.png"
                            alt="Metatech Logo"
                            className="w-56"
                        />
                    </div>
                    <p className="text-sm mb-2 text-center lg:text-left">
                        476, Narayan Peth, Cosmos Bank Building, <br />
                        Off Laxmi Road, Pune - 411 030.
                    </p>
                    <p className="text-sm mb-2 text-center lg:text-left">
                        Phone: <a href="tel:+919422526706" className="text-white font-semibold">+91 94225 26706</a>
                    </p>
                    <p className="text-sm mb-4 text-center lg:text-left">
                        Email: <a href="mailto:sales@metatechind.com" className="text-white font-semibold">sales@metatechind.com</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-3">
                        <a href="#" className="p-2 bg-white text-blue-500 rounded-lg">
                            <Facebook />
                        </a>
                        <a href="#" className="p-2 bg-white text-blue-500 rounded-lg">
                            <Instagram />
                        </a>
                        <a href="#" className="p-2 bg-white text-blue-500 rounded-lg">
                            <LinkedIn />
                        </a>
                        <a href="#" className="p-2 bg-white text-blue-500 rounded-lg">
                            <YouTube />
                        </a>
                    </div>
                </div>

                {/* Middle Section: Products */}
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                    <h3 className="text-lg font-bold mb-2">Products</h3>
                    <ul className="space-y-1">
                        <li>Abrasive Sectioning</li>
                        <li>Diamond Sectioning</li>
                        <li>Hot/Cold Mounting</li>
                        <li>Manual/Automatic Polishing</li>
                        <li>Microscopes</li>
                    </ul>
                </div>

                {/* Right Section: Quick Links */}
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                    <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#products" className="hover:underline">Products</a></li>
                        <li><a href="#lab-service" className="hover:underline">Lab Service</a></li>
                        <li><a href="#course" className="hover:underline">Course</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
