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
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-10">
                
                {/* Left Section: Logo & Contact */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="bg-white p-4 mb-4 rounded-lg transform transition duration-500 hover:scale-105">
                        <img
                            src="/images/metatech_logo.png"
                            alt="Metatech Logo"
                            className="w-56"
                        />
                    </div>
                    <p className="text-sm mb-2 text-center md:text-left">
                        476, Narayan Peth, Cosmos Bank Building, <br />
                        Off Laxmi Road, Pune - 411 030.
                    </p>
                    <p className="text-sm mb-2 text-center md:text-left">
                        Phone: <a href="tel:+919422526706" className="text-white font-semibold hover:text-blue-400 transition duration-300">+91 94225 26706</a>
                    </p>
                    <p className="text-sm mb-4 text-center md:text-left">
                        Email: <a href="mailto:sales@metatechind.com" className="text-white font-semibold hover:text-blue-400 transition duration-300">sales@metatechind.com</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start space-x-3">
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

                {/* Middle Section: Products */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-bold mb-2">Products</h3>
                    <ul className="space-y-2">
                        {["Abrasive Sectioning", "Diamond Sectioning", "Hot/Cold Mounting", "Manual/Automatic Polishing", "Microscopes"].map((item, index) => (
                            <li key={index}>
                                <span className="cursor-pointer hover:text-blue-400 transition duration-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section: Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        {["Home", "Products", "Lab Service", "Course", "About", "Contact"].map((link, index) => (
                            <li key={index}>
                                <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="cursor-pointer hover:text-blue-400 transition duration-300">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
