import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ image, title, techstack, description, link }) => {
  return (
    <div className="block max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="w-full h-[200px] max-h-[200px] overflow-hidden">
        <img className="w-full object-cover h-full" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        
        {techstack && (
          <p className="text-sm text-rose-400 mt-2">Tech Stack: {techstack}</p>
        )}

        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <div className="flex justify-start gap-x-3 mt-4">
        <Link to={link} className="text-xs px-3 py-2 bg-rose-400 text-white rounded-md hover:font-semibold hover:underline">
            Read More
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
