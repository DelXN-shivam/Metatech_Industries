'use client';

import React, { useState } from 'react';

const Header = () => {
    const [productsDropdown, setProductsDropdown] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <header className="bg-black text-white p-4 opacity-90">
                <div className="flex justify-end">
                    <nav>
                        <div></div>
                        <ul className="flex flex-row items-center">
                            <li>
                                <a href="#" className="hover:text-orange-500 text-2xl">
                                    Home
                                </a>
                            </li>

                            {/* Products with Dropdown */}
                            <li
                                className="relative"
                                onMouseEnter={() => setProductsDropdown(true)}
                                onMouseLeave={() => setProductsDropdown(false)}
                            >
                                <a href="#" className="hover:text-orange-500 text-2xl">
                                    Products
                                </a>
                                {productsDropdown && (
                                    <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-200 z-50">
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Automatic Cutting Machine</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Diamond Cutting Machine</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Moulding Machines</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Grinding Machine</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Microscope and Image Analyser</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Image Analyser</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Particle Size Analysis System</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">In-situ Metallography Kit</a></li>
                                        <li className="hover:bg-gray-100 p-2"><a href="#">Automatic Micro Hardness Tester</a></li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <a href="#" className="hover:text-orange-500 text-2xl">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 text-2xl">
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
