import React from 'react'

function Herosection1() {
  return (
    <div
      style={{ backgroundColor: "rgb(45,45,45)" }}
      className="min-h-screen flex items-center justify-center px-10"
    >
      <div className="w-full max-w-6xl flex items-center gap-16">


        <div className='h'>
          <img
            src="https://media.istockphoto.com/id/944138400/photo/indian-young-man-in-london-expressing-positive-emotion.jpg?s=612x612&w=0&k=20&c=rvkgZh4qs3PAWU6I10ZdbADY8kiV6F2rezjy6RAWgAM="
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
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
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
