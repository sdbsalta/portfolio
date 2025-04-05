import React from 'react';
import { Card } from './Card';  
import { ProjectCard } from './ProjectCard';  
import toDoList from '../img/portfolio_to-do-app.png';
import memoryGame from '../img/portfolio_memory-game.png';
import neugigMockup from '../img/neugig/NeuGIG_Mockup.png';
import talabMockup from '../img/talab/Talab Mockup.png';
import magisAirMockup from '../img/magisair/magisair.png';
import skyBrawlMockup from '../img/skybrawl/skybrawl start.png';
import wellnessPackageMockup from '../img/wellness package/wellnessPackage Mockup.png';

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
          image={magisAirMockup}
          title="Magis Air"
          techstack="django · postgresql · html · css"
          description="an airline management system that streamlines flight scheduling, bookings, routes, costs, and crew assignments."
          link="/magisair"
          githubLink="https://github.com/sdbsalta/csci41-magisair"
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
        <ProjectCard 
          image={skyBrawlMockup}
          title="Sky Brawl"
          techstack="java · aws ec2"
          description="Sky Brawl is a fast-paced 2D multiplayer PVP game built with Java NET, featuring server functionality, flying mechanics, dynamic projectile direction based on keyboard inputs, and real-time collision detection"
          link="/skybrawl"
          githubLink="https://github.com/sdbsalta/csci22-skybrawl"
        />
        <ProjectCard 
          image={wellnessPackageMockup}
          title="Wellness Package"
          techstack="figma"
          description="A mobile app for preventive health and wellness, specifically tailored to meet the needs of Filipinos."
          link="/wellnesspackage"
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
