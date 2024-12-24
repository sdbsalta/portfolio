import React from 'react';
import { Card } from './Card';  // Import the Card component

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl font-bold py-4"> Projects</h1>
      <hr className="border-gray-400 w-full pb-8"></hr>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          image="https://via.placeholder.com/300" 
          title="To-Do List"
          description="Description for project 1 goes here."
          link="http://portfolio-to-do-app.vercel.app"
        />
        {/*<Card 
          image="https://via.placeholder.com/300" 
          title="Project 2"
          description="Description for project 2 goes here."
          link="https://project2.com"
        />
        <Card 
          image="https://via.placeholder.com/300" 
          title="Project 3"
          description="Description for project 3 goes here."
          link="https://project3.com"
        />*/}
      </div>
    </div>
  );
};

export default Projects;
