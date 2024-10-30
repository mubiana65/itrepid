import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 bg-white dark:bg-darkBackground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-orange-400 mb-8" data-aos="fade-up">
          About ITREPID
        </h2>
        <p className="text-lg leading-8 text-blue-600 dark:text-orange-300 mb-16 mx-14" data-aos="fade-up">
        Welcome to ITREPID
        </p>
        
        {/* Animated Statistics Section */}
        <div className=" mb-12 md:text-center">
          <div className="bg-blue-950 dark:bg-gray-800 text-white p-12 rounded-sm shadow-lg" data-aos="zoom-in">
            <h3 className="text-l font-bold mb-4">ITrepid Investment Limited offers a variety of loans tailored to meet your financial needs.
            </h3>
            <p className="text-xl"></p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-10 bg-gray-100 dark:bg-gray-900 rounded-lg" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-blue-600 dark:text-orange-400 mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                "ITREPID is a leading construction company"."
              </p>
              <h4 className="text-xl font-bold text-blue-600 dark:text-orange-400">- John Doe, CEO at XYZ Corp</h4>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                "I highly recommend ITREPID, there loans are affordable"
              </p>
              <h4 className="text-xl font-bold text-blue-600 dark:text-orange-400">- Jane Smith, CTO at ABC Solutions</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
