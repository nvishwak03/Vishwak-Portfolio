'use client'; // Mark this component as a Client Component
import { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';

export default function Home() {
  // Refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>

      {/* Home Section */}
      <section id="home" ref={homeRef} className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-gray-700">I'm a developer passionate about building amazing web applications.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-700">I'm passionate about learning web development and building cool projects!</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mt-4 text-gray-700">Here are some of the projects I've worked on:</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="mt-4 text-gray-700">Feel free to reach out!</p>
        </div>
      </section>
    </div>
  );
}