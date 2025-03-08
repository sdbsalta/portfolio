import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactMe from './components/ContactMe';  
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects';   
import Header from './components/Header';  

import NeuGig from './projects/NeuGig';  
import Talab from './projects/Talab';  
import './App.css';  

const App = () => {
  return (
    <Router>
      <div>
        <div className="bg-rose-100 min-h-64"></div>
        <div className="font-splineSansMono text-slate-700 bg-white mx-40 my-20 xs:mx-10 xs:my-5 lowercase">
          <Header />

          <Routes>
            {/* home */}
            <Route path="/" element={
              <>
                <Projects />
                <AboutMe />
                <ContactMe />
              </>
            } />

            {/* proj pages */}
            <Route path="/neugig" element={<NeuGig />} />
            <Route path="/talab" element={<Talab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;