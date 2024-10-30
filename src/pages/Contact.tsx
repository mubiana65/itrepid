import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs
      .send(
        'service_ioi41q4', // Replace with your EmailJS Service ID
        'template_9zi42j5', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'Jyhxl-pzlLO-iODdM' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.status, result.text);
          alert('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear the form after sending
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-orange-400 mb-8">Get in Touch with Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-orange-400 mb-4">Contact Information</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">You can reach us at:</p>
          <p className="text-xl font-semibold mt-4 text-black dark:text-white">1234 Innovation Way, Tech City</p>
          <p className="text-xl font-semibold text-black dark:text-white">Email: <a href="mailto:mubianagift65@gmail.com" className="text-blue-600 dark:text-orange-400 hover:underline">contact@technova.com</a></p>

          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
