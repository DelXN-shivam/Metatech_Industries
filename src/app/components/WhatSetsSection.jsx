import React from 'react'

const WhatSetsSection = () => {
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
                </div>
            </section>
        </div>
    )
}

export default WhatSetsSection