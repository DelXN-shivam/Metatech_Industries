export default function WhatSetsUsApart() {
    const features = [
        {
            title: "38+ Years of Expertise",
            description: "Decades of Mastery in Metallography",
        },
        {
            title: "State-of-the-Art Equipment",
            description: "Equipped with Cutting-Edge Technology",
        },
        {
            title: "Customizable Solutions",
            description: "Tailored to Meet Your Unique Needs",
        },
        {
            title: "Excellent After-Sales Support",
            description: "Unmatched After-Sales Support You Can Rely On",
        },
        {
            title: "Trusted by Leading Brands",
            description: "Collaborating with Industry Leaders to Drive Excellence and Innovation",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-14">
                What Sets Us Apart
            </h2>

            {/* First Row - 3 Features */}
            <div className="flex gap-10 mb-10 justify-evenly">
                {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex flex-col items-start text-center">
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
                        <p className="text-gray-600 text-wrap max-w-72">{feature.description}</p>
                    </div>
                ))}
            </div>
            {/* Second Row - 2 Centered Features */}
            <div className="flex gap-10 mb-5 justify-evenly">
                {features.slice(3, 5).map((feature, index) => (
                    <div key={index} className="flex flex-col items-start">
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <span className="block w-20 h-1 bg-yellow-400 mt-1 mb-2"></span>
                        <p className="text-gray-600 text-wrap max-w-72">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
