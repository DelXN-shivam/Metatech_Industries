'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Footer from '@/app/components/Footer';

const ProductPage = () => {

    const params = useParams();
    const { slug } = params;
    console.log(slug);
    
  // Sample product data
  const product = {
    name: slug,
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



  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square w-full relative">
            <img
              src={product.images[selectedImage]}
              alt={`Product view ${selectedImage + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square w-24 ${
                  selectedImage === index
                    ? 'ring-2 ring-blue-500'
                    : 'hover:ring-2 hover:ring-gray-300'
                } rounded-md overflow-hidden`}
              >
                <img
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mt-2">{product.price}</p>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Features Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductPage;
