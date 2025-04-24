'use client';

import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    return (
        <footer
            className={`relative text-white py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
                backgroundImage: "url('/images/footer.png')", // Change this path to your image
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay for better contrast */}

            <div className="relative container mx-auto flex flex-wrap justify-evenly px-6 lg:px-10">
                {/* Logo Section */}
                <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-1/4">
                    <a href="/"><div className="bg-white p-4 mb-4 rounded-lg transform transition duration-500 hover:scale-105">
                        <img src="/images/metatech_logo.png" alt="Metatech Logo" className="w-56" />
                    </div></a>
                    <div className="bg-gray-800 p-2 mt-2 rounded-lg text-center lg:w-64 lg:text-left px-8 py-4">
                        <h4 className="text-lg font-semibold text-white">Why Choose Us?</h4>
                        <p className="text-sm text-gray-400 mt-2">With decades of expertise, cutting-edge technology, and unparalleled customer service, Metatech Industries is your trusted partner.</p>
                    </div>
                </div>

                {/* Our Products Section */}
                <div className="w-full lg:w-1/4">
                    <h3 className="text-lg font-bold mb-3">Our Products</h3>
                    <ul className="space-y-2">
                        {["Abrasive Sectioning", "Diamond Sectioning", "Hot/Cold Mounting", "Manual/Automatic Polishing", "Microscopes"].map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-[#0f7db7] transition">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="w-full lg:w-1/4">
                    <h3 className="text-lg font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {["Home", "Products", "Lab Service", "Course", "Contact", "FAQs"].map((link, index) => (
                            <li key={index} className="cursor-pointer hover:text-[#0f7db7] transition">
                                <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className="w-full lg:w-1/4 bg-gray-800 px-10 -mt-3 pt-3 rounded-lg space-y-2">
                    <h3 className="text-lg font-bold mb-3">Contact Us</h3>
                    <p className="text-sm hover:underline hover:text-[#0f7db7]">
                        Cosmos Bank Bldg, 476, Laxmi Rd, Bhatancha Bol, Narayan Peth, Pune, Maharashtra 411030
                    </p>
                    <p className="text-sm">
                        Phone: <a href="tel:+919422526706" className="text-[#0f7db7] hover:underline">+91 94225 26706</a>
                    </p>
                    <p className="text-sm">
                        Email: <a href="mailto:sales@metatechind.com" className="text-[#0f7db7] hover:underline">sales@metatechind.com</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-3 mt-4">
                        {[Facebook, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                            <a key={index} href="#" className="p-2 bg-white text-black rounded-lg hover:bg-[#0f7db7] hover:text-white transition transform hover:scale-110 shadow-md">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='relative pt-12 text-center text-gray-300'>
                © 2024 <span className='hover:text-[#0f7db7]'><a href="/#">Metatech Industries</a></span>.
                All rights reserved. Managed by
                <span className='hover:text-red-500'>
                    <a href="https://delxntech.com/" target="_blank" rel="noopener noreferrer"> DelXN Technologies</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
