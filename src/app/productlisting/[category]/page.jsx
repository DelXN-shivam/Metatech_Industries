'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, FileText, BookOpen, FlaskConical, Download } from 'lucide-react';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter, useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

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

  // Add useEffect for automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfoSlide((prev) => (prev === totalInfoSlides - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalInfoSlides]);

  const nextInfoSlide = () => {
    setCurrentInfoSlide((prev) => (prev === totalInfoSlides - 1 ? 0 : prev + 1));
  };

  const prevInfoSlide = () => {
    setCurrentInfoSlide((prev) => (prev === 0 ? totalInfoSlides - 1 : prev - 1));
  };

  const products = [
    {
      name: "AutoMet 250",
      image: "/productsListing/AutoMet-300.png"
    },
    {
      name: "AutoMet 250 Pro",
      image: "/productsListing/AutoMet-300.png"
    },
    {
      name: "AutoMet 300 Pro",
      image: "/productsListing/AutoMet-300.png"
    },
    {
      name: "EcoMet 30",
      image: "/productsListing/EcoMet-30.png"
    },
    {
      name: "EcoMet 250",
      image: "/productsListing/EcoMet-250.png"
    },
    {
      name: "EcoMet 300",
      image: "/productsListing/AutoMet-300.png"
    },
    {
      name: "VibroMet 2",
      image: "/productsListing/AutoMet-300.png"
    }
  ];

  const totalProductSlides = products.length;

  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev === totalProductSlides - 1 ? 0 : prev + 1));
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev === 0 ? totalProductSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductSlide((prev) => {
        const maxSlide = products.length > 4 ? products.length - 4 : products.length - 2;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  // Sidebar items
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

  return (
    <>
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <div className='flex bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen'>
        {/* Enhanced Sidebar */}
        <div className="w-80 bg-white border-r border-gray-100">
          <div className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] p-6">
            <h2 className="text-white font-bold text-xl tracking-wide">Categories</h2>
          </div>
          <nav className="p-6">
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={item.id} className="group">
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
                    <ul className="mt-2 ml-8 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}
                          className="px-4 py-2.5 rounded-lg text-gray-600 hover:text-[#0f7db7] 
                                                hover:bg-[#0f7db7]/10 transition-all duration-300 cursor-pointer
                                                border border-transparent hover:border-[#0f7db7]/20
                                                flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#4babe5] rounded-full mr-3"></span>
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
            <div className="relative w-full h-48 md:h-56 mb-16 rounded-lg overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-[url('/productsListing/GRINDING_AND_POLISHING.png')] bg-cover bg-center"></div>
              {/* Black overlay layer */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                  GRINDING AND POLISHING
                </h1>
              </div>
            </div>

            {/* Intro Section with Carousel */}
            <div className="mb-24">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-[#0f7db7] text-sm font-medium mb-2">Browse our easy to use solutions</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f7db7] mb-6 border-b-4 border-[#0f7db7] pb-2 inline-block">
                    Grinding and Polishing Made Simple
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The most important step in the preparation of a good sample is a specialty at Buehler. Choose between our various grinding and polishing equipment for the application right for your laboratory. Combined with the right polishing suspensions and fluids, Buehler will create the best possible surface finish for your analysis.
                  </p>
                </div>

                <div className="md:w-1/2 relative">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${currentInfoSlide * 100}%)`,
                      }}
                    >
                      {slides.map((slide, index) => (
                        <div
                          key={slide.id}
                          className="w-full flex-shrink-0"
                          style={{ minWidth: '100%' }}
                        >
                          <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-80 relative">
                              <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-[#0f7db7] opacity-20"></div>
                            </div>

                            {/* Info Section */}
                            <div className="w-full md:w-1/2 bg-gradient-to-b from-[#0f7db7]/10 to-white p-6 md:p-8 flex flex-col justify-center">
                              <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                {slide.category}
                              </span>

                              <h3 className="text-xl font-bold text-gray-800 mb-3">{slide.title}</h3>

                              <p className="text-sm text-gray-600 mb-6">
                                {slide.description}
                              </p>

                              <button
                                className="text-sm w-fit bg-[#0f7db7] hover:bg-[#4babe5] text-white font-medium py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2"
                                aria-label={`Learn more about ${slide.title}`}
                              >
                                Learn More →
                              </button>

                              <div className="mt-4 flex items-center">
                                <div className="flex text-yellow-400" aria-hidden="true">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                      {i < Math.floor(slide.rating) ? '★' : '☆'}
                                    </span>
                                  ))}
                                </div>
                                <span className="ml-2 text-gray-500 text-sm">({slide.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={prevInfoSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#0f7db7]/10 transition-all rounded-full p-2 shadow-lg text-gray-800 hover:text-[#0f7db7] focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextInfoSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#0f7db7]/10 transition-all rounded-full p-2 shadow-lg text-gray-800 hover:text-[#0f7db7] focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Semi-Automatic Section */}
            <div className="mb-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f7db7] mb-6 border-b-4 border-[#0f7db7] pb-2 inline-block">
                Semi-Automatic Grinder Polishers
              </h2>
              <p className="text-gray-700 mb-10 max-w-4xl leading-relaxed">
                Process multiple samples automatically to increase throughput while freeing up users for other tasks.
                Automatic processing also ensures good and consistent sample quality cycle to cycle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* AutoMet 250 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#0f7db7] mb-6 text-center group-hover:text-[#4babe5] transition-colors duration-300">AutoMet® 250</h3>
                    <div className="flex-grow flex flex-col items-center mb-6">
                      <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-md transition-all duration-300">
                        <img
                          src="/productsListing/AutoMet-300.png"
                          alt="AutoMet 250"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        Designed for medium to high volume environments, this versatile grinder polisher comes with a membrane control panel. Its 10" (250mm) diameter platen is 8" (203mm) in diameter and is compatible with up to 6 burst modules for automating individual polishing steps.
                      </p>
                    </div>
                    <div className="mt-auto text-center">
                      <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                        AutoMet 250 Page
                      </button>
                    </div>
                  </div>
                </div>

                {/* AutoMet 250 Pro */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#0f7db7] mb-6 text-center group-hover:text-[#4babe5] transition-colors duration-300">AutoMet® 250 Pro</h3>
                    <div className="flex-grow flex flex-col items-center mb-6">
                      <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-md transition-all duration-300">
                        <img
                          src="/api/placeholder/160/180"
                          alt="AutoMet 250 Pro"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        Designed for medium to high volume environments, this advanced machine features an intuitive touch screen interface. Program every step of the process to achieve unparalleled accuracy and consistency. Its 10" (250mm) platen is ideal for samples up to 10" (250mm) in diameter and compatible with up to 8 burst modules for automating individual polishing steps.
                      </p>
                    </div>
                    <div className="mt-auto text-center">
                      <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                        AutoMet 250 Pro Page
                      </button>
                    </div>
                  </div>
                </div>

                {/* AutoMet 300 Pro */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#0f7db7] mb-6 text-center group-hover:text-[#4babe5] transition-colors duration-300">AutoMet® 300 Pro</h3>
                    <div className="flex-grow flex flex-col items-center mb-6">
                      <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-md transition-all duration-300">
                        <img
                          src="/api/placeholder/160/180"
                          alt="AutoMet 300 Pro"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        This top of the line machine adds size and throughput in its 12" (300mm) platen making it perfect for high volume environments and larger sample sizes. Along with its programmable touch screen and ability to add burst dispensing modules to automate polishing steps, this machine includes unique features like depth grinding to further ensure accuracy.
                      </p>
                    </div>
                    <div className="mt-auto text-center">
                      <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                        AutoMet 300 Pro Page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty Machines Section */}
            <div className="mb-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f7db7] mb-6 border-b-4 border-[#0f7db7] pb-2 inline-block">
                Specialty Grinding and Polishing Machines
              </h2>
              <p className="text-gray-700 mb-10 max-w-4xl leading-relaxed">
                When a typical grinder polisher can't give you the flatness or surface finish you require or if you have extremely limited space or work in hot cells, our specialty solutions are the answer you need.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* VibroMet 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#0f7db7] mb-6 text-center group-hover:text-[#4babe5] transition-colors duration-300">VibroMet® 2</h3>
                    <div className="flex-grow flex flex-col items-center mb-6">
                      <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-md transition-all duration-300">
                        <img
                          src="/api/placeholder/160/180"
                          alt="VibroMet 2"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        Equipped with unique motor technology, the VibroMet 2 achieves the highest degree of surface quality possible for a mechanical polisher. Prepare samples for high magnification analysis by eliminating even the smallest imperfections. Choose the experts at Buehler, who created this technology.
                      </p>
                    </div>
                    <div className="mt-auto text-center">
                      <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                        VibroMet 2 Page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Metallography Solutions Banner */}
            <div className="bg-gray-50 rounded-lg shadow-sm mb-16 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4">
                  <div className="relative overflow-hidden rounded-md group">
                    <img
                      src="/productsListing/Find_Your_Solutions.png"
                      alt="Lab expert"
                      className="w-full shadow-md rounded-md transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <p className="text-gray-600 mb-2 font-medium group-hover:text-gray-700 transition-colors duration-300">Find Your Solutions</p>
                  <h1 className="text-3xl font-bold text-[#0f7db7] mb-4 border-b-4 border-[#0f7db7] pb-2 inline-block group-hover:text-[#4babe5] transition-colors duration-300">
                    Full Lab<br />Metallography Solutions
                  </h1>
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    Looking for more information from us? Browse through our Solutions section to view technical articles, find recommended processing methods, look at industry solutions, and more.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white py-2 px-4 rounded-lg font-medium text-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                      Solutions by Industry
                    </button>
                    <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white py-2 px-4 rounded-lg font-medium text-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                      Solutions by Material
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Additional Help Section */}
            <div className="py-16 mb-16 bg-[#0f7db7]/10 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#0f7db7] mb-4 group-hover:text-[#4babe5] transition-colors duration-300">Need Additional Help?</h2>
                <p className="text-gray-700 max-w-2xl mx-auto group-hover:text-gray-800 transition-colors duration-300">
                  Do you want to improve your process? Reach out for one-on-one help from our applications experts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-4">
                {/* Contact Lab Team */}
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-24 h-24 relative flex items-center justify-center group">
                      <img
                        src="/productsListing/contact_lab_team.png"
                        alt="Contact Lab Team"
                        className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f7db7] mb-4 group-hover:text-[#4babe5] transition-colors duration-300">Contact Lab Team</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Get expert advice on laboratory equipment setup and processes</p>
                  <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-lg text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                    Contact Lab
                  </button>
                </div>

                {/* Contact Customer Care */}
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-24 h-24 relative flex items-center justify-center group">
                      <img
                        src="/productsListing/contact_customer_care.png"
                        alt="Contact Customer Care"
                        className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f7db7] mb-4 group-hover:text-[#4babe5] transition-colors duration-300">Contact Customer Care</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">Questions about orders, shipping, or product availability</p>
                  <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-lg text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="py-16 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Quick Links Left Column */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0f7db7] mb-4 group-hover:text-[#4babe5] transition-colors duration-300">Quick Links</h2>
                    <p className="text-gray-700 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      Quickly access important info or visit our <a href="#" className="text-[#0f7db7] hover:text-[#4babe5] transition-colors duration-300 font-medium">E-Shop</a>
                    </p>
                    <div className="w-24 h-1 bg-[#0f7db7] mt-8 group-hover:bg-[#4babe5] transition-colors duration-300"></div>
                  </div>

                  {/* Center Column */}
                  <div className="space-y-12">
                    {/* Product Catalog */}
                    <div className="flex items-start space-x-6 hover:bg-white p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#0f7db7]/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                          <FileText className="text-[#0f7db7] group-hover:text-[#4babe5] transition-colors duration-300" size={28} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0f7db7] mb-2 group-hover:text-[#4babe5] transition-colors duration-300">Product Catalog</h3>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          View all Products in the Buehler Product Catalog
                        </p>
                        <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                          Product Catalog
                        </button>
                      </div>
                    </div>

                    {/* Methods by Material */}
                    <div className="flex items-start space-x-6 hover:bg-white p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#0f7db7]/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                          <FlaskConical className="text-[#0f7db7] group-hover:text-[#4babe5] transition-colors duration-300" size={28} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0f7db7] mb-2 group-hover:text-[#4babe5] transition-colors duration-300">Methods by Material</h3>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          Select a method by material
                        </p>
                        <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                          Buehler Methods
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-12">
                    {/* SDS */}
                    <div className="flex items-start space-x-6 hover:bg-white p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#0f7db7]/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                          <Download className="text-[#0f7db7] group-hover:text-[#4babe5] transition-colors duration-300" size={28} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0f7db7] mb-2 group-hover:text-[#4babe5] transition-colors duration-300">SDS</h3>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          Search Buehler's Safety Data Sheets
                        </p>
                        <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                          Safety Data Sheets
                        </button>
                      </div>
                    </div>

                    {/* Product Literature */}
                    <div className="flex items-start space-x-6 hover:bg-white p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#0f7db7]/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                          <BookOpen className="text-[#0f7db7] group-hover:text-[#4babe5] transition-colors duration-300" size={28} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0f7db7] mb-2 group-hover:text-[#4babe5] transition-colors duration-300">Product Literature</h3>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          Browse and search Buehler's product literature
                        </p>
                        <button className="bg-[#0f7db7] hover:bg-[#4babe5] transition-all duration-300 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:ring-offset-2">
                          Product Literature
                        </button>
                      </div>
                    </div>
                  </div>
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
