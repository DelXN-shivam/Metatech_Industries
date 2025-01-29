'use client';

import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, LinkedIn, YouTube, ArrowUpward, Star } from '@mui/icons-material';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
        window.addEventListener("scroll", () => {
            setShowScroll(window.scrollY > 300);
        });
    }, []);

    return (
        <footer className={`bg-black text-white py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-10">
                
                {/* Left Section: Logo & Contact */}
                <div className="flex flex-col items-center lg:items-start gap-2">
                    <div className="bg-white p-4 mb-4 rounded-lg transform transition duration-500 hover:scale-105">
                        <img src="/images/metatech_logo.png" alt="Metatech Logo" className="w-40" />
                    </div>
                    <p className="text-sm text-center lg:text-left">
                        476, Narayan Peth, Cosmos Bank Building, <br />
                        Off Laxmi Road, Pune - 411 030.
                    </p>
                    <p className="text-sm">
                        Phone: <a href="tel:+919422526706" className="text-blue-400 hover:underline">+91 94225 26706</a>
                    </p>
                    <p className="text-sm">
                        Email: <a href="mailto:sales@metatechind.com" className="text-blue-400 hover:underline">sales@metatechind.com</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-3 mt-4">
                        {[Facebook, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                            <a key={index} href="#" className="p-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition transform hover:scale-110 shadow-md">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Products Section */}
                <div>
                    <h3 className="text-lg font-bold mb-3">Our Products</h3>
                    <ul className="space-y-2">
                        {["Abrasive Sectioning", "Diamond Sectioning", "Hot/Cold Mounting", "Manual/Automatic Polishing", "Microscopes"].map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-blue-400 transition">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {["Home", "Products", "Lab Service", "Course", "Contact", "FAQs"].map((link, index) => (
                            <li key={index} className="cursor-pointer hover:text-blue-400 transition">
                                <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Testimonials */}
                <div>
                    <h3 className="text-lg font-bold mb-3">What Our Clients Say</h3>
                    <div className="bg-gray-800 p-4 rounded-lg text-sm italic">
                        "Metatech provides top-quality products and amazing customer support!"
                        <span className="block mt-2 font-semibold text-blue-400">— Rajesh P.</span>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-sm italic mt-2">
                        "Highly recommend! Great experience and quality products."
                        <span className="block mt-2 font-semibold text-blue-400">— Sneha M.</span>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
