import React from 'react';
import Layout from '../img/skybrawl/skybrawl collission.png';

const SkyBrawl = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-10 bg-rose-50 my-5 rounded-md">
      {/* Sidebar Navigation */}
      <aside className="md:w-1/4 w-full md:pr-10">
        <nav className="sticky top-10">
          <h2 className="text-xl font-semibold mb-4">Case Study</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a href="#overview" className="block hover:text-black">Overview</a>
            </li>
            <li>
              <a href="#problem" className="block hover:text-black">Problem Statement</a>
            </li>
            <li>
              <a href="#solution" className="block hover:text-black">Solution</a>
            </li>
            <li>
              <a href="#process" className="block hover:text-black">Design Process</a>
            </li>
            <li>
              <a href="#outcome" className="block hover:text-black">Outcome</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 w-full bg-white p-6 rounded-md shadow-xl">
        <section id="overview" className="mb-8">
          <h1 className="text-3xl font-bold">sky brawl</h1>
          <p className="text-gray-600 mt-2">
            Sky Brawl is a fast-paced 2D multiplayer PVP game built with Java NET, featuring server functionality, flying mechanics, dynamic projectile direction based on keyboard inputs, and real-time collision detection.
          </p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="text-gray-600 mt-2">
            For my class's multiplayer programming assignment, we were given the freedom to create any multiplayer game using Java. 
            The goal was to design a game that allowed real-time interaction between two players, incorporating movement, actions, and live game state updates. <br></br><br></br>
            The project also required that the game be both engaging and technically robust, showcasing our ability to work with Java's networking capabilities, game loops, and custom assets.
          </p>
        </section>

        <section id="solution" className="mb-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-600 mt-2">
            I created Sky Brawl, a fast-paced, 2D aerial combat game where two players connect over a network to battle in real time. 
            The game allows players to control flying characters using arrow keys, shoot projectiles, and avoid incoming bullets or platforms.  <br></br><br></br>
            It is built using Java with a peer-to-peer socket connection, where one player hosts the game and the other joins using an IP address and port.  <br></br><br></br>
            I implemented real-time position tracking, hit detection, health systems, and a responsive game loop that handles both rendering and network communication through multithreading.
          </p>
        </section>

        <section id="process" className="mb-8">
          <h2 className="text-2xl font-semibold">Design Process</h2>
          <p className="text-gray-600 mt-2">
            I started by brainstorming a unique game concept that combined simplicity with engaging mechanics. 
            Inspired by arcade-style shooters, I designed a sky-based duel concept where players have to outmaneuver and outshoot each other.  <br></br><br></br>
            I drew every in-game asset by hand on my iPad, including the characters, backgrounds, bullets, and health bars, then exported these assets for integration into the game. 
            After designing the visuals, I focused on building the acutal program. I structured the game around a GameStarter.java file, which prompts players to input IP and port information to establish a connection.  <br></br><br></br>
            Finally, I deployed the game on an Amazon EC2 instance to allow testing and play between machines not on the same local network.
          </p>
        </section>

        <img src={Layout} className="rounded-md mb-8"></img>

        <section id="outcome" className="mb-8">
            <h2 className="text-2xl font-semibold">Outcome</h2>
            <p className="text-gray-600 mt-2">
                The project demonstrates a comprehensive grasp of Java networking, game development, and deployment. Completing this solo—from ideation to artwork to coding and deployment—helped me deepen my skills in systems design, networking, and visual game development.
            </p>
        </section>
      </main>
    </div>
  );
};

export default SkyBrawl;
