import Image from 'next/image';
import React from 'react';

const ExpertiseSection = () => {
    const expertiseData = [
        {
            title: 'Automatic Cutting Machines',
            image: '/images/image_1.png',
        },
        {
            title: 'Spectro Grinding Machines',
            image: '/images/spectro_grinding.jpg',
        },
        {
            title: 'Automatic Cutting Machines',
            image: '/images/automatic_cutting2.jpg',
        },
        {
            title: 'Polishing Machines',
            image: '/images/polishing.jpg',
        },
        {
            title: 'Repair and Maintenance Services',
            image: '/images/repair_maintenance.jpg',
        },
        {
            title: 'Hot/Cold Mounting',
            image: '/images/hot_cold_mounting.jpg',
        },
    ];

    return (
        <div className="p-8 bg-white">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Our Expertise</h2>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {expertiseData.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full max-w-xs rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0  flex items-center justify-center">
                            <h3 className="text-lg font-semibold text-white text-center px-2">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Explore More */}
            <div className="mt-8 text-center">
                <a
                    href="#"
                    className="text-orange-500 font-semibold flex items-center justify-center space-x-2 hover:underline"
                >
                    <span>Explore More</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ExpertiseSection;
