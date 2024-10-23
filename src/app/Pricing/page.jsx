import Link from 'next/link';
import React from 'react';
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 border mt-2 mb-2">
      <div className="flex flex-col md:flex-row w-full">

        <div className="md:w-1/2 text-left p-4">
          <h1 className="text-2xl font-bold md:text-xl">
            Grow on Autopilot with <span className="bg-black text-white px-2">Faceless Video</span> Creation
          </h1>
          <p className="mt-4 text-lg md:text-lg">
            Simplify content creation with AI-powered audio, imagery, and subtitles—all in one platform.
            Start now, stay private, and earn effortlessly.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link href={"/pages/login"} className="w-full bg-black text-center text-white py-2 rounded hover:bg-gray-800">Pricing</Link>
            <Link  href={"/pages/signup"} className="w-full border border-black py-2 text-center rounded hover:bg-gray-200">Sign Up</Link>
          </div>
        </div>

      </div>

      {/* Section 2 */}
      <div className="mt-12 text-center w-full">
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
    </div>
  );
};

export default Page;
