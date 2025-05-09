import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '5527998688078';
  const message = 'Olá, gostaria de mais informações sobre o WasBot!';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <button
            onClick={handleClick}
            className="bg-dark hover:bg-secondary text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp size={28} className="text-white" />
            <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-md whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Fale conosco!
              <span className="absolute top-1/2 right-0 w-2 h-2 bg-white transform translate-x-1/2 -translate-y-1/2 rotate-45" />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloatButton;