'use client'; // Mark this component as a Client Component
import Image from 'next/image';

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <Image
                src="/logo-modified.png" // Path to your logo
                alt="My Portfolio Logo"
                width={120} // Adjust based on your logo's aspect ratio
                height={40} // Adjust based on your logo's aspect ratio
                className="h-10 w-auto spin-logo hover:scale-110 transition-transform duration-300" // Add zoom effect
              />
            </a>
          </div>

          {/* Navigation links on the right */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}