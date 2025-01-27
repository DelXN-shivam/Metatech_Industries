import React from 'react'

const Header = () => {
    return (
        <div>
            {/* Navbar */}
            <header className="bg-orange-600 text-white p-4">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">MetaTech Industries</div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header></div>
    )
}

export default Header