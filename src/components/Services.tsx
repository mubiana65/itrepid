// import React from 'react';
// import { services } from '../data/services';

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-10 bg-lightBackground dark:bg-gradient-to-b from-blue-900 to-black text-lightText dark:text-darkText border-none">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-blue-600 dark:text-orange-400 mb-8" data-aos="fade-up">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//               data-aos="fade-up"
//               data-aos-delay={`${index * 100}`} // Stagger animations slightly
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//                 style={{ maxHeight: '200px' }}
//               />
//               <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 bg-lightBackground dark:bg-gradient-to-b from-blue-900 to-black text-lightText dark:text-darkText border-none">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-orange-400 mb-8" data-aos="fade-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/construction">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer">
              <img src="https://th.bing.com/th/id/R.a2eb553fad94032afc2b6f25910fced0?rik=WjL7z3rv3I73aQ&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f02%2fConstruction-High-Quality-Wallpaper-1024x683.jpg&ehk=kwtYMSvqAvXVFtKLgEDNNKPp6TStmsEahBT22EnCrEU%3d&risl=&pid=ImgRaw&r=0n" alt="Service 1" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Construction</h3>
              <p>Comprehensive construction services for residential, commercial, and educational buildings.</p>
            </div>
          </Link>
          <Link to="/supply">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service 2" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Supply</h3>
              <p>Providing essential products and services for various industries, including electrical and medical equipment.</p>
            </div>
          </Link>
          <Link to="/loans">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer">
              <img src="https://th.bing.com/th/id/R.4e706ac3fd605263e23b83eed7a12879?rik=Ebs%2fgPvkipVxQg&pid=ImgRaw&r=0" alt="Service 3" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Loans</h3>
              <p>Flexible financial loan services with competitive rates for different needs3.</p>
            </div>
          </Link>
          <Link to="/engineering">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer">
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



export const services = [
  {
    id: 'service1',
    title: "Construction",
    description: "Comprehensive construction services for residential, commercial, and educational buildings.",
     image: "https://th.bing.com/th/id/R.a2eb553fad94032afc2b6f25910fced0?rik=WjL7z3rv3I73aQ&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f02%2fConstruction-High-Quality-Wallpaper-1024x683.jpg&ehk=kwtYMSvqAvXVFtKLgEDNNKPp6TStmsEahBT22EnCrEU%3d&risl=&pid=ImgRaw&r=0n"
  },
  {
    id: 'service2',
    title: "Supply",
    description: "Providing essential products and services for various industries, including electrical and medical equipment.",
     image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 'service3',
    title: "Loans",
    description: "Flexible financial loan services with competitive rates for different needs.",
     image: "https://th.bing.com/th/id/R.4e706ac3fd605263e23b83eed7a12879?rik=Ebs%2fgPvkipVxQg&pid=ImgRaw&r=0"
  },
  {
    id: 'service4',
    title: "Engineering & Research",
    description: "Offering engineering, research, and technology-based services to support innovation.",
     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];


