'use client';

import CompanyHeader from "@/app/components/CompanyHeader";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useRouter, useParams } from "next/navigation";
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const categories = [
    {
        title: "Automatic Cutting Machines",
        items: [
            {
                id: 1,
                series: "AutoCut-Series",
                description: "AutoCut Series machines provide high precision and efficiency in cutting operations.",
                image: "/auto_cutting/auto1.jpg"
            },
            {
                id: 2,
                series: "AutoS-Series",
                description: "AutoS-Series is known for its compact design and high-speed cutting capabilities.",
                image: "/auto_cutting/auto2.jpg"
            },
            {
                id: 3,
                series: "MetaCut-Series",
                description: "MetaCut-Series ensures fine cutting with minimal material wastage.",
                image: "/auto_cutting/auto3.jpg"
            },
            {
                id: 4,
                series: "Oscillating Cut-Series",
                description: "Oscillating Abrasive Cut-off Machines are designed for rapid and efficient cutting.",
                image: "/auto_cutting/auto4.jpg"
            },
            {
                id: 5,
                series: "MetaCut-I",
                description: "MetaCut-I is an advanced version offering enhanced cutting performance.",
                image: "/auto_cutting/auto5.jpg"
            },
            {
                id: 6,
                series: "TubeCut-Series",
                description: "Tube Cutting Machines provide seamless cutting for cylindrical workpieces.",
                image: "/auto_cutting/auto6.jpg"
            }
        ]
    },
    {
        title: "Diamond Cutting Machines",
        items: [
            {
                id: 7,
                series: "DPCM-Series",
                description: "DPCM is designed for precision diamond cutting with high efficiency.",
                image: "/api/placeholder/200/240"
            },
            {
                id: 8,
                series: "Hi-Speed DCM",
                description: "Hi-Speed DCM provides ultra-fast diamond cutting with accuracy.",
                image: "/api/placeholder/200/240"
            }
        ]
    },
    {
        title: "Image Analyzer",
        items: [
            {
                id: 9,
                series: "RXL3-Series",
                description: "Grain Analysis using RXL-3 Series Enhanced ion microscopes ensures accuracy.",
                image: "/api/placeholder/200/240"
            },
            {
                id: 10,
                series: "RXL3-Series",
                description: "Planimetry Method in RXL-3 Series provides precise measurements.",
                image: "/api/placeholder/200/240"
            },
            {
                id: 11,
                series: "RXL3-Series",
                description: "Phase Analysis with RXL-3 Series guarantees detailed microstructural evaluation.",
                image: "/api/placeholder/200/240"
            },
            {
                id: 12,
                series: "RXL3-Series",
                description: "Graphite analysis using RXL-3 Series offers high-resolution imaging.",
                image: "/api/placeholder/200/240"
            },
            {
                id: 13,
                series: "RXL3-Series",
                description: "Point Counter in RXL-3 Series ensures detailed sample evaluation.",
                image: "/api/placeholder/200/240"
            },
            {
                id: 14,
                series: "RXL3-Series",
                description: "Inclusion analysis using RXL-3 Series allows precise defect detection.",
                image: "/api/placeholder/200/240"
            }
        ]
    }
];

