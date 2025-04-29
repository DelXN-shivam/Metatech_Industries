'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Phone, Mail, FileText, BookOpen, FlaskConical, Download, ArrowRight, MessageSquareText } from 'lucide-react';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';

export default function GrindingPolishingPage() {
    // For the product carousel
    const [currentProductSlide, setCurrentProductSlide] = useState(0);
    // For the spotlight carousel
    const [currentInfoSlide, setCurrentInfoSlide] = useState(0);

    // Define your slides data
    const slides = [
        {
            id: 1,
            image: "/productsListing/AutoMet-300.png",
            alt: "Buehler Grinding Machine",
            category: "Metallography",
            title: "AutoMet Pro Grinder",
            description: "Precision grinding machine with automatic pressure control for consistent surface preparation across all specimens.",
            reviews: 42,
            rating: 4.5
        },
        {
            id: 2,
            image: "/productsListing/AutoMet-300.png",
            alt: "Buehler Polishing System",
            category: "Metallography",
            title: "EcoMet 300 Pro",
            description: "Advanced polishing system with variable speed control and splash guard for optimal specimen finishing.",
            reviews: 36,
            rating: 4.7
        }
    ];

    const totalInfoSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentInfoSlide((prev) =>
                prev === totalInfoSlides - 1 ? 0 : prev + 1
            );
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [totalInfoSlides]);

    const nextInfoSlide = () => {
        setCurrentInfoSlide((prev) =>
            prev === totalInfoSlides - 1 ? 0 : prev + 1
        );
    };

    const prevInfoSlide = () => {
        setCurrentInfoSlide((prev) => (prev === 0 ? totalInfoSlides - 1 : prev - 1));
    };

    const products = [
        {
            name: "Portable Vickers Hardness Tester",
            image: "/productsListing/portable-vickers-hardness-tester.png" // Update with real path
        },
        {
            name: "Portable Brinell Hardness Tester",
            image: "/productsListing/portable-brinell-hardness-tester.png"
        },
        {
            name: "Rockwell Hardness Tester",
            image: "/productsListing/rockwell-hardness-tester.png"
        },
        {
            name: "Leeb Hardness Tester",
            image: "/productsListing/leeb-hardness-tester.png"
        },
        {
            name: "Universal Hardness Tester",
            image: "/productsListing/universal-hardness-tester.png"
        },
        {
            name: "Automated Hardness Testing System",
            image: "/productsListing/automated-hardness-testing-system.png"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductSlide((prev) => {
                const maxSlide =
                    products.length > 4 ? products.length - 4 : products.length - 2;
                return prev >= maxSlide ? 0 : prev + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [products.length]);

    // Sidebar items
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            id: 1,
            name: "Automatic Cutting Machines",
            subItems: [
                { name: "Automatic Cutting Machines - Auto Cut", apiCall: "/api/automatic-cutting/auto-cut" },
                { name: "Automatic Cutting Machines - Auto-S", apiCall: "/api/automatic-cutting/auto-s" },
                { name: "Automatic Cutting Machines - MetaCut", apiCall: "/api/automatic-cutting/metacut" },
                { name: "Oscillating Abrasive Cut-off Machines", apiCall: "/api/automatic-cutting/oscillating-abrasive" },
                { name: "Metacut-I", apiCall: "/api/automatic-cutting/metacut-i" },
                { name: "Tube Cutting Machines", apiCall: "/api/automatic-cutting/tube-cutting" }
            ]
        },
        {
            id: 2,
            name: "Microscope and Image Analyzer",
            subItems: [
                { name: "Inverted Microscope", apiCall: "/api/microscope/inverted" },
                { name: "Inverted Microscope - Metagraph", apiCall: "/api/microscope/metagraph" },
                { name: "Upright Microscope", apiCall: "/api/microscope/upright" },
                { name: "Stereo Microscope", apiCall: "/api/microscope/stereo" }
            ]
        },
        {
            id: 3,
            name: "Hardness Tester",
            subItems: [
                { name: "Portable Vickers Hardness Tester", apiCall: "/api/hardness-tester/portable-vickers" },
                { name: "Portable Brinell Hardness Tester", apiCall: "/api/hardness-tester/portable-brinell" },
                { name: "Rockwell Hardness Tester", apiCall: "/api/hardness-tester/rockwell" },
                { name: "Brinell Hardness Tester", apiCall: "/api/hardness-tester/brinell" },
                { name: "Leeb Hardness Tester", apiCall: "/api/hardness-tester/leeb" }
            ]
        },
        {
            id: 4,
            name: "Diamond Cutting Machines",
            subItems: [
                { name: "DCM", apiCall: "/api/diamond-cutting/dcm" },
                { name: "HI Speed DCM", apiCall: "/api/diamond-cutting/hi-speed-dcm" }
            ]
        },
        {
            id: 5,
            name: "Image Analyzer",
            subItems: [
                { name: "Grain Analysis", apiCall: "/api/image-analyzer/grain-analysis" },
                { name: "Planimetry Method", apiCall: "/api/image-analyzer/planimetry" },
                { name: "Phase Analysis", apiCall: "/api/image-analyzer/phase-analysis" },
                { name: "Graphite", apiCall: "/api/image-analyzer/graphite" },
                { name: "Point Counter", apiCall: "/api/image-analyzer/point-counter" },
                { name: "Inclusion", apiCall: "/api/image-analyzer/inclusion" }
            ]
        },
        {
            id: 6,
            name: "Portable & Manual Cutting Machines",
            subItems: [
                { name: "Portable Abrasive Cutter", apiCall: "/api/manual-cutting/portable-abrasive-cutter" },
                { name: "Manual Benchtop Cutting Machine", apiCall: "/api/manual-cutting/manual-benchtop" },
                { name: "Hydraulic Tube Cutting Machine", apiCall: "/api/manual-cutting/hydraulic-tube-cutter" }
            ]
        },
        {
            id: 7,
            name: "Laser Cutting Systems",
            subItems: [
                { name: "Fiber Laser Cutting Machine", apiCall: "/api/laser-cutting/fiber-laser" },
                { name: "CO2 Laser Cutting System", apiCall: "/api/laser-cutting/co2-laser" },
                { name: "Precision Sheet Metal Laser Cutter", apiCall: "/api/laser-cutting/sheet-metal-cutter" }
            ]
        }
    ];

    const toggleSublist = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className='sticky top-0 z-50'>
                <Header />
            </div>
            <div className='flex bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen'>
                {/* Enhanced Sidebar */}
                <motion.div
                    className="w-80 bg-white border-r border-gray-100"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] p-6">
                        <h2 className="text-white font-bold text-xl tracking-wide">Categories</h2>
                    </div>
                    <nav className="p-6">
                        <ul className="space-y-3">
                            {items.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    className="group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                >
                                    <button
                                        className="w-full text-left p-4 rounded-xl transition-all duration-300 
            hover:bg-[#0f7db7]/10 text-gray-700 hover:text-[#0f7db7] font-medium
            flex items-center justify-between group-hover:translate-x-1
            border border-transparent hover:border-[#0f7db7]/20"
                                        onClick={() => toggleSublist(index)}
                                    >
                                        <div className="flex items-center">
                                            <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}>
                                                <IoIosArrowForward className="w-5 h-5" />
                                            </span>
                                            <span className="ml-3">{item.name}</span>
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-[#4babe5]">
                                            {item.subItems.length} items
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <motion.ul
                                            className="mt-2 ml-8 space-y-2"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.subItems.map((subItem, subIndex) => (
                                                <motion.li
                                                    key={subIndex}
                                                    className="px-4 py-2.5 rounded-lg text-gray-600 hover:text-[#0f7db7] 
                hover:bg-[#0f7db7]/10 transition-all duration-300 cursor-pointer
                border border-transparent hover:border-[#0f7db7]/20
                flex items-center"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: subIndex * 0.05, duration: 0.3 }}
                                                >
                                                    <Link href={subItem.apiCall} className="flex items-center w-full">
                                                        <span className="w-1.5 h-1.5 bg-[#4babe5] rounded-full mr-3"></span>
                                                        {subItem.name}
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </motion.div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
                        {/* Product Carousel */}
                        <div className="mb-16">
                            <div className="relative overflow-hidden">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProductSlide * (products.length > 4 ? 25 : 50)}%)` }}>
                                    {products.map((product, index) => (
                                        <div key={index} className={`flex-shrink-0 ${products.length > 4 ? 'w-1/4' : 'w-1/2'} p-4`}>
                                            <div className="flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                                                <div className="relative overflow-hidden rounded-lg mb-4 w-full h-48 group-hover:shadow-md transition-all duration-300">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#0f7db7] transition-colors duration-300">{product.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hero Banner */}
                        <motion.div
                            className="relative w-full h-48 md:h-56 mb-16 rounded-lg overflow-hidden shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-[url('/productsListing/GRINDING_AND_POLISHING.png')] bg-cover bg-center"></div>
                            {/* Black overlay layer */}
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.h1
                                    className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    Hardness Tester
                                </motion.h1>
                            </div>
                        </motion.div>

                        {/* Modern Intro Section with Stacked Card Design - Positions Switched */}
                        <motion.div
                            className="mb-24"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-col lg:flex-row gap-12 items-start">
                                {/* Image Carousel - Now on the LEFT side */}
                                <motion.div
                                    className="lg:w-1/2 w-full relative"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="relative">
                                        {/* Main Featured Card */}
                                        <motion.div
                                            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                                            whileHover={{ y: -10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="relative h-48">
                                                <motion.img
                                                    key={currentInfoSlide}
                                                    src={slides[currentInfoSlide].image}
                                                    alt={slides[currentInfoSlide].alt}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                                <span className="absolute top-4 left-4 bg-white/90 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full">
                                                    {slides[currentInfoSlide].category}
                                                </span>
                                            </div>
                                            <motion.div
                                                className="p-6"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2, duration: 0.5 }}
                                            >
                                                <h3 className="text-xl font-bold text-gray-800 mb-3">{slides[currentInfoSlide].title}</h3>
                                                <p className="text-gray-600 mb-6">{slides[currentInfoSlide].description}</p>
                                                <div className="flex justify-between items-center">
                                                    <motion.button
                                                        className="bg-[#0f7db7] hover:bg-[#4babe5] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-md"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Learn More
                                                    </motion.button>
                                                    <div className="flex items-center">
                                                        <div className="flex text-yellow-400 mr-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span key={i}>
                                                                    {i < Math.floor(slides[currentInfoSlide].rating) ? '★' : '☆'}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <span className="text-gray-500 text-sm">({slides[currentInfoSlide].reviews})</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Navigation and Thumbnails */}
                                        <div className="mt-8">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-lg font-semibold text-gray-800">Featured Solutions</h3>
                                                <div className="flex space-x-2">
                                                    <motion.button
                                                        onClick={prevInfoSlide}
                                                        className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-[#0f7db7]/10 hover:border-[#0f7db7]/50 transition-all"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        aria-label="Previous slide"
                                                    >
                                                        <ChevronLeft className="text-gray-600" size={18} />
                                                    </motion.button>
                                                    <motion.button
                                                        onClick={nextInfoSlide}
                                                        className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-[#0f7db7]/10 hover:border-[#0f7db7]/50 transition-all"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        aria-label="Next slide"
                                                    >
                                                        <ChevronRight className="text-gray-600" size={18} />
                                                    </motion.button>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4">
                                                {slides.map((slide, index) => (
                                                    <motion.button
                                                        key={slide.id}
                                                        onClick={() => setCurrentInfoSlide(index)}
                                                        className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 ${currentInfoSlide === index ? 'ring-2 ring-[#0f7db7]' : 'opacity-80 hover:opacity-100'}`}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        aria-label={`View ${slide.title}`}
                                                    >
                                                        <img
                                                            src={slide.image}
                                                            alt={slide.alt}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className={`absolute inset-0 ${currentInfoSlide === index ? 'bg-black/20' : 'bg-black/30'}`}></div>
                                                        <span className="absolute bottom-2 left-2 text-white text-xs font-medium truncate w-[calc(100%-16px)]">
                                                            {slide.title}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Text Content ("Browse our solutions") - Now on the RIGHT side */}
                                <motion.div
                                    className="lg:w-1/2"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                        Browse our solutions
                                    </span>
                                    <motion.h2
                                        className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-6 relative pb-3"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                    >
                                        Grinding and Polishing Made Simple
                                    </motion.h2>
                                    <motion.p
                                        className="text-gray-700 mb-8 leading-relaxed text-lg"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                    >
                                        The most important step in the preparation of a good sample is a specialty at Buehler. Choose between our various grinding and polishing equipment for the application right for your laboratory.
                                    </motion.p>
                                    <div className="flex flex-wrap gap-4">
                                        <motion.button
                                            className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7, duration: 0.5 }}
                                        >
                                            Explore Products
                                        </motion.button>
                                        <motion.button
                                            className="border border-[#0f7db7] text-[#0f7db7] hover:bg-[#0f7db7]/10 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8, duration: 0.5 }}
                                        >
                                            Contact Experts
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Semi-Automatic Section with Card Grid */}
                        {/* Semi-Automatic Section with Card Grid */}
                        <motion.div
                            className="mb-28"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center mb-16">
                                <motion.span
                                    className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Our Products
                                </motion.span>
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    Semi-Automatic Grinder Polishers
                                </motion.h2>
                                <motion.div
                                    className="max-w-3xl mx-auto"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Process multiple samples automatically to increase throughput while freeing up users for other tasks.
                                        Automatic processing ensures consistent sample quality cycle to cycle.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* AutoMet 250 */}
                                <motion.div
                                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <motion.img
                                            src="/productsListing/AutoMet-300.png"
                                            alt="AutoMet 250"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            whileHover={{ scale: 1.1 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[#0f7db7]">AutoMet® 250</h3>
                                            <span className="bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-2 py-1 rounded">10" Platen</span>
                                        </div>

                                        <p className="text-gray-600 mb-6">
                                            Designed for medium to high volume environments, this versatile grinder polisher comes with a membrane control panel.
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <motion.button
                                                className="text-[#0f7db7] hover:text-[#4babe5] font-medium flex items-center transition-colors duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                View Details
                                                <ArrowRight className="ml-2" size={16} />
                                            </motion.button>
                                            <span className="text-xs text-gray-500">6 burst modules</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* AutoMet 250 Pro */}
                                <motion.div
                                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <motion.img
                                            src="/api/placeholder/160/180"
                                            alt="AutoMet 250 Pro"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            whileHover={{ scale: 1.1 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[#0f7db7]">AutoMet® 250 Pro</h3>
                                            <span className="bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-2 py-1 rounded">Touch Screen</span>
                                        </div>

                                        <p className="text-gray-600 mb-6">
                                            Features an intuitive touch screen interface. Program every step of the process to achieve unparalleled accuracy.
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <motion.button
                                                className="text-[#0f7db7] hover:text-[#4babe5] font-medium flex items-center transition-colors duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                View Details
                                                <ArrowRight className="ml-2" size={16} />
                                            </motion.button>
                                            <span className="text-xs text-gray-500">8 burst modules</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* AutoMet 300 Pro */}
                                <motion.div
                                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <motion.img
                                            src="/api/placeholder/160/180"
                                            alt="AutoMet 300 Pro"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            whileHover={{ scale: 1.1 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[#0f7db7]">AutoMet® 300 Pro</h3>
                                            <span className="bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-2 py-1 rounded">12" Platen</span>
                                        </div>

                                        <p className="text-gray-600 mb-6">
                                            Top of the line machine adds size and throughput in its 12" platen making it perfect for high volume environments.
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <motion.button
                                                className="text-[#0f7db7] hover:text-[#4babe5] font-medium flex items-center transition-colors duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                View Details
                                                <ArrowRight className="ml-2" size={16} />
                                            </motion.button>
                                            <span className="text-xs text-gray-500">Depth grinding</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Specialty Machines Section */}
                        {/* Specialty Machines Section */}
                        <motion.div
                            className="mb-28"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center mb-16">
                                <motion.span
                                    className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Advanced Solutions
                                </motion.span>
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    Specialty Grinding and Polishing Machines
                                </motion.h2>
                                <motion.div
                                    className="max-w-3xl mx-auto"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        When typical grinders can't meet your requirements for flatness or surface finish, our specialty solutions deliver exceptional results.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* VibroMet 2 */}
                                <motion.div
                                    className="bg-gradient-to-br from-[#0f7db7]/5 to-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="md:w-1/3">
                                        <motion.div
                                            className="relative overflow-hidden rounded-xl aspect-square"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <img
                                                src="/api/placeholder/160/180"
                                                alt="VibroMet 2"
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-bold text-[#0f7db7] mb-3">VibroMet® 2</h3>
                                        <p className="text-gray-600 mb-6">
                                            Equipped with unique motor technology, the VibroMet 2 achieves the highest degree of surface quality possible for a mechanical polisher.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <motion.button
                                                className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Product Details
                                            </motion.button>
                                            <motion.button
                                                className="border border-[#0f7db7] text-[#0f7db7] hover:bg-[#0f7db7]/10 px-6 py-2 rounded-lg font-medium transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Technical Specs
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Add more specialty machines here with similar structure */}
                                <motion.div
                                    className="bg-gradient-to-br from-[#0f7db7]/5 to-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="md:w-1/3">
                                        <motion.div
                                            className="relative overflow-hidden rounded-xl aspect-square bg-gray-100 flex items-center justify-center"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <FileText className="text-gray-400" size={48} />
                                        </motion.div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-bold text-[#0f7db7] mb-3">More Solutions</h3>
                                        <p className="text-gray-600 mb-6">
                                            Discover our full range of specialty solutions for unique sample preparation challenges.
                                        </p>
                                        <motion.button
                                            className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Explore All
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Solutions Banner with Parallax Effect */}
                        <div className="relative mb-28 h-[500px] overflow-hidden rounded-2xl shadow-xl">
                            <div className="absolute inset-0 bg-[url('/productsListing/Find_Your_Solutions.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

                            <div className="relative h-full flex items-center">
                                <div className="container mx-auto px-8 text-white max-w-2xl">
                                    <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 backdrop-blur-sm">
                                        Comprehensive Solutions
                                    </span>
                                    <h2 className="text-4xl font-bold mb-6">
                                        Full Lab Metallography Solutions
                                    </h2>
                                    <p className="text-lg mb-8 leading-relaxed">
                                        Looking for more information? Browse through our Solutions section to view technical articles, find recommended processing methods, and discover industry-specific solutions.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-white text-[#0f7db7] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                                            Solutions by Industry
                                        </button>
                                        <button className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                                            Solutions by Material
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help Section with Floating Cards */}
                        <div className="mb-28">
                            <div className="text-center mb-16">
                                <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                    We're Here to Help
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4">
                                    Need Additional Help?
                                </h2>
                                <div className="max-w-3xl mx-auto">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Do you want to improve your process? Reach out for one-on-one help from our applications experts.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {/* Contact Lab Team */}
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="h-48 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] flex items-center justify-center">
                                        <img
                                            src="/productsListing/contact_lab_team.png"
                                            alt="Contact Lab Team"
                                            className="h-32 object-contain"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-[#0f7db7] mb-4">Contact Lab Team</h3>
                                        <p className="text-gray-600 mb-6">
                                            Get expert advice on laboratory equipment setup and processes from our technical specialists.
                                        </p>
                                        <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md w-full">
                                            Contact Lab Experts
                                        </button>
                                    </div>
                                </div>

                                {/* Contact Customer Care */}
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="h-48 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] flex items-center justify-center">
                                        <img
                                            src="/productsListing/contact_customer_care.png"
                                            alt="Contact Customer Care"
                                            className="h-32 object-contain"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-[#0f7db7] mb-4">Contact Customer Care</h3>
                                        <p className="text-gray-600 mb-6">
                                            Questions about orders, shipping, or product availability? Our support team is ready to assist.
                                        </p>
                                        <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md w-full">
                                            Contact Support
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Quick Links Section */}
                        <div className="py-16 bg-gradient-to-br from-[#0f7db7]/5 to-white">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                        Quick Access
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4">
                                        Explore Our Resources
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                        Quickly access important information and resources for your laboratory needs.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Product Catalog */}
                                    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                        <div className="p-8 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                                                <FileText size={28} className="transition-all duration-500" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Product Catalog</h3>
                                            <p className="text-gray-600 mb-6">
                                                View all products in our comprehensive catalog with detailed specifications.
                                            </p>
                                            <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                                                Browse Catalog
                                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Methods by Material */}
                                    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                        <div className="p-8 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                                                <FlaskConical size={28} className="transition-all duration-500" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Methods by Material</h3>
                                            <p className="text-gray-600 mb-6">
                                                Find optimized preparation methods for your specific material types.
                                            </p>
                                            <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                                                View Methods
                                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Safety Data Sheets */}
                                    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                        <div className="p-8 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                                                <Download size={28} className="transition-all duration-500" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Safety Data Sheets</h3>
                                            <p className="text-gray-600 mb-6">
                                                Access all safety documentation for our products and chemicals.
                                            </p>
                                            <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                                                Search SDS
                                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Literature */}
                                    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                        <div className="p-8 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                                                <BookOpen size={28} className="transition-all duration-500" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Product Literature</h3>
                                            <p className="text-gray-600 mb-6">
                                                Download brochures, manuals, and technical documents.
                                            </p>
                                            <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                                                View Resources
                                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional CTA */}
                                <div className="mt-16 text-center">
                                    <p className="text-gray-600 mb-6">Looking for something else?</p>
                                    <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
                                        Contact Our Support Team
                                        <MessageSquareText className="ml-2" size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
