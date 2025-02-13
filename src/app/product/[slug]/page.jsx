'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

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
  );
};

export default ProductPage;



// 'use client';

// import React, { useState } from 'react';
// import { Card } from '@/components/ui/card';

// const ProductPage = () => {
//   // Sample product data
//   const product = {
//     name: "Premium Leather Backpack",
//     description: "Handcrafted from genuine leather, this versatile backpack combines classic style with modern functionality. Perfect for daily commute or weekend adventures.",
//     price: "$199.99",
//     features: [
//       "100% genuine leather construction",
//       "Laptop compartment fits up to 15-inch devices",
//       "Water-resistant interior lining",
//       "Adjustable shoulder straps"
//     ],
//     images: [
//       "/api/placeholder/600/600",
//       "/api/placeholder/600/600",
//       "/api/placeholder/600/600",
//       "/api/placeholder/600/600"
//     ]
//   };

//   // State for currently selected image
//   const [selectedImage, setSelectedImage] = useState(0);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Image Gallery Section */}
//         <div className="space-y-4">
//           {/* Main Image */}
//           <div className="aspect-square w-full relative">
//             <img
//               src={product.images[selectedImage]}
//               alt={`Product view ${selectedImage + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
          
//           {/* Thumbnail Gallery */}
//           <div className="flex gap-4">
//            ; {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative aspect-square w-24 ${
//                   selectedImage === index
//                     ? 'ring-2 ring-blue-500'
//                     : 'hover:ring-2 hover:ring-gray-300'
//                 } rounded-md overflow-hidden`}
//               >
//                 <img
//                   src={image}
//                   alt={`Product thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold">{product.name}</h1>
//             <p className="text-2xl font-semibold text-blue-600 mt-2">{product.price}</p>
//           </div>

//           <Card className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Description</h2>
//             <p className="text-gray-600">{product.description}</p>
//           </Card>

//           <Card className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Key Features</h2>
//             <ul className="space-y-2">
//               {product.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="mr-2">•</span>
//                   <span className="text-gray-600">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;





// 'use client';


// 


// const ProductDetail = () => {
    // const params = useParams();
    // const { slug } = params;

//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-3xl font-bold text-gray-800 capitalize">{slug.replace(/-/g, ' ')}</h1>
//             <p className="text-gray-600 mt-2">This is the product description for {slug.replace(/-/g, ' ')}.</p>
//             <img src={`/images/products/${slug}.jpg`} alt={slug} className="w-full max-w-lg mt-4 rounded-lg shadow-lg"/>
//             <h2 className="text-2xl font-semibold mt-6">Features</h2>
//             <ul className="list-disc list-inside text-gray-700 mt-2">
//                 <li>Feature 1 of {slug.replace(/-/g, ' ')}</li>
//                 <li>Feature 2 of {slug.replace(/-/g, ' ')}</li>
//                 <li>Feature 3 of {slug.replace(/-/g, ' ')}</li>
//             </ul>
//         </div>
//     );
// };

// export default ProductDetail;
