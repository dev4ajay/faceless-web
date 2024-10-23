"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../../images/logo-looj.png';


const Page = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="w-full bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
          
         
          <Image src={Logo} alt="Logo" className="w-40 h-12" />
          </Link>
        </div>

        {/* Menu items for large screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/pages/affiliate" className="text-gray-700">
            Affiliate
          </Link>
          <Link href="/pages/pricing" className="text-gray-700">
            Pricing
          </Link>
          <Link href="/pages/login" className="text-gray-700">
            Log In
          </Link> 
          <Link
           href={"/pages/signup"}
            className="bg-black text-white px-4 py-2 rounded" 
          
          >
            Try for Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="/pages/affiliate" className="block px-4 py-2 text-gray-700">
            Affiliate
          </Link>
          <Link href="/pages/pricing" className="block px-4 py-2 text-gray-700">
            Pricing
          </Link>
          <Link href="/pages/login" className="block px-4 py-2 text-gray-700">
            Log In
          </Link>
          <Link  href={"/pages/signup"}
            className="w-full bg-black text-white px-4 py-2 rounded mb-3"
         
          >
            Try for Free
          </Link> 
        </div>
      )}
    </div>
  );
};

export default Page;
