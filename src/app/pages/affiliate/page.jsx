"use client"
import React ,{useState} from 'react'
import Headers from "../../Headers/page"
import Footer from "../../Footer/page"
import FAQ from '@/app/Faq/page'
import Link from 'next/link'

const Affiliate = () => {
  const [affiliates, setAffiliates] = useState(50);

  // Calculate earnings based on the number of affiliates
  const annualEarnings = (affiliates * 5280) / 100;
  const monthlyEarnings = (affiliates * 440) / 100;
  return (
    <div>

      <Headers/>
      <>
      <div className="flex justify-center items-center  border p-4 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-none w-full ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left section */}
          <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Earn <span className="bg-black text-white px-2 py-1 ">20% </span>Passive Income
            </h1>
            <p className="text-gray-600 mt-4 mb-2">
              Join our affiliate program and receive 20% of every recurring payment made by your referrals.
              The more referrals you bring, the higher your earning potential.
            </p>
            <Link href={"/pages/signup"} className="mt-3 mb-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Become an Affiliate
            </Link>
          </div>
          
          {/* Right section */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Potential Earnings</h2>
            
        

   {/* Range Slider */}
   <input
              type="range"
              min="1"
              max="100"
              value={affiliates}
              onChange={(e) => setAffiliates(e.target.value)}
              className="mt-4 w-full max-w-xs"
            />

            {/* Earnings Info */}
            <div className=" mt-4">
              <p className="text-gray-800 text-lg">
                <span className="font-bold">👥 Number of Affiliates: {affiliates}</span>
              </p>
              <p className="text-gray-800 mt-2">
                <span className="font-bold text-2xl">${annualEarnings.toFixed(2)}</span> annually
              </p>
              <p className="text-gray-800 mt-1">
                <span className="font-bold text-2xl">${monthlyEarnings.toFixed(2)}</span> monthly
              </p>
            </div>

         
          </div>
        </div>
      </div>
    </div>
      </>
      <FAQ/>
      <Footer/>

    </div>
  )
}

export default Affiliate