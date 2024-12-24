import React from 'react';

export const Card = ({ image, title, description, link }) => {
  return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >      
      <div className="w-full h-[200px] max-h-[200px] overflow-hidden">
        <img className="w-full object-cover h-full" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </a>
  );
};

export default Card;
