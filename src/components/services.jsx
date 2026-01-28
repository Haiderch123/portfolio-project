import React from 'react'
const services = [
  {
    title: "Creative Design",
    desc: "Lorem ipsum simply text of the printing and type setting industry when an unknown printing simply",
    icon: "⚙️",
  },
  {
    title: "Clean Code",
    desc: "Lorem ipsum simply text of the printing and type setting industry when an unknown printing simply",
    icon: "🔁",
  },
  {
    title: "Responsive Design",
    desc: "Lorem ipsum simply text of the printing and type setting industry when an unknown printing simply",
    icon: "📱",
  },
  {
    title: "Material UI",
    desc: "Lorem ipsum simply text of the printing and type setting industry when an unknown printing simply",
    icon: "🧩",
  },
  {
    title: "Material UI Icons",
    desc: "Lorem ipsum simply text of the printing and type setting industry when an unknown printing simply",
    icon: "💠",
  },
  {
    title: "Awesome Support",
    desc: "Lorem ipsum simply text of the printing and type setting industry when an unknown printing simply",
    icon: "📊",
  },
];


function Services() {
  return (
   <div style={{ backgroundColor: 'rgb(45,45,45)' }} className="min-h-screen ">
  
  <h1 className="font-bold text-2xl text-yellow-500 flex justify-center pb-15">
    Services
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 px-10">
    {services.map((service, index) => (
      <div key={index} className="bg-black p-6 rounded-lg">
        
        <div className="text-2xl mb-4">
          {service.icon}
        </div>

        <h3 className="text-white text-xl mb-3">
          {service.title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {service.desc}
        </p>

      </div>
    ))}
  </div>

</div>

  )
}

export default Services
