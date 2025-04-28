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
                "High-Precision Servo Cut",
            ],
        },
        {
            title: "Diamond Cutting Machines",
            route: "/automatic-cutting-machines",
            items: [
                "DPCM",
                "Hi Speed DCM",
                "Ultra-Thin Diamond Cutter",
                "Heavy-Duty Diamond Saw",
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
                "Planetary Grinding System",
                "Dual-Head Grinder",
            ],
        },
        {
            title: "Hardness Tester",
            route: "/automatic-cutting-machines",
            items: [
                "Portable Vickers Hardness Tester",
                "Portable Brinell Hardness Tester",
                "Rockwell Hardness Tester",
                "Leeb Hardness Tester",
                "Universal Hardness Tester",
                "Automated Hardness Testing System",
            ],
        },
        {
            title: "Microscope and Image Analyzer",
            route: "/automatic-cutting-machines",
            items: [
                "Inverted Microscope",
                "Inverted Microscope - Metagraph",
                "Upright Microscope",
                "Stereo Microscope",
                "Digital Microscope",
                "High-Resolution Image Analyzer",
            ],
        },
        {
            title: "Moulding Machines",
            route: "/automatic-cutting-machines",
            items: [
                "Moulding Machine - Automount E",
                "Electro Hydraulic Press - Automount EH",
                "Pneumatic Press - Automount",
                "Transparent Mould Making Machine",
                "Dual-Station Mould Press",
            ],
        },
    ];

    const consumables = [
        {
            title: "Cutting Machine Consumables",
            route: "/consumables/cutting",
            items: [
                "Diamond Cutting Blades",
                "Abrasive Cutting Wheels",
                "Precision Wafering Blades",
                "Resin-Bonded Abrasive Blades",
                "Cooling Lubricants",
            ],
        },
        {
            title: "Grinding Machine Consumables",
            route: "/consumables/grinding",
            items: [
                "Grinding Wheels",
                "Silicon Carbide Grinding Papers",
                "Electroplated Diamond Discs",
                "Grinding Lubricants",
                "Abrasive Belts",
            ],
        },
        {
            title: "Polishing Consumables",
            route: "/consumables/polishing",
            items: [
                "Polishing Pads",
                "Diamond Paste",
                "Polycrystalline Diamond Suspension",
                "Monocrystalline Diamond Suspension",
                "Alumina Polishing Powders",
            ],
        },
        {
            title: "Mounting Consumables",
            route: "/consumables/mounting",
            items: [
                "Mounting Resin",
                "Epoxy Compounds",
                "Phenolic Powders",
                "Cold Mounting Kits",
                "Release Agents",
            ],
        },
    ];

    return (
        <header className="py-6 bg-gradient-to-t from-[#0f7db7] to-[#4babe5]">
            <div className='flex flex-row gap-32 items-center justify-center'>
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
                                <button className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    Products
                                </button>

                                <AnimatePresence>
                                    {productsDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute -left-[500px] mt-1 w-[1200px] bg-white shadow-lg rounded-lg p-4 z-50"
                                        >
                                            <div className="flex flex-row gap-4">
                                                {/* Categories Section */}
                                                <div className="w-2/3">
                                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Categories</h3>
                                                    <div className="grid grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg">
                                                        {categories.map((category, index) => (
                                                            <div key={index} className="p-3 border rounded-lg bg-white">
                                                                <button
                                                                    onClick={() => router.push(`/productlisting/${category.title}`)}
                                                                    className={`font-semibold flex items-center gap-2 cursor-pointer ${activeCategory === category.title ? 'text-blue-800' : 'text-blue-600 hover:text-blue-800'}`}
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
                                                </div>

                                                {/* Consumables Section */}
                                                <div className="w-1/3">
                                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Consumables</h3>
                                                    <div className="grid grid-cols-1 gap-4">
                                                        {consumables.map((consumable, index) => (
                                                            <div key={index} className="p-3 border rounded-lg bg-blue-100">
                                                                <button
                                                                    onClick={() => router.push(`/productlisting/${consumable.title}`)}
                                                                    className={`font-semibold flex items-center gap-2 cursor-pointer ${activeCategory === consumable.title ? 'text-blue-800' : 'text-blue-600 hover:text-blue-800'}`}
                                                                >
                                                                    <FaTools /> {consumable.title}
                                                                </button>
                                                                <ul className="mt-2 space-y-1">
                                                                    {consumable.items.map((item, i) => (
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
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li>
                                <a href="#" className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:underline hover:text-blue-700 text-lg font-semibold">
                                    Login
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