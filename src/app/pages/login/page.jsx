"use client"
import { useState } from 'react';
import Logo from '../../../images/logo-looj.png';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" className="w-40 h-12 mx-auto mb-4" /></Link>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
      
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              required
            />
          </div>
    
    
      
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
          <div className="mt-8 text-center">
      <div className="flex justify-between mb-4 text-sm">
        <Link href="/pages/forgotpassword" className="text-black hover:underline">
          Forgot Password
        </Link>
        <Link href="/pages/signup" className="text-black hover:underline">
          Register
        </Link>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <button className="w-full flex gap-2 justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50">
      <span><FcGoogle className='text-2xl'/></span>
        Continue with Google
      </button>
    </div>
        </form>
      </div>
    </div>
  );
}
