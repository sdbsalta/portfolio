import React from 'react';

export const Card = ({ image, title, techstack, description, link, githubLink }) => {
  return (
    <div className="block max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="w-full h-[200px] max-h-[200px] overflow-hidden">
        <img className="w-full object-cover h-full" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-rose-400 mt-2">tech stack: {techstack}</p>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <div className="flex justify-start gap-x-3 mt-4">
        <a 
          href={link} 
          target="_blank" 
          className="text-xs px-3 py-2 bg-rose-400 text-white rounded-md hover:font-semibold hover:underline"
        >
          View Here
        </a>
        <a 
          href={githubLink} 
          target="_blank" 
          className="text-xs px-3 py-2 bg-rose-100 text-rose-600 rounded-md hover:font-semibold hover:underline"
        >
          GitHub
        </a>
      </div>
      </div>
      
    </div>
  );
};

export default Card;
