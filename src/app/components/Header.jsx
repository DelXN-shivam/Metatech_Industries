'use client';

import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [dropdownStates, setDropdownStates] = useState({});

    const handleMouseEnter = (dropdownId) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [dropdownId]: true,
        }));
    };

    const handleMouseLeave = (dropdownId) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [dropdownId]: false,
        }));
    };

    return (
        <div>
            {/* Navbar */}
            <header className="bg-black opacity-70">
                <div className="flex justify-end items-center p-2">
                    <nav>
                        <ul className="flex flex-row items-center space-x-1 py-1">
                            <li>
                                <a href="#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
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
                                {productsDropdown && (
                                    <ul
                                        className="items-start justify-between absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-200 z-50"
                                        onMouseEnter={() => handleMouseEnter('products')}
                                        onMouseLeave={() => handleMouseLeave('products')}
                                    >
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">Automatic Cutting Machine</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">Diamond Cutting Machine</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">Moulding Machines</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">Grinding Machine</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">Image Analyser</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">Particle Size Analysis System</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                        <li className="flex items-center justify-between hover:bg-gray-300 p-2">
                                            <a href="#">In-situ Metallography Kit</a>
                                            <span className="text-black"><IoIosArrowForward /></span>
                                        </li>
                                    </ul>

                                )}
                            </li>

                            <li>
                                <a href="#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 text-base font-semibold hover:bg-slate-100 py-3 px-2">
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



// 'use client';

// import React, { useState } from 'react';

// const Header = () => {
//     const [productsDropdown, setProductsDropdown] = useState(false);

//     return (
//         <div>
//             {/* Navbar */}
//             <header className="bg-black opacity-70">
//                 <div className="flex justify-end items-center p-2">
//                     <nav>
//                         <ul className="flex flex-row items-center space-x-5 py-1">
//                             <li>
//                                 <a href="#" className="hover:text-orange-500 text-2xl">
//                                     Home
//                                 </a>
//                             </li>
//                             <li
//                                 className="relative"
//                                 onMouseEnter={() => setProductsDropdown(true)}
//                                 onMouseLeave={() => setProductsDropdown(false)}
//                             >
//                                 <a href="#" className="hover:text-orange-500 text-2xl">
//                                     Products
//                                 </a>
//                                 {productsDropdown && (
//                                     <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-black border border-gray-200 z-50">
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Automatic Cutting Machine</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Diamond Cutting Machine</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Moulding Machines</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Grinding Machine</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Microscope and Image Analyser</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Image Analyser</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Particle Size Analysis System</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">In-situ Metallography Kit</a></li>
//                                         <li className="hover:bg-gray-100 p-2"><a href="#">Automatic Micro Hardness Tester</a></li>
//                                     </ul>
//                                 )}
//                             </li>

//                             <li>
//                                 <a href="#" className="hover:text-orange-500 text-2xl">
//                                     About Us
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="hover:text-orange-500 text-2xl">
//                                     Contact
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Header;
