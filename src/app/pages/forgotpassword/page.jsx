"use client"
import { useState } from 'react';
import Logo from '../../../images/logo-looj.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
 
  
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
          <Image src={Logo} alt="Logo" className="w-40 h-12 mx-auto mb-4" />
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Forgot Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
      
          <div className="mb-4">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Username / Email .... "
              required
            />
          </div>
        
    
    
      
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-200"
          >
            Continue
          </button>
          <div className="mt-8 text-center">
      <div className="flex justify-between mb-4 text-sm">
     
        <Link href="/pages/login" className="text-black hover:underline">
          Login
        </Link>
      </div>

   

    
    </div>
        </form>
      </div>
    </div>
  );
}
