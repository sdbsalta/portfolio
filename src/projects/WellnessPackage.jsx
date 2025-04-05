import React from 'react';
import LowFidel from '../img/wellness package/low fidelity sketch.png';
import UserFlow from '../img/wellness package/user flow.png';

const WellnessPackage = () => {
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
          <h1 className="text-3xl font-bold">wellness package</h1>
          <p className="text-gray-600 mt-2">
            The wellness package is a mobile app designed to promote preventive healthcare among Filipinos. 
            This app focuses on proactive health management, providing users with tools to monitor and prevent chronic diseases such 
            as cancer, heart disease, and diabetes. <br></br><br></br>
            Developed during my internship at KonsultaMD, the app targets the unique healthcare challenges in the Philippines, 
            helping individuals address health issues before they progress to more serious conditions.
          </p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <p className="text-gray-600 mt-2">
            Preventive healthcare is crucial for reducing the burden of chronic diseases, which are the leading 
            causes of death and disability worldwide. However, in the Philippines, a low number of adults have had 
            a medical check-up in the past 12 months, and many tend to visit healthcare providers only 
            when symptoms become severe. By this stage, the disease has often progressed too far to be easily treated. 
          </p>
        </section>

        <section id="solution" className="mb-8">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-600 mt-2">
            The mobile app I designed provides Filipinos with easy access to preventive health tools that promote 
            regular health check-ups and early disease detection. The app includes features like health assessments, 
            reminders for routine check-ups, educational resources on chronic disease prevention, and affordable virtual 
            consultations. <br></br><br></br>
            By enabling users to track their health status and receive timely medical guidance, the app helps mitigate 
            the risks associated with late-stage disease detection, empowering individuals to take charge of their health 
            before problems escalate.
          </p>
        </section>

        <figure className="mb-8">
            <img src={UserFlow} className="rounded-md" alt="User Flow" />
            <figcaption className="text-center text-sm text-gray-500">sample user flow i designed</figcaption>
        </figure>

        <section id="process" className="mb-8">
          <h2 className="text-2xl font-semibold">Design Process</h2>
          <p className="text-gray-600 mt-2">
            I began by researching the unique health challenges faced by 
            Filipinos, including the lack of regular check-ups and the financial barriers to healthcare. 
            Based on this research, I designed the app to be simple, user-friendly, and tailored to the needs 
            of Filipino users. The process involved doing user research, creating user flows, wireframing, and feedback.
          </p>
        </section>

        <figure className="mb-8">
            <img src={LowFidel} className="rounded-md" alt="User Flow" />
            <figcaption className="text-center text-sm text-gray-500">sample low fidelity wireframe sketch</figcaption>
        </figure>

        <section id="outcome" className="mb-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-gray-600 mt-2">
            The final product has the potential to significantly reduce the burden of chronic diseases in the Philippines, contributing to improved health outcomes across the population.
          </p>
        </section>

        <div className="flex justify-center items-center h-auto">
          <iframe
            className="w-full h-[300px] border rounded-lg shadow-lg"
            src="https://embed.figma.com/design/H6rSO5RtrSMi9m0QQcgfKp/-KMD--Wellness-Package-Files?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default WellnessPackage;
