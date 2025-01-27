import React from 'react'

const Footer = () => {
    return (
        <div>
            <section id="about" className="py-16 bg-gray-100">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-orange-600">About Us</h2>
                    <p className="mt-4 text-lg">
                        We are MetaTech Industries, based in Pune, specializing in advanced
                        metallography and cutting-edge machinery.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold">Location</h3>
                            <p>
                                426, Nayanan Pet, Cosmos Bank Building, Off Laxmi Road, Pune -
                                411 030
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Contact</h3>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:sales@metatechind.com"
                                    className="text-orange-600"
                                >
                                    sales@metatechind.com
                                </a>
                            </p>
                            <p>Phone: +91 94225 26706</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2025 MetaTech Industries. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer