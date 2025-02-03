import React, { useState } from 'react';
import { FiMenu, FiSearch, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLevel, setNavLevel] = useState(0);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const goToNextLevel = () => setNavLevel(navLevel + 1);
  const goToPreviousLevel = () => setNavLevel(navLevel - 1);

  return (
    <div>
      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleDrawer} className="fixed top-5 left-5 z-50 p-2 rounded-full bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
        <FiMenu size={24} />
      </button>
      <div className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`} aria-hidden="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleDrawer}></div>
      </div>
      {/* Drawer */}
      <div className={`fixed top-0 left-0 w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300 z-50`}>
        <div className="px-4 py-6 bg-pink-200 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Drawer Menu</h2>
          <button onClick={toggleDrawer} className="p-2 rounded-full bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <FiChevronLeft size={24} />
          </button>
        </div>
        <div className="px-4 py-2">
          <div className="relative">
            <input type="text" placeholder="Search..." className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <span className="absolute top-0 right-0 mt-2 mr-4 text-gray-500">
              <FiSearch size={20} />
            </span>
          </div>
        </div>
        <div className="px-4 py-2">
          {navLevel === 0 && (
            <ul>
              <li>
                <button onClick={goToNextLevel} className="w-full py-2 text-left text-gray-700 hover:text-gray-900 focus:outline-none">
                  Sub Menu 1 <FiChevronRight className="inline-block ml-2" />
                </button>
              </li>
              <li>
                <button onClick={goToNextLevel} className="w-full py-2 mt-2 text-left text-gray-700 hover:text-gray-900 focus:outline-none">
                  Sub Menu 2 <FiChevronRight className="inline-block ml-2" />
                </button>
              </li>
            </ul>
          )}
          {navLevel === 1 && (
            <div>
              <button onClick={goToPreviousLevel} className="mb-4 text-gray-700 hover:text-gray-900 focus:outline-none">
                <FiChevronLeft className="inline-block mr-2" /> Back
              </button>
              <ul>
                <li className="py-2 text-gray-700">Option 1</li>
                <li className="py-2 text-gray-700">Option 2</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
