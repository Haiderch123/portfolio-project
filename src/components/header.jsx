import { useState } from 'react';

const menuitems = [
  { label: 'Home', link: 'home' },
  { label: 'About', link: 'about' },
  { label: 'Services', link: 'services' },
  { label: 'Portfolio', link: 'portfolio' },
  { label: 'Testimonials', link: 'testimonials' },
  { label: 'Contact', link: 'contact' },
];


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ backgroundColor: 'rgb(45,45,45)' }} className=" h-16 flex items-center justify-around m-auto fixed top-0 left-0 w-full z-50 ">
    <div>
        <img src="/src/assets/logo.png" alt="logo" className='w-60 h-40 pt-2 ' />
      </div>
      <div className="hidden md:flex gap-8 text-amber-500 font-medium">
        {menuitems.map((item, index) => (
          <a key={index} href={`#${item.link}`} className="hover:text-white">
            {item.label}
          </a>
        ))}
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden text-amber-500 text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16  w-full bg-black flex flex-col  gap-4 py-4 px-10 text-amber-500 md:hidden">
          {menuitems.map((item, index) => (
            <a
              key={index}
              href={`#${item.link}`}
          
              className="hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

    </div>
  );
}

export default Header;
