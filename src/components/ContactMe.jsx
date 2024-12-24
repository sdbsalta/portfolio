import React from 'react'

export const ContactMe = () => {
  return (
    <div id="contactme" className="flex flex-col items-start text-left py-4">
        <h1 className="text-4xl pb-4 font-bold">contact me</h1>
        <hr className="border-gray-400 w-full"></hr>
        <h2 className="text-2xl py-4">interested in working together?</h2>
        <p className="text-xl">
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