import React from 'react';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 bg-lightBackground dark:bg-gradient-to-b from-blue-900 to-black text-lightText dark:text-darkText border-none">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-orange-400 mb-8" data-aos="fade-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Stagger animations slightly
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                style={{ maxHeight: '200px' }}
              />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
