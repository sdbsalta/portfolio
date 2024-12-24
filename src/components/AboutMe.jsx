import React from 'react'
import sophiaImage from '../img/sophia.jpg';

export const AboutMe = () => {
    return (
        <div id="aboutme">
            <h1 className="text-4xl font-bold py-4">about me</h1>
            <hr className="border-gray-400 w-full pb-8"></hr>
            <div className="flex flex-row items-center space-x-8"> 
                <div className="flex-shrink-0"> {/* Ensure the image doesn't stretch */}
                    <img src={sophiaImage} alt="Sophia" className="rounded-2xl max-w-96" />
                </div>
                <div className="flex flex-col"> 
                    <h1 className="text-4xl pb-4 font-semibold">hi 👋 i’m sophia!</h1>
                    <h2 className="text-2xl pb-4">a full-stack developer who’s passionate about intuitive & accessible design 👩‍💻</h2>

                    <p className="text-xl">here’s a few other things i love 👇</p>
                    <div> {/* checklist section */}
                        <div className="flex items-center">
                        <input type="checkbox" id="matcha" className="mr-2" />
                        <label htmlFor="matcha" className="text-xl">Iced matcha with a pump of white mocha</label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" id="kdrama" className="mr-2" />
                        <label htmlFor="kdrama" className="text-xl">Watching Kdrama with my mom 📺</label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" id="restaurants" className="mr-2" />
                        <label htmlFor="restaurants" className="text-xl">Trying out different restaurants 🍽️</label>
                        </div>
                    </div>

                    {/* tech stack */}
                    <p className="text-xl font-semibold pt-4">my current tech stack:</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-3 text-sm pt-2">
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl">TailwindCSS</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl">React</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl">Django</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl">PostgreSQL</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl">Python</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl">Java</span>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  

export default AboutMe;