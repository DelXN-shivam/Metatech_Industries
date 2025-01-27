import React from 'react'

const ExpertiseSection = () => {
    return (
        <div>
            <section id="expertise" className="py-16 bg-gray-100">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-orange-600">
                        Explore Our Expertise
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src="/images"
                                alt="Automatic Cutting Machines"
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                Automatic Cutting Machines
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExpertiseSection