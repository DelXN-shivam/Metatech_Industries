import React from 'react'
import CompanyHeader from './CompanyHeader'
import Header from './Header'

const HeroSection = () => {
    return (
        <div>{/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: "url('/images/machine_bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="max-w-screen-xl mx-auto text-center text-white relative z-10 py-8">
                    <CompanyHeader />
                    <Header />
                    <div className='flex flex-col max-w-screen-xl mx-auto justify-start items-start pt-28'>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Most Advanced Machinery
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold pt-4">
                            MECHANICAL COMPANY
                        </h1>
                        <h3 className='font-bold pt-8'>Real Measuring System,</h3>
                        <h3 className='font-bold'>Reliability, and Performance</h3>
                        <div className="space-x-10 pt-10">
                            <a
                                href="#about"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 border border-black bottom-10 font-semibold"
                            >
                                Read More
                            </a>
                            <a
                                href="#about"
                                className="bg-gray-500 hover:bg-orange-600 text-white px-6 py-3 border border-white bottom-10 font-semibold"
                            >
                                About Us
                            </a>
                        </div>

                    </div>
                    <div className="pt-32 flex flex-row items-center flex-wrap justify-center">
                        <div className="bg-orange-500 text-white font-semibold px-6 py-4 text-lg w-80">
                            38 Years of Undefeated Success 
                        </div>
                        <div className="bg-gray-800 text-white font-semibold px-10 py-4 text-lg w-80">
                            Explore Us !
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default HeroSection