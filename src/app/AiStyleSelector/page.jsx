"use client";
import Image from "next/image";
import Img1 from "../../images/5.png";
import Img2 from "../../images/6.png";
import Img3 from "../../images/7.png";
import Img4 from "../../images/8.png";
import Img5 from "../../images/9.png";
import Img6 from "../../images/4.png";

const AIStyleSelector = () => {
  const styles = [
    { name: "Artstyle Hyperrealism Photography", img: Img1 },
    { name: "Cyberpunk", img: Img2 },
    { name: "Gothic Horror Photography", img: Img3 },
    { name: "Indonesian Art", img: Img4 },
    { name: "Pandora", img: Img6 },
    { name: "Realistic Photography", img: Img5 },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 border ">
      <h2 className="text-2xl font-semibold mb-6 text-center">Choose AI Style</h2>
      
      {/* Grid container for styles */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {styles.map((style, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <Image
              src={style.img}
              alt={style.name}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover shadow-md"
            />
            <p className="mt-2 text-center">{style.name}</p>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="mt-6 text-gray-500 text-center">...and many more</p>
    </div>
  );
};

export default AIStyleSelector;
