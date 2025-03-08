import React from 'react';

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
        <section id="overview" className="mb-8">
          <h1 className="text-3xl font-bold">NeuGig Project</h1>
          <p className="text-gray-600 mt-2">
            A UX/UI case study designed for NeuGig—a platform connecting emerging artists with event organizers.
          </p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="text-gray-600 mt-2">
            Many talented artists struggle to find gigs, while event organizers lack a streamlined way to book performers.
          </p>
        </section>

        <section id="solution" className="mb-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-600 mt-2">
            NeuGig provides a seamless experience for artists to showcase portfolios and for organizers to discover and book talent efficiently.
          </p>
        </section>

        <section id="process" className="mb-8">
          <h2 className="text-2xl font-semibold">Design Process</h2>
          <p className="text-gray-600 mt-2">
            The design process involved research, wireframing, prototyping, and usability testing.
          </p>
        </section>

        <section id="outcome" className="mb-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-gray-600 mt-2">
            The final product enhances artist visibility and simplifies event planning, improving accessibility and efficiency.
          </p>
        </section>
      </main>
    </div>
  );
};

export default NeuGig;
