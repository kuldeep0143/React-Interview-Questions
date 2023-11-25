import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!isLoading) {
      setIsLoading(true);
      setIsLiked((prevIsLiked) => !prevIsLiked);

      // Optional: Add a delay if needed
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1000);
      
      setIsLoading(false); // Remove this line if using the delay
    }
  };

  return (
    <motion.button
      className={`like-button focus:outline-none transition-all duration-300  ${
        isLiked ? 'text-red-500' : 'text-gray-500'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <FontAwesomeIcon className='h-10' icon={faHeart} />
      )}
    </motion.button>
  );
};

export default LikeButton;