const ProductListing = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            id: 1, name: "Automatic Cutting Machines", subItems: ["Automatic Cutting Machines - Auto Cut",
                "Automatic Cutting Machines - Auto-S",
                "Automatic Cutting Machines - MetaCut",
                "Oscillating Abrasive Cut-off Machines",
                "Metacut-I",
                "Tube Cutting Machines"]
        },
        {
            id: 2, name: "Microscope and Image Analyzer", subItems: ["Inverted Microscope",
                "Inverted Microscope - Metagraph",
                "Upright Microscope",
                "Stereo Microscope"]
        },
        {
            id: 3, name: "Automatic Micro Hardness Tester", subItems: ["MHT - (MVH-1000)"
                , "MHT - (MVH-1C)",
                "MHT - (MVMH)",
                "Repair & MHT"]
        },
        {
            id: 4, name: "Diamond Cutting Machines", subItems: ["DCM", "HI Speed DCM"]
        },
        {
            id: 5, name: "Image Analyzer", subItems: ["Grain Analysis",
                "Plainmetry Method",
                "Phase Analysis",
                "Graphite",
                "Point Counter",
                "Inclusion"]
        },
        {
            id: 6, name: "Hardness Tester", subItems: ["Portable Vickers Hardness Tester",
                "Portable Brinell Hardness Tester",
                "Rockwell Hardness Tester",
                "Brinell Hardness Tester",
                "Leeb Hardness Tester"]
        },
        {
            id: 7, name: "Image Analyzer", subItems: ["Grain Analysis", "Planimetry Method", "Phase Analysis", "Graphite", "Point Counter", "Inclusion"]
        },
        {
            id: 8, name: "Moulding Machines", subItems: ["Moulding Machine - Automount E",
                "Electro Hydraulic Press - Automount EH",
                "Pneumatic Press - Automount",
                "Transparent Mould Making Machine"]
        },
        {
            id: 9, name: "Grinding Machines", subItems: ["Metapol DC II",
                "Semi-Automatic Grinding Polishing",
                "Multi-Specimen Grinding Machine",
                "Heavy Duty Belt Grinder",
                "Belt Grinder"]
        },
        {
            id: 10, name: "Particle Size Analysis System", subItems: ["PSAS - Stereo Microscope",
                "PSAS - Metallurgical Microscope",
                "Component Cleaning Machine"]
        },
        {
            id: 11, name: "Hardness Test Block Diamond Indenters", subItems: ["Rockwell",
                "Rockwell Superficial",
                "Vickers",
                "Micro Vickers",
                "Brinell",
                "Aluminium Test Blocks"]
        },
        {
            id: 12, name: "In-situ Metallography Kit", subItems: ["Portable Grinder",
                "Portable Electro Polisher",
                "Replica",
                "Portable Microscope Image Analyzer"]
        },
    ];

    const toggleSublist = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const router = useRouter();
    const params = useParams();

    const categoryName = params.category.replace(/-/g, ' ');
    console.log(categoryName);

    const categoryData = categories.find(cat => cat.title === decodeURIComponent(categoryName));

    // Decode the URL parameter
    const decodedCategoryName = decodeURIComponent(categoryName);

    // Filter categories to match the parameter
    const filteredCategories = categories.filter(
        (cat) => cat.title === decodedCategoryName
    );

    return (
        <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100"
        style={{
            backgroundImage: "url('/images/bg4.jpg')"
        }}>
            <div className="px-32 text-white">
                <Header />
            </div>
            <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 my-10">
                {/* Enhanced Sidebar */}
                <div className="w-80 h-fit sticky top-6 mx-6 mt-6 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                        <h2 className="text-white font-semibold text-lg">Categories</h2>
                    </div>
                    <nav className="p-4">
                        <ul className="space-y-2">
                            {items.map((item, index) => (
                                <li key={item.id} className="group">
                                    <button
                                        className="w-full text-left p-3 rounded-xl transition-all duration-200 
                           hover:bg-blue-50 text-gray-700 hover:text-blue-600
                           flex items-center group-hover:translate-x-1"
                                        onClick={() => toggleSublist(index)}
                                    >
                                        <span className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-90" : ""
                                            }`}>
                                            <IoIosArrowForward className="w-4 h-4" />
                                        </span>
                                        <span className="ml-3 font-medium">{item.name}</span>
                                    </button>
                                    {openIndex === index && (
                                        <ul className="mt-2 ml-6 space-y-1">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}
                                                    className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 
                                   hover:bg-blue-50 transition-all duration-200 cursor-pointer">
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Enhanced Main Content */}
                <div className="flex-1 p-8">
                    {filteredCategories.length > 0 ? (
                        <div className="space-y-12">
                            {filteredCategories.map((category) => (
                                <section key={category.title} className="animate-fadeIn">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                                        {category.title}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {category.items.map((product) => (
                                            <article
                                                key={product.id}
                                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl 
                               transition-all duration-300 border border-gray-100 
                               hover:border-blue-100 hover:-translate-y-1"
                                            >
                                                <div className="p-6">
                                                    <div className="mb-4 overflow-hidden rounded-xl bg-gray-50 p-4">
                                                        <img
                                                            src={product.image}
                                                            alt={product.series}
                                                            className="w-full h-48 object-contain transform transition-transform 
                                     duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <h3 className="text-xl font-semibold text-blue-600 mb-3 
                                     group-hover:text-blue-700">
                                                        {product.series}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500 text-lg">No categories found.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductListing;

