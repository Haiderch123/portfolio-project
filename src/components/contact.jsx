import React from 'react'

function Contact() {
  return (
    <div
      style={{ background: 'rgb(45,45,45)' }}
      className="min-h-screen relative px-4 sm:px-10 py-10 flex flex-col items-center"
    >
      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-3xl text-yellow-500 text-center">
        Keep In Touch
      </h1>

      {/* Form */}
      <form className="mt-10 w-full max-w-3xl grid gap-4">
        {/* Name & Email */}
       <div className="flex flex-col sm:flex-row gap-4">
  <input
    type="text"
    placeholder="Name"
    className="bg-white rounded-md h-10 sm:h-12 flex-1 px-3 py-2"
  />
  <input
    type="text"
    placeholder="Email"
    className="bg-white rounded-md h-10 sm:h-12 flex-1 px-3 py-2"
  />
</div>


        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="bg-white rounded-md h-12 w-full px-3"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          className="bg-white rounded-md h-40 w-full px-3 py-2 resize-none"
        />

        {/* Submit Button */}
        <button className="bg-yellow-500 text-white rounded-md h-12 w-full sm:w-1/3 mx-auto">
          Submit
        </button>
      </form>

      {/* Contact Info */}
      <div className="text-gray-400 mt-10 w-full max-w-3xl grid sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Location */}
        <div>
          <p className="text-yellow-400 font-medium">Location</p>
          <p>251 Main Street, Suite 124</p>
          <p>London, UK</p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-yellow-400 font-medium">Phone Number</p>
          <p>+1234567890</p>
          <p>035272846284</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-yellow-400 font-medium">Email</p>
          <p>johnpeter142@gmail.com</p>
          <p>alastairmore182@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
