import React from "react";

const Services = () => {
    const services = [
        {
            icon: "path-to-icon-1.png", // Replace with your actual icon path
            title: "Microhardness Tester with Image Analyser Facility",
            description:
                "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        },
        {
            icon: "path-to-icon-2.png", // Replace with your actual icon path
            title: "Automatic Sectioning",
            description:
                "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        },
        {
            icon: "path-to-icon-3.png", // Replace with your actual icon path
            title: "Manual/Automatic Polishing/Grinding",
            description:
                "Lorem ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s.",
        },
    ];

    return (
        <div>
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-black px-8 text-center mb-8">
                Our Services
            </h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-96 bg-gray-100">
                        <div className="relative w-64 h-56 bg-white shadow-lg rounded-lg">
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
                            {/* <div className="flex flex-col items-center justify-center h-full"> */}
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


        // <div className="py-10 bg-gray-100">
        //     {/* Section Title */}
        //     <h2 className="text-2xl md:text-3xl font-bold text-black px-8 text-center mb-8">
        //         Our Services
        //     </h2>

        //     {/* Grid Container */}
        //     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        //         {/* Service Cards */}
        //         {services.map((service, index) => (
        //             <div
        //                 key={index}
        //                 className="relative border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
        //             >
        //                 {/* Icon Section */}
        // <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 w-16 h-16 flex items-center justify-center shadow-lg">
        //     <img
        //         src={service.icon}
        //         alt="Service Icon"
        //         className="h-10 w-10 object-contain"
        //     />
        // </div>

        //                 {/* Card Content */}
        // <div className="flex flex-col justify-between p-6 text-center h-full mt-8">
        //     {/* Title Section */}
        //     <h3 className="text-lg font-bold mb-4">{service.title}</h3>

        //     {/* Description Section */}
        //     <div className="bg-gray-800 text-white p-4 rounded mt-auto">
        //         <p className="text-sm">{service.description}</p>
        //     </div>
        // </div>
        //             </div>

        //         ))}
        //     </div>
        // </div>
    );
};

export default Services;