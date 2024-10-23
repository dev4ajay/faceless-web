import React from 'react';
import Image from 'next/image';
import Img from "../../images/1.png"; // Image
import Img3 from "../../images/2.png"; // Image

const VarietyOfBackgrounds = () => {
  const backgroundItems = [
    {
      id: 1,
      title: 'AI Images',
      description: 'Automatically created images that match the script of your video.',
      type: 'image',
      mediaUrl: Img, // Local image import
    },
    {
      id: 2,
      title: 'Reddit Video',
      description: 'Great for telling stories, with a fixed video format.',
      type: 'video',
      mediaUrl: '/videos/6.mp4', // Path to video in public folder
    },
    {
      id: 3,
      title: 'Web Images',
      description: 'Automatically find web images that match the script of your video.',
      type: 'image',
      mediaUrl: Img3, // Local image import
    },
    {
      id: 4,
      title: 'Stock Videos',
      description: 'Automatically find stock videos that match the script of your video. Powered by Pexels.',
      type: 'video',
      mediaUrl: '/videos/7.mp4', // Path to video in public folder
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Variety of Backgrounds</h2>
        <p className="text-lg mt-2">Choose from a variety of backgrounds to match your video style.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {backgroundItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg  overflow-hidden">
            {/* Conditionally render Image or Video based on type */}
            {item.type === 'image' ? (
              <Image
                src={item.mediaUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
            ) : (
              <video className="w-full h-48 object-cover" controls>
                <source src={item.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VarietyOfBackgrounds;
