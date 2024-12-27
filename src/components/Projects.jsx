import React from 'react';
import { Card } from './Card';  
import toDoList from '../img/portfolio_to-do-app.png';
import memoryGame from '../img/portfolio_memory-game.png';

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold py-4"> Projects</h1>
      <hr className="border-gray-400 w-full pb-8"></hr>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          image={toDoList}
          title="To-Do List"
          description="a to-do list designed for quick, on-the-spot use—automatically resets upon refresh."
          link="http://portfolio-to-do-app.vercel.app"
        />
        <Card 
          image={memoryGame}
          title="Emoji Memory Game"
          description="A memory game designed for quick play—shows emojis for 3 seconds before flipping to test your memory."
          link="https://sdbsalta-memory-game.vercel.app"
        />
        {/*<Card 
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
