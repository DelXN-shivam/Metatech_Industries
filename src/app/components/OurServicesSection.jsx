import React from "react";

const Services = () => {
    const services = [
        {
            icon: "/images/Coffee maker.png", // Replace with your actual icon path
            title: "Microhardness Tester with Image Analyser Facility",
            description:
                "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        },
        {
            icon: "/images/Gears set.png", // Replace with your actual icon path
            title: "Automatic Sectioning",
            description:
                "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        },
        {
            icon: "/images/Laser.png", // Replace with your actual icon path
            title: "Manual/Automatic Polishing/Grinding",
            description:
                "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        },
        // Add more services as needed...
    ];

    return (
        <div className="py-10 bg-gray-50">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-black px-8 text-center mb-8">
                Our Services
            </h2>
            <div className="container mx-auto grid grid-cols-1s sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group flex items-center justify-center h-72 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-100"
                    >
                        <div className="relative w-64 h-56 bg-white shadow-md rounded-lg transition-transform duration-300 group-hover:scale-105">
                            {/* Icon positioned at the top border */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-4 shadow-md">
                                {/* <IconHome className="w-6 h-6" /> */}
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-orange-500 w-16 h-16 flex items-center justify-center shadow-lg">
                                    <img
                                        src={service.icon}
                                        alt="Service Icon"
                                        className="h-10 w-10 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content inside the square container */}
                            <div className="flex flex-col justify-evenly text-center h-full mt-8">
                                {/* Title Section */}
                                <h3 className="text-lg font-bold mb-4">{service.title}</h3>

                                {/* Description Section */}
                                <div className="bg-gray-800 text-white p-4 rounded">
                                    <p className="text-sm">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
