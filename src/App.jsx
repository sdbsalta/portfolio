import ContactMe from './components/ContactMe';  
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects';   
import Header from './components/Header';  
import './App.css';  

function App() {
  return (
    <div>
      <div className="bg-rose-100 min-h-64"></div>
      <div className="font-splineSansMono text-slate-700 bg-white mx-40 my-20 xs:mx-10 xs:my-5 lowercase">
        <Header />
        <Projects />
        <AboutMe />
        <ContactMe />
      </div>
    </div>
   
  );
}

export default App;
