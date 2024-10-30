import React from 'react';
import Services from '../components/Services';
import logo from '../Assets/technova.png'; // Import the logo image
import { useEffect, useState } from 'react';
import img1 from '../Assets/imag2.png';
import img2 from '../Assets/img1.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import img5 from '../Assets/img5.png';

const Home: React.FC = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="dark:bg-gradient-to-b from-blue-900 to-black">
      <div className="bg-gray-100 min-h-screen dark:bg-gradient-to-b from-blue-900 to-black">
        {/* Hero Section */}
        <div className="dark:bg-transparent text-black py-16 px-6 md:px-20 bg-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 text-center md:text-center">
            {/* <div className="mb-6 md:mb-0">
            <img
              src={logo} // Use the imported image here
              alt="Company Logo"
              className="w-24 h-24 md:w-40 md:h-40 object-contain mx-auto md:mx-0"
            />
          </div> */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-orange-600 mb-2">
                Welcome to ITRPID
              </h2>
              <p className="text-base md:text-lg font-light dark:text-white">
                LAYING BEAMS AT THE BACK OF YOUR DREAMS.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row dark:bg-gradient-to-b from-blue-900 to-black">
        <div className="w-full md:w-2/3 p-6 md:p-12 dark:bg-transparent">
            {/* Hero Section */}


            {/* Services Section */}
            <div className="border-spacing-1 ">
              <Services />
            </div>
          </div>
          {/* Left Column - Scrollable Image Gallery */}
          <div className="w-full md:w-1/3 dark:bg-transparent bg-blue-950 text-white flex flex-col items-center p-4 overflow-y-auto h-96 md:h-auto">
            <h3 className="text-xl font-semibold mb-4">Company Staff</h3>
            <div className="space-y-4">
              {images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;