'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';


export default function SimpliMet4000() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoThumbnails = [
    { id: 1, title: "SimpliMet 4000", duration: "3:45" },
    { id: 2, title: "SimpliMet 4000 Introduction", duration: "2:18" },
    { id: 3, title: "SimpliMet 4000 Mounting Press Demo", duration: "4:22" },
    { id: 4, title: "SimpliMet 4000 Operation Guide", duration: "5:10" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setActiveVideoIndex((prevIndex) =>
          prevIndex === videoThumbnails.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying, videoThumbnails.length]);

  // Sample product data
  const product = {
    name: "SimpliMet 4000",
    description: "Handcrafted from genuine leather, this versatile backpack combines classic style with modern functionality. Perfect for daily commute or weekend adventures.",
    price: "$199.99",
    features: [
      "100% genuine leather construction",
      "Laptop compartment fits up to 15-inch devices",
      "Water-resistant interior lining",
      "Adjustable shoulder straps"
    ],
    images: [
      "/auto_cutting/auto1.jpg",
      "/auto_cutting/auto2.jpg",
      "/auto_cutting/auto3.jpg",
      "/auto_cutting/auto4.jpg"
    ]
  };

  // State for currently selected image
  const [selectedImage, setSelectedImage] = useState(0);

  // Images Video section
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="min-h-screen w-full bg-white">
      <Head>
        <title>SimpliMet 4000 Compression Mounting Press | Buehler</title>
        <meta name="description" content="SimpliMet 4000 Compression Hot Mounting Machine by Buehler" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <Header />

      {/* Hero Banner with Parallax Effect */}
      <div
        className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/api/placeholder/1600/300')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] opacity-80"></div>
        <motion.div
          className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="w-full max-w-[2000px] mx-auto">
            <motion.h1
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              SIMPLIMET™ 4000
            </motion.h1>
            <motion.h2
              className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              COMPRESSION MOUNTING PRESS
            </motion.h2>
            <motion.div
              className="mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0f7db7] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-[#0f7db7]/10 hover:text-white transition duration-300 text-sm sm:text-base inline-flex items-center"
              >
                <i className="fas fa-play-circle mr-2"></i>
                Explore Product
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Breadcrumbs */}
      <div className="w-full bg-gray-100 py-2 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-12 shadow-sm">
        <div className="w-full max-w-[2000px] mx-auto flex items-center justify-center text-xs sm:text-sm">
          <Link href="/" className="text-[#0f7db7] hover:text-[#4babe5] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="text-[#0f7db7] hover:text-[#4babe5] transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">SimpliMet 4000</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
        <div className="w-full max-w-[2000px] mx-auto px-20">
          {/* Product Showcase */}
          <motion.div
            className="w-full"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
              {/* Product Image Carousel */}
              <motion.div
                className="w-full lg:w-1/2 relative bg-gradient-to-br from-[#0f7db7]/10 to-[#4babe5]/10 p-3 sm:p-4 md:p-6 rounded-xl shadow-md overflow-hidden flex flex-col items-center"
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Gallery Section */}
                <div className="space-y-3 sm:space-y-4 w-[85%]">
                  {/* Main Display Area */}
                  <motion.div
                    className="aspect-square w-[70%] mx-auto relative overflow-hidden rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {selectedImage === product.images.length ? ( // Video selected
                      <div className="relative w-full h-full">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-contain"
                          controls
                          src="/product/SimpliMet_4000.mp4"
                        />
                        <button
                          onClick={togglePlayPause}
                          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                        >
                          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                        </button>
                      </div>
                    ) : ( // Image selected
                      <motion.img
                        src={product.images[selectedImage]}
                        alt={`Product view ${selectedImage + 1}`}
                        className="w-full h-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
                    {/* Image thumbnails */}
                    {product.images.map((image, index) => (
                      <motion.button
                        key={`img-${index}`}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0 ${selectedImage === index
                            ? 'ring-2 ring-[#0f7db7]'
                            : 'hover:ring-2 hover:ring-gray-300'
                          } rounded-md overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.img
                          src={image}
                          alt={`Product thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                        />
                      </motion.button>
                    ))}

                    {/* Video thumbnail */}
                    <motion.button
                      key="video-thumb"
                      onClick={() => {
                        setSelectedImage(product.images.length); // Set to video index
                        setIsPlaying(false); // Reset play state when selecting
                      }}
                      className={`relative aspect-square w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0 ${selectedImage === product.images.length
                          ? 'ring-2 ring-[#0f7db7]'
                          : 'hover:ring-2 hover:ring-gray-300'
                        } rounded-md overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative w-full h-full bg-gray-200">
                        <video
                          className="w-full h-full object-cover"
                          muted
                          preload="metadata"
                          src="/product/SimpliMet_4000.mp4#t=0.1"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                          <div className="bg-[#0f7db7] rounded-full p-2 text-white">
                            <i className="fas fa-play text-xs"></i>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Product Description */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="border-l-4 border-[#0f7db7] pl-3 sm:pl-4 mb-4 sm:mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f7db7]">SimpliMet 4000</h2>
                  <p className="text-[#0f7db7] font-medium text-sm sm:text-base md:text-lg">Compression Hot Mounting Machine</p>
                </motion.div>

                <motion.div
                  className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.p variants={fadeIn}>
                    The SimpliMet 4000 Compression Mounting press is a robust machine designed to encapsulate metallographic samples. It mounts samples from 1 to 1.5in (25 to 40mm) in molds. This machine can create perfectly cured mounts every time to keep your process moving. Additionally, the Duplex spacer allows users to produce two mounts in a single cycle, doubling productivity and significantly reducing consumable media or powder waste.
                  </motion.p>

                  <motion.div variants={fadeIn}>
                    <h3 className="text-[#0f7db7] font-bold flex items-center">
                      <i className="fas fa-star mr-2"></i>
                      SimpliMet 4000 Key Benefits
                    </h3>
                    <ul className="list-none ml-6 space-y-2 mt-3">
                      {[
                        "Reduced cycle time – under 8 minutes",
                        "SmartCool feature actively monitors for safe handling",
                        "Programmable control system for reproducible results",
                        "Robust design with high efficiency heating and cooling",
                        "Water-saving automatic cooling circuit",
                        "Duplex spacer enables the machine to create 2 fully cured mounts in one cycle"
                      ].map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-gradient-to-r from-[#0f7db7]/10 to-[#4babe5]/10 p-4 rounded-lg border-l-4 border-[#0f7db7] mt-6"
                  >
                    <h3 className="text-[#0f7db7] font-bold flex items-center">
                      <i className="fas fa-lightbulb mr-2"></i>
                      Additional Features
                    </h3>
                    <ul className="list-none ml-6 mt-2 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-angle-right text-[#0f7db7] mt-1 mr-2"></i>
                        <span>Programmable height which saves benchtop space</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-angle-right text-[#0f7db7] mt-1 mr-2"></i>
                        <span>Multiple machines can be conveniently lined up side by side, optimizing space usage</span>
                      </li>
                    </ul>
                  </motion.div>

                  <div className="flex justify-end mt-6">
                    <motion.button
                      className="bg-[#0f7db7] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4babe5] transition duration-300 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download Brochure
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Features Highlights */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 relative overflow-hidden">
                {/* Background image with overlay for better text contrast */}
                <Image
                  src="/product/highSpeed.png"
                  alt="High Speed Operation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6">
                  <i className="fas fa-tachometer-alt text-white text-5xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[#0f7db7]">High-Speed Operation</h3>
                <p className="text-gray-600">Complete mounting process in under 8 minutes with SmartCool technology for safe handling immediately after cycle completion.</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 relative overflow-hidden">
                {/* Background image with overlay for better text contrast */}
                <Image
                  src="/product/highSpeed2.png"
                  alt="High Speed Operation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6">
                  <i className="fas fa-tachometer-alt text-white text-5xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[#0f7db7]">High-Speed Operation</h3>
                <p className="text-gray-600">Complete mounting process in under 8 minutes with SmartCool technology for safe handling immediately after cycle completion.</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 relative overflow-hidden">
                {/* Background image with overlay for better text contrast */}
                <Image
                  src="/product/intuitiveControlSystem.png"
                  alt="Intuitive Control System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6">
                  <i className="fas fa-tachometer-alt text-white text-5xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[#0f7db7]">Intuitive Control System</h3>
                <p className="text-gray-600">7" full-color touch screen with user-friendly interface allows for easy programming and operation of all machine functions.</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 relative overflow-hidden">
                {/* Background image with overlay for better text contrast */}
                <Image
                  src="/product/dualMountCapability.png"
                  alt="Dual Mount Capability"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6">
                  <i className="fas fa-tachometer-alt text-white text-5xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[#0f7db7]">Dual Mount Capability</h3>
                <p className="text-gray-600">Duplex spacer allows creation of two fully cured mounts in one cycle without increasing time, doubling productivity.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Ordering Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Ordering</h2>
              <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] text-white">
                    <th className="py-3 px-4 text-left">Part Number</th>
                    <th className="py-3 px-4 text-left">SimpliMet 4000</th>
                    <th className="py-3 px-4 text-left">Voltage</th>
                    <th className="py-3 px-4 text-left"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    { part: "20-1311-500", mold: "1in Mold", voltage: "85-264VAC, 50/60Hz" },
                    { part: "20-1311-502", mold: "30mm Mold", voltage: "85-264VAC, 50/60Hz" },
                    { part: "20-1311-512", mold: "1.25in Mold", voltage: "85-264VAC, 50/60Hz" },
                    { part: "20-1311-514", mold: "40mm Mold", voltage: "85-264VAC, 50/60Hz" }
                  ].map((item, index) => (
                    <motion.tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white hover:bg-[#0f7db7]/10' : 'bg-gray-50 hover:bg-[#0f7db7]/10'}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="py-3 px-4 border-b">{item.part} with {item.mold}</td>
                      <td className="py-3 px-4 border-b"></td>
                      <td className="py-3 px-4 border-b">{item.voltage}</td>
                      <td className="py-3 px-4 border-b">
                        <motion.button
                          className="bg-[#0f7db7] text-white px-4 py-2 rounded hover:bg-[#4babe5] transition duration-300 shadow"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          REQUEST A QUOTE
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Consumables and Accessories */}
          <div className="mt-16 flex flex-col md:flex-row gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Consumables and Accessories</h2>
                <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Compression Mounting Compound",
                    subtitle: "for SimpliMet 4000",
                    image: "/product/compressionMountingCompound.png",
                    icon: "fas fa-flask"
                  },
                  {
                    title: "Release Agent",
                    subtitle: "for compression mounting",
                    image: "/product/releaseAgent.png",
                    icon: "fas fa-spray-can"
                  },
                  {
                    title: "Mounting Accessories",
                    subtitle: "Support Clips / Sample Holders",
                    image: "/product/mountingAccessories.png",
                    icon: "fas fa-tools"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="h-48 relative overflow-hidden">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-[#0f7db7]/10 flex items-center justify-center text-[#0f7db7] group-hover:text-[#4babe5] transition-colors duration-300">
                        <i className={`${item.icon} text-5xl`}></i>
                      </div> */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={240}
                        className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center bg-gradient-to-b from-white to-gray-50">
                      <h3 className="text-[#0f7db7] font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                      <motion.button
                        className="mt-3 text-[#0f7db7] hover:text-[#4babe5] text-sm font-medium flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.05 }}
                      >
                        View Details
                        <i className="fas fa-chevron-right ml-1 text-xs"></i>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Product Literature</h2>
                <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Compression Mounting Guide",
                    icon: "fas fa-book",
                    image: "/product/mounting-guide.png"
                  },
                  {
                    title: "SimpliMet 4000 Brochure",
                    icon: "fas fa-file-pdf",
                    image: "/product/simplimet-brochure.png"
                  },
                  {
                    title: "Buehler Product Catalog",
                    icon: "fas fa-bookmark",
                    image: "/product/product-catalog.png"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <div className="h-48 relative overflow-hidden">
                      {/* Background image with overlay */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={240}
                        className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6">
                        <i className={`${item.icon} text-white text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                      </div> */}
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg text-[#0f7db7]">{item.title}</h3>
                      <div className="mt-4 flex justify-center space-x-3">
                        <motion.button
                          className="bg-[#0f7db7] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#4babe5] transition duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-eye mr-2"></i>
                          View
                        </motion.button>
                        <motion.button
                          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center hover:bg-gray-200 transition duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-download mr-2"></i>
                          Download
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Specifications */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Specifications</h2>
              <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] text-white">
                    <th className="py-4 px-6 text-left rounded-tl-xl">Description</th>
                    <th className="py-4 px-6 text-left rounded-tr-xl">SimpliMet 4000</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {[
                    { param: "Operation", value: "Automatic | Semi-Automatic" },
                    { param: "Mounting Mold Sizes", value: "English: 1in, 1.25in, 1.5in<br/>Metric: 25mm, 30mm, 40mm" },
                    { param: "Pressure", value: "600 - 4500psi (4.1 - 310bar) operational pressure range<br/>Adjustable in 50psi increments" },
                    { param: "Heat Time", value: "User selectable from 1-99 minutes" },
                    { param: "Curing Temperature", value: "150°F - 392°F (65°C - 200°C) selectable temperature range" },
                    { param: "Heating Power", value: "1000 Watts (110VAC) / 1500 Watts (230VAC)" }
                  ].map((spec, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-[#0f7db7]/10 transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      <td className="py-3 px-6 font-medium">{spec.param}</td>
                      <td className="py-3 px-6" dangerouslySetInnerHTML={{ __html: spec.value }}></td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-end">
              <motion.button
                className="bg-[#0f7db7] text-white px-6 py-2 rounded-lg flex items-center hover:bg-[#4babe5] transition duration-300 shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-file-download mr-2"></i>
                Download Complete Specifications
              </motion.button>
            </div>
          </motion.div>

          {/* Videos Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Videos</h2>
              <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Main Video Player */}
              <div className="lg:w-2/3 relative bg-black aspect-video">
                {/* Video Player - Auto-plays first video by default */}
                <video
                  key={`video-${activeVideoIndex}`} // Important for re-rendering when video changes
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  autoPlay
                  controls
                  muted
                  onEnded={() => setIsVideoPlaying(false)}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source src={`/product/video${activeVideoIndex + 1}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom controls overlay */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-70">
                    <motion.div
                      className="text-center px-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold mb-3 text-[#0f7db7]">SimpliMet™ 4000</h3>
                      <p className="mb-6 text-lg text-[#4babe5]">{videoThumbnails[activeVideoIndex].title}</p>
                      <motion.button
                        className="bg-[#0f7db7] text-white px-8 py-3 rounded-full flex items-center mx-auto hover:bg-[#4babe5] transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const videoElement = document.querySelector('video');
                          videoElement.play();
                          setIsVideoPlaying(true);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Play Video
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Separator with Gradient */}
              <div className="hidden lg:flex flex-col items-center mx-4">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-[#0f7db7] to-transparent opacity-50"></div>
                <div className="absolute top-1/2 -translate-y-1/2 bg-[#0f7db7] rounded-full p-2 shadow-lg">
                  <i className="fas fa-play text-white text-sm"></i>
                </div>
              </div>

              {/* Video List */}
              <div className="lg:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 p-4 overflow-y-auto max-h-[600px] border-l border-gray-700">
                <h3 className="text-white mb-4 font-semibold flex items-center">
                  <i className="fas fa-list-ul mr-2 text-[#0f7db7]"></i>
                  Related Videos
                </h3>
                <div className="space-y-4">
                  {videoThumbnails.map((video, index) => (
                    <motion.div
                      key={video.id}
                      className={`cursor-pointer group ${index === activeVideoIndex ? 'ring-2 ring-[#0f7db7]' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setActiveVideoIndex(index);
                        setIsVideoPlaying(true);
                        // Small delay to ensure video element is re-rendered before playing
                        setTimeout(() => {
                          const videoElement = document.querySelector('video');
                          videoElement.play();
                        }, 100);
                      }}
                    >
                      <div className="relative aspect-video bg-gray-700 overflow-hidden rounded-lg">
                        {/* Video thumbnail preview - using first frame of video */}
                        <video
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          muted
                          preload="metadata"
                        >
                          <source src={`/product/video${index + 1}.mp4#t=0.5`} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-[#0f7db7] bg-opacity-80 rounded-full p-2">
                            <i className="fas fa-play text-white"></i>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-white text-sm font-medium truncate">{video.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}