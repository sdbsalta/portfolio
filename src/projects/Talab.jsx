import React from 'react';
import Mockup from '../img/talab/Talab Mockup.png';

const Talab = () => {
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
              <a href="#role" className="block hover:text-black">role</a>
            </li>
            <li>
              <a href="#outcome" className="block hover:text-black">Outcome</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 w-full bg-white p-6 rounded-md shadow-xl">
        <img src={Mockup} className="rounded-md mb-4"></img>
        <section id="overview" className="mb-8">
          <h1 className="text-3xl font-bold">TALAB 2024</h1>
          <p className="text-gray-600 mt-2">
            Talakayang Alay sa Bayan (TALAB) is ADMU's annual event, offering students a space to reflect on national issues.
          </p>
        </section>

        <section id="role" className="mb-8">
          <h2 className="text-2xl font-semibold">role</h2>
          <p className="text-gray-600 mt-2">
            For this year's TALAB, I led a team of frontend developers to update wireframes and implement them using HTML and CSS in a Django environment.
          </p>
        </section>

        <section id="outcome" className="mb-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <div className="flex justify-center items-center h-auto">
          <iframe
            className="w-full h-[300px] border rounded-lg shadow-lg mt-4"
            src="https://embed.figma.com/design/UnE1rKS2UA9LAgyC8b51jq/%5BB%5D-TALAB-2024-Website?node-id=2048-4556&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
        </section>
      </main>
    </div>
  );
};

export default Talab;
