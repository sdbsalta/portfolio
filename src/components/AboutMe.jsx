import React from 'react';
import sophiaImage from '../img/sophia.jpg';

export const AboutMe = () => {
    return (
        <div id="aboutme" className="p-4">
            <h1 className="
                text-3xl md:text-4xl font-bold
                py-4">about me</h1>
            <hr className="border-gray-400 w-full pb-8"></hr>
            <div className="flex flex-col items-center md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8"> 
                <div className="w-full flex sm:justify-center">                    
                    <img src={sophiaImage} alt="Sophia" 
                        className="rounded-2xl w-full sm:w-3/4 md:w-full md:items-center md:justify-center lg:w-96 max-w-lg" 
                    />
                </div>
                <div className="flex flex-col md:text-left self-center">
                    <h1 className="pb-4 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">hi 👋 i’m sophia!</h1>
                    <h2 className="sm:text-xl md:text-2xl lg:text-3xl pb-4">
                        a full-stack developer who’s passionate about intuitive & accessible design 👩‍💻
                    </h2>
                    <p className="sm:text-base md:text-lg lg:text-xlxl">here’s a few other things i love 👇</p>
                    <div className="pt-4">
                        {/* checklist section */}
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="matcha" className="mr-2" />
                            <label htmlFor="matcha" className="sm:text-base md:text-lg lg:text-xl">
                                Iced matcha with a pump of white mocha
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="kdrama" className="mr-2" />
                            <label htmlFor="kdrama" className="sm:text-base md:text-lg lg:text-xl">
                                Watching Kdrama with my mom 📺
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="restaurants" className="mr-2" />
                            <label htmlFor="restaurants" className="sm:text-base md:text-lg lg:text-xl">
                                Trying out different restaurants 🍽️
                            </label>
                        </div>
                    </div>
                    <p className="sm:text-base md:text-lg lg:text-xl font-semibold pt-6">my current tech stack:</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-3 pt-4 justify-start">
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl text-sm sm:text-base">TailwindCSS</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl text-sm sm:text-base">React</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl text-sm sm:text-base">Django</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl text-sm sm:text-base">PostgreSQL</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl text-sm sm:text-base">Python</span>
                        <span className="inline-block py-2 px-4 bg-rose-400 text-white rounded-xl text-sm sm:text-base">Java</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
