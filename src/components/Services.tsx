import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="services" className="py-10 bg-lightBackground dark:bg-gradient-to-b from-blue-900 to-black text-lightText dark:text-darkText border-none">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-orange-400 mb-8" data-aos="fade-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/construction">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer" data-aos="fade-up">
              <img src="https://th.bing.com/th/id/R.a2eb553fad94032afc2b6f25910fced0?rik=WjL7z3rv3I73aQ&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f02%2fConstruction-High-Quality-Wallpaper-1024x683.jpg&ehk=kwtYMSvqAvXVFtKLgEDNNKPp6TStmsEahBT22EnCrEU%3d&risl=&pid=ImgRaw&r=0n" alt="Service 1" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Construction</h3>
              <p>Comprehensive construction services for residential, commercial, and educational buildings.</p>
            </div>
          </Link>
          <Link to="/supply">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service 2" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Supply</h3>
              <p>Providing essential products and services for various industries, including electrical and medical equipment.</p>
            </div>
          </Link>
          <Link to="/loans">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer" data-aos="fade-up" data-aos-delay="200">
              <img src="https://th.bing.com/th/id/R.4e706ac3fd605263e23b83eed7a12879?rik=Ebs%2fgPvkipVxQg&pid=ImgRaw&r=0" alt="Service 3" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Loans</h3>
              <p>Flexible financial loan services with competitive rates for different needs.</p>
            </div>
          </Link>
          <Link to="/engineering">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer" data-aos="fade-up" data-aos-delay="300">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service 3" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Engineering & Research</h3>
              <p>Offering engineering, research, and technology-based services to support innovation.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
