import React from 'react';

const MagisAir = () => {
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
          <h1 className="text-3xl font-bold">Magis Air</h1>
          <p className="text-gray-600 mt-2">
            A full-stack airline management system designed to streamline key operations including flight scheduling, bookings, route management, crew assignments, and cost tracking.
          </p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="text-gray-600 mt-2">
            Airlines often face fragmented workflows when managing flights, bookings, and crews, leading to inefficiencies and potential scheduling conflicts. Our challenge was to build an integrated system that could effectively support these operations from end to end.
          </p>
        </section>

        <section id="solution" className="mb-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-600 mt-2">
            Magis Air is an all-in-one airline management platform that handles flights, flight schedules, bookings, routes, flight costs, and crew assignments. It was designed to simplify the management of airline operations by centralizing all critical functions into one responsive system.
          </p>
        </section>

        <section id="process" className="mb-8">
          <h2 className="text-2xl font-semibold">Design Process</h2>
          <p className="text-gray-600 mt-2">
            As the lead developer, I collaborated closely with a team of frontend and backend developers to plan and execute the system architecture. 
            I co-designed the wireframes with another frontend developer to ensure a clean and functional user experience. <br></br><br></br>
            To effectively plan out the system, we also developed the Entity-Relationship Diagram (ERD), data dictionary, and database schema to define clear data structures and relationships. <br></br><br></br>
            We used PostgreSQL to structure and populate the backend database, enabling efficient handling of flight, crew, route, and booking data. 
          </p>
        </section>

        <section id="outcome" className="mb-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-gray-600 mt-2">
            The final product is a scalable and user-friendly airline management system capable of supporting real-world airline operations. It significantly reduced manual scheduling errors, streamlined crew assignments, and improved the overall efficiency of flight operations for administrative users.
          </p>
        </section>

        <div className="flex justify-center items-center h-auto">
          <iframe
            className="w-full h-[300px] border rounded-lg shadow-lg"
            src="https://embed.figma.com/design/CYmeOpcgNhENxtkjZVl0aa/-CSCI41--Magis-Air?node-id=341-2&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default MagisAir;
