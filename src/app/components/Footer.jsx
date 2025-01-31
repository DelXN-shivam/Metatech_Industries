'use client'

import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='flex flex-col bg-black'>
            <div className='flex flex-row justify-around items-start px-8 pt-10'>
                {/* Logo and Why Choose Us Section */}

                <div className="flex flex-col gap-2 pt-4">
                    <div className="bg-white p-4 mb-4 rounded-lg transform transition duration-500 hover:scale-105">
                        <img src="/images/metatech_logo.png" alt="Metatech Logo" className="w-56" />
                    </div>
                    <div className="bg-slate-700 text-white p-2 mt-2 rounded-lg text-center lg:w-64 lg:text-left px-8 py-4">
                        <h4 className="text-lg font-semibold text-white">Why Choose Us?</h4>
                        <p className="text-sm text-white mt-2">With decades of expertise, cutting-edge technology, and unparalleled customer service, Metatech Industries is your trusted partner.</p>
                    </div>
                </div>


                {/* Our Product and Quick Link */}
                <div className='w-full px-24  flex flex-row items-start justify-between pt-4'>
                    <div className="text-white items-start">
                        <h3 className="text-lg font-bold mb-3">Our Products</h3>
                        <ul className="space-y-2">
                            {["Abrasive Sectioning", "Diamond Sectioning", "Hot/Cold Mounting", "Manual/Automatic Polishing", "Microscopes"].map((item, index) => (
                                <li key={index} className="cursor-pointer hover:text-blue-400 transition">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-white">
                        <h3 className="text-lg font-bold mb-3 text-end">Quick Links</h3>
                        <ul className="space-y-2 text-end">
                            {["Home", "Products", "Lab Service", "Course", "Contact"].map((link, index) => (
                                <li key={index} className="cursor-pointer hover:text-blue-400 transition">
                                    <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="flex flex-col w-1/2 rounded-lg bg-slate-700 text-white px-8 py-4 space-y-2 justify-center">
                    <h3 className="text-lg sm:text-xl font-bolds text-center lg:text-left ">Contact Us</h3>
                    <p className="text-sm sm:text-base text-center lg:text-left hover:underline hover:text-blue-400">
                        Cosmos Bank Bldg, 476, Laxmi Rd, Bhatancha Bol, Narayan Peth, Pune, Maharashtra 411030
                    </p>
                    <p className="text-sm sm:text-base text-center lg:text-left">
                        Phone: <a href="tel:+919422526706" className="text-blue-400 hover:underline">+91 94225 26706</a>
                    </p>
                    <p className="text-sm sm:text-base text-center lg:text-left">
                        Email: <a href="mailto:sales@metatechind.com" className="text-blue-400 hover:underline">sales@metatechind.com</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-3 mt-3">
                        {[Facebook, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                            <a key={index} href="#" className="p-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition transform hover:scale-110 shadow-md">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-10 text-center text-white mb-8'>
                © 2024 <span className='hover:text-blue-500'><a href="/#">Metatech Industries</a></span>.
                All rights reserved. Managed by
                <span className='hover:text-red-500'>
                    <a href="https://delxntech.com/" target="_blank" rel="noopener noreferrer"> DelXN Technologies</a>
                </span>
            </div>
        </div>


    )
}

export default Footer;




// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

// const Footer = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setTimeout(() => setIsVisible(true), 200);
//     }, []);

//     return (
//         // <footer className={`bg-black text-white py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//         <div className={''}>
//             <div className="container flex justify-between">

//                 {/* Logo Section */}
//                 <div className="flex flex-col items-center lg:items-start gap-2">
//                     <div className="bg-white p-4 mb-4 rounded-lg transform transition duration-500 hover:scale-105">
//                         <img src="/images/metatech_logo.png" alt="Metatech Logo" className="w-56" />
//                     </div>
//                     <div className="bg-slate-700 text-white p-2 mt-2 rounded-lg text-center lg:w-64 lg:text-left px-8 py-4">
//                         <h4 className="text-lg font-semibold text-white">Why Choose Us?</h4>
//                         <p className="text-sm text-white mt-2">With decades of expertise, cutting-edge technology, and unparalleled customer service, Metatech Industries is your trusted partner.</p>
//                     </div>
//                 </div>

//                 <div className="flex flex-col  md:flex-row">
//                     {/* Our Products Section */}
// <div className="">
//     <h3 className="text-lg font-bold mb-3">Our Products</h3>
//     <ul className="space-y-2">
//         {["Abrasive Sectioning", "Diamond Sectioning", "Hot/Cold Mounting", "Manual/Automatic Polishing", "Microscopes"].map((item, index) => (
//             <li key={index} className="cursor-pointer hover:text-blue-400 transition">{item}</li>
//         ))}
//     </ul>
// </div>

// {/* Quick Links Section */}
// <div className="">
//     <h3 className="text-lg font-bold mb-3 text-end">Quick Links</h3>
//     <ul className="space-y-2 text-end">
//         {["Home", "Products", "Lab Service", "Course", "Contact", "FAQs"].map((link, index) => (
//             <li key={index} className="cursor-pointer hover:text-blue-400 transition">
//                 <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
//             </li>
//         ))}
//     </ul>
// </div>
//                 </div>


//                 {/* Contact Us Section */}
// <div className="w-full xl:w-1/4 bg-slate-700 px-3 sm:px-8 md:px-10 py-3 rounded-lg space-y-4 text-white">
//     <h3 className="text-lg sm:text-xl font-bold mb-3 text-center lg:text-left">Contact Us</h3>
//     <p className="text-sm sm:text-base text-center lg:text-left hover:underline hover:text-blue-400">
//         Cosmos Bank Bldg, 476, Laxmi Rd, Bhatancha Bol, Narayan Peth, Pune, Maharashtra 411030
//     </p>
//     <p className="text-sm sm:text-base text-center lg:text-left">
//         Phone: <a href="tel:+919422526706" className="text-blue-400 hover:underline">+91 94225 26706</a>
//     </p>
//     <p className="text-sm sm:text-base text-center lg:text-left">
//         Email: <a href="mailto:sales@metatechind.com" className="text-blue-400 hover:underline">sales@metatechind.com</a>
//     </p>

//     {/* Social Media Icons */}
//     <div className="flex justify-center lg:justify-start space-x-3 mt-3">
//         {[Facebook, Instagram, LinkedIn, YouTube].map((Icon, index) => (
//             <a key={index} href="#" className="p-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition transform hover:scale-110 shadow-md">
//                 <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
//             </a>
//         ))}
//     </div>
// </div>
//             </div>
// <div className='pt-12 text-center'>
//     © 2024 <span className='hover:text-blue-500'><a href="/#">Metatech Industries</a></span>.
//     All rights reserved. Managed by
//     <span className='hover:text-red-500'>
//         <a href="https://delxntech.com/" target="_blank" rel="noopener noreferrer"> DelXN Technologies</a>
//     </span>
// </div>
//         </div>
//     );
// };

// export default Footer;
