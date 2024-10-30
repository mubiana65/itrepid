import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Construction() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
      }, []);
    

  return (
    <div className="bg-lightBackground dark:bg-gray-900 text-lightText dark:text-darkText min-h-screen">
    {/* Header Section with GIF */}
    <header className="relative h-96 bg-blue-800 text-center flex flex-col items-center justify-center text-white">
      <img
        src=" https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnE2a3Q5NXkwaTkwc3g0Mjg4YjFzeGd0ejB6ejVjdGlrdHo0bjcwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nIUav1AOaK06s/giphy.webp"
        alt="Service Animation"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">
          Detailed Service Overview
        </h1>
        <p className="text-xl" data-aos="fade-up">
          Discover the benefits and details of our premium service.
        </p>
      </div>
    </header>

    {/* Main Content Section */}
    <main className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
      {/* Service Description */}
      <section data-aos="fade-right" className="mb-10">
        <h2 className="text-4xl font-semibold mb-4">What We Offer</h2>
        <p className="text-lg leading-relaxed">
          Our service provides comprehensive solutions that cater to your needs with precision and excellence. From the initial consultation to the final implementation, we prioritize quality, efficiency, and customer satisfaction.
        </p>
      </section>

      {/* Key Features with GIF */}
      <section data-aos="fade-left" className="mb-10 flex flex-col lg:flex-row items-center gap-8">
        <img src=" https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnE2a3Q5NXkwaTkwc3g0Mjg4YjFzeGd0ejB6ejVjdGlrdHo0bjcwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nIUav1AOaK06s/giphy.webp" alt="Feature GIF" className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg" />
        <div>
          <h2 className="text-4xl font-semibold mb-4">Key Features</h2>
          <ul className="text-lg space-y-3">
            <li>🌟 High-quality standards with certified experts</li>
            <li>🚀 Fast and efficient process from start to finish</li>
            <li>📈 Scalable and flexible solutions tailored for growth</li>
            <li>🛠️ 24/7 support for all service packages</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section with Icons */}
      <section data-aos="zoom-in-up" className="mb-10">
        <h2 className="text-4xl font-semibold mb-4">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Cost-effective</h3>
            <p>Our solutions are designed to maximize your budget with high ROI.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Time-saving</h3>
            <p>Minimize project time with our efficient and streamlined processes.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Expert Support</h3>
            <p>24/7 support and advice from industry professionals at every step.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <button
          className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          data-aos="flip-up"
        >
          Get Started Now
        </button>
      </div>
    </main>
  </div>
);
  
}

export default Construction
