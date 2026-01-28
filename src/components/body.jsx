import React from 'react'

function Body() {
  return (
    <div
  style={{ backgroundColor: 'rgb(45,45,45)' }}
  className="
    min-h-screen
    flex flex-col
    justify-center items-center
    gap-4 sm:gap-6
    px-4
    text-center
  "
>
  {/* Hello */}
  <h1 className="text-lg sm:text-2xl font-bold text-white">
    Hello I&apos;M
  </h1>

  {/* Title */}
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-yellow-500">
    WEB DEVELOPER
  </h2>

  {/* Description */}
  <p className="text-sm sm:text-base text-white leading-relaxed max-w-xl">
  Developing and maintaining web applications using React and various JavaScript libraries, focusing on performance, scalability, and responsive design.
Worked on multiple production level projects, building dynamic and user friendly interfaces using React.js and
modern frontend technologies
  </p>

  {/* Button */}
  <button
    className="
      text-sm sm:text-base
      text-white
      px-6 sm:px-8
      py-2
      border-2 border-yellow-500
      rounded-full
      hover:bg-yellow-500 hover:text-black
      transition
    "
  >
    Download CV
  </button>
</div>

  )
}

export default Body
