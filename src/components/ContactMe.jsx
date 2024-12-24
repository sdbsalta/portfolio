import React from 'react'

export const ContactMe = () => {
  return (
    <div id="contactme" className="flex flex-col items-start text-left py-4">
        <h1 className="pb-4 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">contact me</h1>
        <hr className="border-gray-400 w-full"></hr>
        <h2 className="sm:text-xl md:text-2xl lg:text-3xl py-4">interested in working together?</h2>
        <p className="sm:text-base md:text-lg lg:text-xl">
            Let’s have a chat 😁 You can reach out to me through {' '}
            <a href="https://www.linkedin.com/in/sophia-salta/" className="text-rose-500 hover:font-semibold hover:underline">
            LinkedIn
            </a>{' '}
            or my email at{' '}
            <a href="mailto:sdbsalta@gmail.com" className="text-rose-500 hover:underline hover:font-semibold">
            sdbsalta@gmail.com
            </a>{' '}
            📩
        </p>
    </div>
  )
}

export default ContactMe;