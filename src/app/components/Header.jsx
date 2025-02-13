'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const router = useRouter();

    const categories = [
        {
            title: "Automatic Cutting Machines",
            route: "/productDetails",
            items: [
                "Automatic Cutting Machines - Auto Cut",
                "Automatic Cutting Machines - Auto S",
                "Automatic Cutting Machines - MetaCut",
                "Oscillating Abrasive Cut-off Machines",
                "MetaCut-I",
                "Tube Cutting Machines",
            ],
        },
        {
            title: "Diamond Cutting Machines",
            route: "/automatic-cutting-machines",
            items: ["DPCM", "Hi Speed DCM"],
        },
        {
            title: "Image Analyzer",
            route: "/automatic-cutting-machines",
            items: ["Grain Analysis", "Planimetry Method", "Phase Analysis", "Graphite", "Point Counter", "Inclusion",],
        },
        {
            title: "Moulding Machines",
            route: "/automatic-cutting-machines",
            items: [
                "Moulding Machine - Automount E",
                "Electro Hydraulic Press - Automount EH",
                "Pneumatic Press - Automount",
                "Transparent Mould Making Machine",
            ],
        },
        {
            title: "Grinding Machines",
            route: "/automatic-cutting-machines",
            items: [
                "Metapol DC II",
                "Semi-Automatic Grinding Polishing",
                "Multi-Specimen Grinding Machine",
                "Heavy Duty Belt Grinder",
                "Belt Grinder",
            ],
        },
        {
            title: "Hardness Tester",
            route: "/automatic-cutting-machines",
            items: [
                "Portable Vickers Hardness Tester",
                "Portable Brinell Hardness Tester",
                "Rockwell Hardness Tester",
                "Brinell Hardness Tester",
                "Leeb Hardness Tester",
            ],
        },
        {
            title: "Automatic Micro Hardness Tester",
            route: "/automatic-cutting-machines",
            items: [
                "MHT - (MVH-1000)",
                "MHT - (MVH-1C)",
                "MHT - (MVMH)",
                "Repair & MHT",
            ]
        },
        {
            title: "Microscope and Image Analyzer",
            route: "/automatic-cutting-machines",
            items: [
                "Inverted Microscope",
                "Inverted Microscope - Metagraph",
                "Upright Microscope",
                "Stereo Microscope"
            ]
        },
        {
            title: "Particle Size Analysis System",
            route: "/automatic-cutting-machines",
            items: [
                "PSAS - Stereo Microscope",
                "PSAS - Metallurgical Microscope",
                "Component Cleaning Machine"
            ]
        },
        {
            title: "Hardness Test Block Diamond Indenters",
            route: "/automatic-cutting-machines",
            items: [
                "Rockwell",
                "Rockwell Superficial",
                "Vickers",
                "Micro Vickers",
                "Brinell",
                "Aluminium Test Blocks"
            ]
        },
        {
            title: "In-situ Metallography Kit",
            route: "/automatic-cutting-machines",
            items: [
                "Portable Grinder",
                "Portable Electro Polisher",
                "Replica",
                "Portable Microscope Image Analyzer"
            ]
        },
    ];

    return (
        <header className="mt-6">
            <div className='flex flex-row gap-32'>
                <div>
                    <a href="/">
                        <div className="bg-white p-4 rounded-lg">
                            <Image
                                src="/images/metatech_logo.png"
                                width={230}
                                height={80}
                                alt="Metatech Logo"
                            />
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center p-0">
                    <nav>
                        <ul className="flex flex-row items-center space-x-8">
                            <li>
                                <a href="/" className="text-blue-500 text-lg font-semibold bg-slate-100 py-3 px-5 rounded-full">
                                    Home
                                </a>
                            </li>

                            {/* Products Dropdown */}
                            <li
                                className="relative"
                                onMouseEnter={() => setProductsDropdown(true)}
                                onMouseLeave={() => setProductsDropdown(false)}
                            >
                                <button className="hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    Products
                                </button>

                                <AnimatePresence>
                                    {productsDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute -left-[570px] mt-1 w-[1350px] bg-white shadow-lg rounded-lg p-2 z-50"
                                        >
                                            <div className="grid grid-cols-4 gap-4">
                                                {categories.map((category, index) => (
                                                    <div key={index} className="p-4 border rounded-lg">
                                                        <button
                                                            onClick={() => router.push(`/productlisting/${category.title}`)}
                                                            className={`font-semibold flex items-center gap-2 cursor-pointer ${activeCategory === category.title ? 'text-blue-800' : 'text-blue-600 hover:text-blue-800'
                                                                }`}
                                                        >
                                                            <FaTools /> {category.title}
                                                        </button>
                                                        <ul className="mt-2 space-y-1">
                                                            {category.items.map((item, i) => (
                                                                <li key={i} className="text-gray-700 text-sm flex items-center">
                                                                    <Link href={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-500">
                                                                        ⚙ {item}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li>
                                <a href="/courses" className="hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="/aboutus" className="hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/demo" className="hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
