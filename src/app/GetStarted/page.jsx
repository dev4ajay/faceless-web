"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const StatsSection = () => {
  const [videosCreated, setVideosCreated] = useState(0);
  const [creatorsJoined, setCreatorsJoined] = useState(0);

  useEffect(() => {
    const videoTarget = 69987;
    const creatorTarget = 27718;
    const duration = 2000;

    let videoCount = 0;
    let creatorCount = 0;

    const incrementValue = (target, setter, intervalTime) => {
      const increment = target / (duration / intervalTime);
      const interval = setInterval(() => {
        videoCount += increment;
        creatorCount += increment;
        if (videoCount >= target) {
          videoCount = target;
          clearInterval(interval);
        }
        setter(Math.floor(videoCount));
      }, intervalTime);
    };

    incrementValue(videoTarget, setVideosCreated, 20);
    incrementValue(creatorTarget, setCreatorsJoined, 20);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white py-10 w-full border mt-3 mb-2"> {/* Added w-full */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mb-6 text-center w-full"> {/* Added w-full */}
        <div className="text-center flex-1"> {/* Added flex-1 to ensure equal spacing */}
          <h2 className="text-4xl font-bold">{videosCreated.toLocaleString()}</h2>
          <p className="text-gray-500">Total Videos Created</p>
        </div>
        <div className="text-center flex-1"> {/* Added flex-1 to ensure equal spacing */}
          <h2 className="text-4xl font-bold">{creatorsJoined.toLocaleString()}</h2>
          <p className="text-gray-500">Total Creators Joined</p>
        </div>
      </div>
      <p className="text-center text-gray-700 mb-6 max-w-md">
        Don’t miss out! Join the future of social media, where your ideas instantly transform into amazing videos. Get on board now!
      </p>
      <Link href={"/pages/signup"} className="px-6 py-3 bg-black text-white font-semibold  hover:bg-gray-800">
        Get Started
      </Link>
    </div>
  );
};

export default StatsSection;
