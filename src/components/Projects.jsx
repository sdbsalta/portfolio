import React from 'react';
import { Card } from './Card';  
import { ProjectCard } from './ProjectCard';  
import toDoList from '../img/portfolio_to-do-app.png';
import memoryGame from '../img/portfolio_memory-game.png';
import neugigMockup from '../img/neugig/NeuGIG_Mockup.png';
import talabMockup from '../img/talab/Talab Mockup.png';

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold py-4"> Projects</h1>
      <hr className="border-gray-400 w-full pb-8"></hr>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          image={toDoList}
          title="To-Do List"
          techstack="React"
          description="a to-do list designed for quick, on-the-spot use—automatically resets upon refresh."
          link="http://portfolio-to-do-app.vercel.app"
          githubLink="https://github.com/sdbsalta/portfolio_to-do-app"
        />
        <Card 
          image={memoryGame}
          title="Emoji Memory Game"
          techstack="React"
          description="A memory game designed for quick play—shows emojis for 3 seconds before flipping to test your memory."
          link="https://sdbsalta-memory-game.vercel.app"
          githubLink="https://github.com/sdbsalta/portfolio_memory-game"
        />
        <ProjectCard 
          image={neugigMockup}
          title="NeuGig"
          description="A UX/UI casestudy designed for NeuGig—a website that will connect up and coming artists with event organizers."
          link="/neugig"
        />
        <ProjectCard 
          image={talabMockup}
          title="Talab"
          techstack="django · html · css"
          description="TALAB is ADMU’s annual event on national issues—I led the 2024 website’s frontend development and UI revamp for better usability."
          link="/talab"
        />
        {/*<Card 
          image={toDoList}
          title="schedulr"
          techstack="React · Supabase"
          description="a passion project where ateneans can create their enlistment schedules dynamically with a few clicks of a button"
          link="http://portfolio-to-do-app.vercel.app"
          githubLink="https://github.com/sdbsalta/portfolio_to-do-app"
        />*/}

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
