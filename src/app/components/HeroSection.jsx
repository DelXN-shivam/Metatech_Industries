import React from 'react'

const HeroSection = () => {
    return (
        <div>{/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: "url('path/to/your-image.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-screen-xl mx-auto text-center text-white relative z-10 py-32">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Most Advanced Machinery <br /> MECHANICAL COMPANY
                    </h1>
                    <p className="mt-4 text-xl">
                        Real Measuring System, Reliability, and Performance
                    </p>
                    <div className="mt-6">
                        <a
                            href="#about"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </section></div>
    )
}

export default HeroSection