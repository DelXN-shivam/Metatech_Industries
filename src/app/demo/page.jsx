'use client';

import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const MicroscopeCatalog = () => {
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
  
  const categories = [
    {
      id: 'microscope',
      title: 'Microscope and Image Analyzer',
      subItems: [
        'Inverted Microscope',
        'Inverted Microscope - Metagraph',
        'Upright Microscope',
        'Stereo Microscope'
      ]
    },
    { id: 'cutting', title: 'Automatic Cutting Machines' },
    { id: 'diamond', title: 'Diamond Cutting Machines' },
    { id: 'moulding', title: 'Moulding Machines' },
    { id: 'grinding', title: 'Grinding Machines' },
    { id: 'analyzer', title: 'Image Analyzer' },
    { id: 'particle', title: 'Particle Size Analysis Systems' },
    { id: 'hardness', title: 'Hardness Tester' },
    { id: 'electro', title: 'Electro - M' }
  ];

  const products = [
    {
      id: 1,
      series: 'RXL3-Series',
      description: 'RXL-3 Series Enhanced ion microscopes are manufactured using best quality achromatic objectives.',
      image: '/api/placeholder/200/240'
    },
    {
      id: 2,
      series: 'RXL3-Series',
      description: 'RXL-3 Series Enhanced ion microscopes are manufactured using best quality achromatic objectives.',
      image: '/api/placeholder/200/240'
    },
    {
      id: 3,
      series: 'PXL3-Series',
      description: 'PXL-3 Series Enhanced ion microscopes are manufactured using best quality achromatic objectives.',
      image: '/api/placeholder/200/240'
    },
    {
      id: 4,
      series: 'RXL3-Series',
      description: 'RXL-3 Series Enhanced ion microscopes are manufactured using best quality achromatic objectives.',
      image: '/api/placeholder/200/240'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 mx-auto mt-10 bg-[#b8d5f0] p-4 rounded-lg shadow-lg ">
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={item.id}>
                        <button
                            className="w-full text-left p-2 hover:bg-slate-400 text-[#3281ca] hover:text-white  bg-primary rounded-lg hover:opacity-80 flex items-center"
                            onClick={() => toggleSublist(index)}
                        >
                            <span className={`mr-2 transition-transform ${openIndex === index ? "rotate-90" : ""}`}>
                                <IoIosArrowForward />
                            </span>
                            {item.name}
                        </button>
                        {openIndex === index && (
                            <ul className="mt-1 ml-6 space-y-1">
                                {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex} className="rounded-lg hover:text-white hover:bg-slate-400 pl-3">
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={product.image}
                  alt={product.series}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {product.series}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicroscopeCatalog;


// 'use client';

// import React, { useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";

// const Products = () => {

//     const [openIndex, setOpenIndex] = useState(null);

//     const items = [
//         {
//             id: 1, name: "Automatic Cutting Machines", subItems: ["Automatic Cutting Machines - Auto Cut",
//                 "Automatic Cutting Machines - Auto-S",
//                 "Automatic Cutting Machines - MetaCut",
//                 "Oscillating Abrasive Cut-off Machines",
//                 "Metacut-I",
//                 "Tube Cutting Machines"]
//         },
//         {
//             id: 2, name: "Microscope and Image Analyzer", subItems: ["Inverted Microscope",
//                 "Inverted Microscope - Metagraph",
//                 "Upright Microscope",
//                 "Stereo Microscope"]
//         },
//         {
//             id: 3, name: "Automatic Micro Hardness Tester", subItems: ["MHT - (MVH-1000)"
//                 , "MHT - (MVH-1C)",
//                 "MHT - (MVMH)",
//                 "Repair & MHT"]
//         },
//         {
//             id: 4, name: "Diamond Cutting Machines", subItems: ["DCM", "HI Speed DCM"]
//         },
//         {
//             id: 5, name: "Image Analyzer", subItems: ["Grain Analysis",
//                 "Plainmetry Method",
//                 "Phase Analysis",
//                 "Graphite",
//                 "Point Counter",
//                 "Inclusion"]
//         },
//         {
//             id: 6, name: "Hardness Tester", subItems: ["Portable Vickers Hardness Tester",
//                 "Portable Brinell Hardness Tester",
//                 "Rockwell Hardness Tester",
//                 "Brinell Hardness Tester",
//                 "Leeb Hardness Tester"]
//         },
//         {
//             id: 7, name: "Image Analyzer", subItems: ["Grain Analysis", "Planimetry Method", "Phase Analysis", "Graphite", "Point Counter", "Inclusion"]
//         },
//         {
//             id: 8, name: "Moulding Machines", subItems: ["Moulding Machine - Automount E",
//                 "Electro Hydraulic Press - Automount EH",
//                 "Pneumatic Press - Automount",
//                 "Transparent Mould Making Machine"]
//         },
//         {
//             id: 9, name: "Grinding Machines", subItems: ["Metapol DC II",
//                 "Semi-Automatic Grinding Polishing",
//                 "Multi-Specimen Grinding Machine",
//                 "Heavy Duty Belt Grinder",
//                 "Belt Grinder"]
//         },
//         {
//             id: 10, name: "Particle Size Analysis System", subItems: ["PSAS - Stereo Microscope",
//                 "PSAS - Metallurgical Microscope",
//                 "Component Cleaning Machine"]
//         },
//         {
//             id: 11, name: "Hardness Test Block Diamond Indenters", subItems: ["Rockwell",
//                 "Rockwell Superficial",
//                 "Vickers",
//                 "Micro Vickers",
//                 "Brinell",
//                 "Aluminium Test Blocks"]
//         },
//         {
//             id: 12, name: "In-situ Metallography Kit", subItems: ["Portable Grinder",
//                 "Portable Electro Polisher",
//                 "Replica",
//                 "Portable Microscope Image Analyzer"]
//         },
//     ];

//     const toggleSublist = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="w-80 mx-auto mt-10 bg-[#bdd7ea] p-4 rounded-lg shadow-lg">
//             <ul className="space-y-2">
//                 {items.map((item, index) => (
//                     <li key={item.id}>
//                         <button
//                             className="w-full text-left p-2 text-white hover:text-black bg-primary opacity-50 rounded-lg hover:opacity-80 flex items-center"
//                             onClick={() => toggleSublist(index)}
//                         >
//                             <span className={mr-2 transition-transform ${openIndex === index ? "rotate-90" : ""}}>
//                                 <IoIosArrowForward />
//                             </span>
//                             {item.name}
//                         </button>
//                         {openIndex === index && (
//                             <ul className="mt-1 ml-6 space-y-1">
//                                 {item.subItems.map((subItem, subIndex) => (
//                                     <li key={subIndex} className="rounded-lg hover:text-white">
//                                         {subItem}
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Products