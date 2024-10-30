import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRouter from './router';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
  <div className="dark:bg-gradient-to-b from-blue-900 to-black">
    <AppRouter />;
  </div>
  )
};

export default App;
