"use client";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../images/logo-looj.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 border ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 ">
    
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            className="w-40 h-12"
          />
          </Link>
          <span>© 2024</span>
        </div>

  
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="mailto:example@example.com" aria-label="Email">
            <FaEnvelope className="text-gray-500 hover:text-gray-800 w-5 h-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-gray-500 hover:text-gray-800 w-5 h-5" />
          </a>
        </div>

    
        <div className="flex flex-wrap justify-center space-x-6 text-gray-600 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-800">Home</a>
          <a href="#" className="hover:text-gray-800">Pricing</a>
          <a href="#" className="hover:text-gray-800">Terms of Service</a>
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
