import React from 'react'

export const Header = () => {
  return (
    <div id="header">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-6 pb-4">sophia's portfolio</h1>
        <hr className="border-gray-400 w-full"></hr>
        <nav>
            <ul className="sm:text-base md:text-lg lg:text-xl flex gap-x-8 gap-y-3 flex-wrap py-2">
                <li className="hover:font-semibold hover:underline">
                    <a href="#header">Home
                </a></li>
                <li className="hover:font-semibold hover:underline">
                    <a href="#projects">projects
                </a></li>
                <li className="hover:font-semibold hover:underline">
                    <a href="#aboutme">about me
                </a></li>
                <li className="hover:font-semibold hover:underline">
                    <a href="#contactme">contact me
                </a></li>
            </ul>
        </nav>
        <hr className="border-gray-400 w-full"></hr>
    </div>
  )
}

export default Header;
