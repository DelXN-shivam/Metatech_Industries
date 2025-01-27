import React from 'react'

const Header = () => {
    return (
        <div>
            {/* Navbar */}
            <header className="bg-black text-white p-4 opacity-70">
                <div className="max-w-screen-xl mx-auto flex justify-end">
                    {/* <div className="text-2xl font-bold">MetaTech Industries</div> */}
                    <nav>
                        <ul className="flex space-x-6 items-end">
                            <li>
                                <a href="#" className="text-orange-500 hover:text-white text-2xl">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 text-2xl">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 text-2xl">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500 text-2xl">
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