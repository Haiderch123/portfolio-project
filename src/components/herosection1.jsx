import React from 'react'

function Herosection1() {
  return (
    <div
      style={{ backgroundColor: "rgb(45,45,45)" }}
      className="min-h-screen flex items-center justify-center px-10"
    >
      <div className="w-full max-w-6xl flex items-center gap-16">


        <div >
          <img
            src="/src/assets/haider.jpg"
            alt=""
            className="hidden lg:block h-60 w-60 object-cover border-4 border-white"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white max-w-xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl md:text-4xl mb-3 sm:mb-4 text-yellow-400">
            About Me
          </h2>

          <p className="text-sm sm:text-base leading-relaxed max-w-xl">
            Hi, I'm Haider Ali, a passionate Front-End Developer dedicated to building fast, interactive, and user-centric web applications. My core expertise lies in React.js and the modern JavaScript ecosystem. I love turning complex problems into simple, beautiful, and scalable code. Whether it's optimizing performance or crafting responsive layouts, I focus on delivering high-quality digital experiences
          </p>

          <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            When I'm not coding, you can find me playing cricket, traveling to new places, or reading to expand my horizons. I believe that a balanced life fuels creativity and helps me bring fresh perspectives to my technical work."
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
           <button
    className="
      text-sm sm:text-base
      text-white
      px-6 sm:px-8
      py-1
      border-2 border-yellow-500
      rounded-full
      hover:bg-yellow-500 hover:text-black
      transition
    "
  >
    Download 
  </button>
            <button className="
      text-sm sm:text-base
      text-white
      px-6 sm:px-8
      py-1
      border-2 border-yellow-500
      rounded-full
      hover:bg-yellow-500 hover:text-black
      transition
    "
  >
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Herosection1
