"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

// Video categories with their corresponding video sources
const categories = [
  { label: 'Anime', video: '/videos/1.mp4' },
  { label: 'Cyberpunk', video: '/videos/2.mp4' },
  { label: 'Fiction', video: '/videos/3.mp4' },
  { label: 'Fun Fact', video: '/videos/4.mp4' },
  { label: 'Horror', video: '/videos/5.mp4' },
  { label: 'Philosophy', video: '/videos/6.mp4' },
  { label: 'Storytelling', video: '/videos/7.mp4' },
];

const Hero = () => {
  // Slick settings
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 py-12 border ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
        <div className="w-full md:w-1/2 mb-8 text-center md:text-left">
          <h1 className="text-4xl font-bold">Automate Your Content Creation with</h1>
          <h1 className="text-4xl font-bold text-black bg-gray-200 px-4 inline-block">Faceless Videos</h1>
          <p className="mt-4 text-lg mb-2">
            Transform your ideas into engaging videos without showing your face. Perfect for creators!
          </p>
          <Link href={"/pages/login"} className="mt-6 bg-black text-white py-2 px-6 rounded-lg  mb-2">Get Started</Link>
        </div>

        <div className="relative w-full md:w-1/2">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="relative px-2 w-full h-96"> 
                <video
                  className="w-full rounded h-72"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src={category.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
