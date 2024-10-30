import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 dark:bg-darkBackground text-white dark:text-gray-200 py-5">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 ITRPID. All rights reserved.</p>
        <p className="mt-2">
          <a href="#contact" className="hover:text-gray-300">Contact Us</a> | Follow us on 
          <a href="#" className="hover:text-gray-300 ml-2">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
