'use client'
import { useState } from 'react';

import Headers from "../../Headers/page"
import Footer from "../../Footer/page"
import Variety from "../../Variety/page"
import AIStyleSelector from '@/app/AiStyleSelector/page'
import Link from "next/link"
import { SlArrowRight } from "react-icons/sl";

const Pricing = () => {
  const [showCreateVideos, setShowCreateVideos] = useState(true); // Show by default
  const [showAutomation, setShowAutomation] = useState(true); // Show by default

  // Toggle functions for each section
  const handleShowCreateVideos = () => {
    setShowCreateVideos(true);
    setShowAutomation(false);
  };

  const handleShowAutomation = () => {
    setShowAutomation(true);
    setShowCreateVideos(false);
  };

  const handleShowAllOptions = () => {
    setShowCreateVideos(true);
    setShowAutomation(true);
  };
  return (

    <div>
      <Headers/>
      <div className="flex justify-center items-center bg-gray-100 border">
      <div className="bg-white p-6 rounded-lg shadow-inner w-full">
        <h1 className="text-center text-2xl font-bold mb-6">
          What would you like to achieve?
        </h1>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <button
            className="border border-gray-400 py-3 px-6 text-lg rounded-md hover:bg-gray-200"
            onClick={handleShowCreateVideos}
          >
            Create Videos Manually
          </button>
          <button
            className="border border-gray-400 py-3 px-6 text-lg rounded-md hover:bg-gray-200"
            onClick={handleShowAutomation}
          >
            Automate Content Creation & Posting
          </button>
          <button
            className="bg-black text-white py-3 px-6 text-lg rounded-md hover:bg-gray-800"
            onClick={handleShowAllOptions}
          >
            Show All Options
          </button>
        </div>

        {/* Conditionally render content based on button click */}
        {showCreateVideos && (
          <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 border mt-3 mb-2">
            <h1 className="text-2xl font-bold mb-6">CREATE VIDEOS</h1>
            <p className="text-center mb-12">
              Our distinct service is specifically designed for those who want
              to manually craft unique and engaging videos. It’s perfectly
              tailored for content creators, providing support for your video
              creation needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
              {/* Starter Plan */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-xl font-semibold">Starter</h2>
                <p className="text-2xl font-bold mt-2">$13.99 USD</p>
                <p className="text-gray-500 mt-3 mb-2">per month</p>
                <div className='flex justify-between bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700'>
                <Link
                  href="/pages/login"
                  className="mt-3 mb-2 "
                >
                  Get Started
                </Link>
                <span>
                  <SlArrowRight className='mt-3 mb-2 '/>
                </span>
                </div>
                <ul className="mt-4 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 30 videos /
                    month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 5 standard
                    voices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Powered by
                    GPT-4
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Download
                    video to post to social media
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Advanced
                    customization in real-time
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Reach global
                    audiences with 50+ languages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Custom fonts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Background
                    (AI images / web images)
                  </li>
                </ul>
              </div>

              {/* Advanced Plan */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-xl font-semibold">Advanced</h2>
                <p className="text-2xl font-bold mt-2">$15.99 USD</p>
                <p className="text-gray-500 mt-3 mb-2">per month</p>
                 <div className='flex justify-between bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-300'>
                <Link
                  href="/pages/login"
                  className="mt-3 mb-2 "
                >
                  Get Started
                </Link>
                <span>
                  <SlArrowRight className='mt-3 mb-2 '/>
                </span>
                </div>
                <ul className="mt-4 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 40 videos /
                    month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 5 standard
                    voices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Powered by
                    GPT-4
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Download
                    video to post to social media
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Advanced
                    customization in real-time
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Reach global
                    audiences with 50+ languages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Custom fonts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Background
                    (AI images / web images)
                  </li>
                </ul>
              </div>

              {/* Professional Plan */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-xl font-semibold">Professional</h2>
                <p className="text-2xl font-bold mt-2">$21.99 USD</p>
                <p className="text-gray-500 mt-3 mb-2">per month</p>
                <div className='flex justify-between bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700'>
                <Link
                  href="/pages/login"
                  className="mt-3 mb-2 "
                >
                  Get Started
                </Link>
                <span>
                  <SlArrowRight className='mt-3 mb-2 '/>
                </span>
                </div>
                <ul className="mt-4 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 50 videos /
                    month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 5 standard
                    voices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Powered by
                    GPT-4
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Download
                    video to post to social media
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Advanced
                    customization in real-time
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Reach global
                    audiences with 50+ languages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Custom fonts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Background
                    (AI images / web images)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

<>
     {showAutomation && (
     <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 border mt-3 mb-2">
      <h1 className="text-2xl font-bold mb-6">AUTOMATIONS</h1>
      <p className="text-center mb-12">
      Our distinct service designed for automated content posting. It s ideal for users who wish to maintain a consistent online presence with minimal manual intervention. This service is perfect for busy creator or anyone looking to streamline their digital content strategy.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {/* Silver Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Silver</h2>
          <p className="text-2xl font-bold mt-2">$13.99 USD</p>
          <p className="text-gray-500 mt-3 mb-2">per month</p>
          <div className='flex justify-between  border text-black hover:text-white py-2 px-4 rounded-lg hover:bg-gray-700'>
                <Link
                  href="/pages/login"
                  className="mt-3 mb-2 "
                >
                  Get Started
                </Link>
                <span>
                  <SlArrowRight className='mt-3 mb-2 '/>
                </span>
                </div>
          <ul className="mt-4 text-left">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> 30 videos / month
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> 5 standard voice
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Powered by GPT-4
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Download video to post to social media
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Advanced customization in real-time
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Reach global audiences with 50+ language options
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Custom fonts
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Background (AI images / web images)
            </li>
          </ul>
        </div>
        
        {/* Platinum Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Platinum</h2>
          <p className="text-2xl font-bold mt-2">$15.99 USD</p>
          <p className="text-gray-500 mt-3 mb-2">per month</p>
          <div className='flex justify-between  border text-black hover:text-white py-2 px-4 rounded-lg hover:bg-gray-700'>
                <Link
                  href="/pages/login"
                  className="mt-3 mb-2 "
                >
                  Get Started
                </Link>
                <span>
                  <SlArrowRight className='mt-3 mb-2 '/>
                </span>
                </div>
          <ul className="mt-4 text-left">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> 40 videos / month
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> 5 standard voice
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Powered by GPT-4
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Download video to post to social media
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Advanced customization in real-time
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Reach global audiences with 50+ language options
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Custom fonts
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span> Background (AI images / web images)
            </li>
          </ul>
        </div>
        
      
      </div>
    </div>
     )}
     </>
      </div>
    </div>
  
  
   
   
   
          {/* youtube section  */}
    <div className="mt-12 text-center w-full border  mb-2">
        <h2 className="text-xl font-semibold ">
          Real Engagement on YouTube & TikTok
        </h2>
        <p className="mt-4 text-lg md:text-lg">
          Post directly to YouTube & TikTok and get real views—better than our competitor.
        </p>

        <div className="flex justify-center mt-8">
          <div className="text-red-500 text-lg font-bold">Internal Server Error</div>
        </div>
      </div>
           {/* Variety section  */}
      <Variety/>
      {/* AIStyleSelector section  */}
<AIStyleSelector/>

{/* new section  */}
<div className="flex flex-col items-center justify-center  bg-white p-4 shadow-inner mt-2 mb-2 border ">
      <div className="flex flex-col md:flex-row w-full">

        <div className="md:w-1/2 text-left p-4">
       
          <p className=" text-2xl  font-semibold">
          Ready to start your video creation journey?
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link href={"/pages/login"} className="w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800">Create Your First Video Now</Link>
            
            <Link href={"/pages/signup"} className="w-full border border-black text-center py-2 rounded hover:bg-gray-200">Sign Up</Link>
          </div>
        </div>

      </div>

   
    </div>
    <Footer/>
    </div>
  )
}

export default Pricing