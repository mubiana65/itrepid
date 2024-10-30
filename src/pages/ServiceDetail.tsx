import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((service) => service.id === serviceId);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
      <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded-lg mb-4" />
      <p className="text-lg">{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
