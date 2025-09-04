import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-2xl cursor-pointer' : '';
  
  return (
    <motion.div
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;