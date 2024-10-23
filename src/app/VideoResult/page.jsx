"use client"
import { useState } from 'react';

const VideoSwitcher = () => {
  // Set default video
  const [selectedVideo, setSelectedVideo] = useState('/videos/1.mp4');

  // Video categories with their corresponding video sources
  const categories = [
    { label: 'Anime  🍥', video: '/videos/1.mp4' },
    { label: 'Cyberpunk  🤖', video: '/videos/2.mp4' },
    { label: 'Fiction 📚', video: '/videos/3.mp4' },
    { label: 'Fun Fact  💡', video: '/videos/4.mp4' },
    { label: 'Horror  👻', video: '/videos/5.mp4' },
    { label: 'Philosophy  🤔', video: '/videos/6.mp4' },
    { label: 'Storytelling  👦', video: '/videos/7.mp4' },
  ];

  // Handle video change on tab click
  const handleVideoChange = (videoSrc) => {
    setSelectedVideo(videoSrc); // Update the video source
  };

  return (
    <div className="container mx-auto">
      {/* Tabs for different categories */}
      <div className="flex flex-wrap justify-center space-x-4 mt-4">
        {categories.map((category) => (
          <button
            key={category.label}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 mt-2"
            onClick={() => handleVideoChange(category.video)} // Change video on button click
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Video Player */}
      <div className="flex justify-center mt-8 border">
        <div className="bg-black p-2 rounded-lg">
          <video key={selectedVideo} className="rounded-lg w-full md:w-60 h-80" controls>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-white mt-2">Currently Playing: {selectedVideo.split('/').pop()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSwitcher;
