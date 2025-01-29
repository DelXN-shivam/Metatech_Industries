'use client';

import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    return (
        <footer className={`bg-black text-white py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6 lg:px-10">
                
                {/* Left Section: Logo & Contact */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                    <div className="bg-white p-4 mb-4 rounded-lg transform transition duration-500 hover:scale-105">
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
                        Phone: <a href="tel:+919422526706" className="text-white font-semibold hover:text-blue-400 transition duration-300">+91 94225 26706</a>
                    </p>
                    <p className="text-sm mb-4 text-center lg:text-left">
                        Email: <a href="mailto:sales@metatechind.com" className="text-white font-semibold hover:text-blue-400 transition duration-300">sales@metatechind.com</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-3">
                        {[Facebook, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="p-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transform transition duration-300 hover:scale-110 shadow-md"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle & Right Section: Products & Quick Links */}
                <div className="w-full lg:w-2/3 flex flex-row justify-between">
                    
                    {/* Products Section (Left) */}
                    <div className="w-1/2 text-left">
                        <h3 className="text-lg font-bold mb-2">Products</h3>
                        <ul className="space-y-2">
                            {["Abrasive Sectioning", "Diamond Sectioning", "Hot/Cold Mounting", "Manual/Automatic Polishing", "Microscopes"].map((item, index) => (
                                <li key={index} className="cursor-pointer">
                                    <span className="hover:text-blue-400 transition duration-300 transform hover:translate-x-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Section (Right) */}
                    <div className="w-1/2 text-right">
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "Products", "Lab Service", "Course", "About", "Contact"].map((link, index) => (
                                <li key={index} className="cursor-pointer">
                                    <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-blue-400 transition duration-300 transform hover:translate-x-1">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
