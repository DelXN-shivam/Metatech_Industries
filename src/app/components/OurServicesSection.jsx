import React from 'react'

const OurServicesSection = () => {
    return (
        <div>
            <section id="apart" className="py-16">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-orange-600">
                        What Sets Us Apart
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold">38+ Years of Expertise</h3>
                            <p>Decades of Mastery in Metallography</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">
                                State-of-the-Art Equipment
                            </h3>
                            <p>Equipped with Cutting-Edge Technology</p>
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