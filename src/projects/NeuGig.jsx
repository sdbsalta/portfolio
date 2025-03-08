import React from 'react';
import Mockup from '../img/neugig/NeuGIG_Mockup.png';
import Layout from '../img/neugig/NeuGIG.png';

const NeuGig = () => {
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
        <img src={Mockup} className="rounded-md mb-8"></img>
        <section id="overview" className="mb-8">
          <h1 className="text-3xl font-bold">NeuGig Project</h1>
          <p className="text-gray-600 mt-2">
            NeuGig is a website that will connect up and coming artists with event organizers who are looking for Filipino artists to play in the event organizer’s venue for entertainment. 
          </p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="text-gray-600 mt-2">
            Many talented artists struggle to find gigs, while event organizers lack a streamlined way to book performers.
          </p>
        </section>

        <img src={Layout} className="rounded-md mb-8"></img>

        <section id="solution" className="mb-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-600 mt-2">
            NeuGig provides a seamless experience for artists to showcase portfolios and for organizers to discover and book talent efficiently.
          </p>
        </section>

        <section id="process" className="mb-8">
          <h2 className="text-2xl font-semibold">Design Process</h2>
          <p className="text-gray-600 mt-2">
            My UX design process for NeuGig followed a user-centric approach, focusing on the needs of artists and event organizers. I structured it into phases to deeply understand users and address their pain points effectively.
          </p>
        </section>

        <section id="outcome" className="mb-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-gray-600 mt-2">
            The final product enhances artist visibility and simplifies event planning, improving accessibility and efficiency.
          </p>
        </section>

        <div className="flex justify-center items-center h-auto">
          <iframe
            className="w-full h-[300px] border rounded-lg shadow-lg"
            src="https://embed.figma.com/design/Cc0txbgfIxZj5fOyvBb7W0/NeuGIG?node-id=36-33&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default NeuGig;
