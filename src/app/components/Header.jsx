'use client';

import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [productsDropdown, setProductsDropdown] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <header className="bg-black opacity-70 phone:hidden">
                <div className="flex justify-end items-center p-2">
                    <nav>
                        <ul className="flex flex-row items-center space-x-1 py-1">
                            <li>
                                <a href="/#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
                                    Home
                                </a>
                            </li>

                            {/* Products with Dropdown */}
                            <li
                                className="relative"
                                onMouseEnter={() => setProductsDropdown(true)}
                                onMouseLeave={() => setProductsDropdown(false)}
                            >
                                <a href="#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
                                    Products
                                </a>

                                {/* Dropdown with Animation */}
                                <AnimatePresence>
                                    {productsDropdown && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-200 z-50 shadow-lg"
                                        >
                                            {[
                                                "Automatic Cutting Machine",
                                                "Diamond Cutting Machine",
                                                "Moulding Machines",
                                                "Grinding Machine",
                                                "Image Analyser",
                                                "Particle Size Analysis System",
                                                "In-situ Metallography Kit"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center justify-between hover:bg-gray-300 p-2 transition-all duration-200">
                                                    <a href="#">{item}</a>
                                                    <span className="text-black"><IoIosArrowForward /></span>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li>
                                <a href="#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="/aboutus" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
