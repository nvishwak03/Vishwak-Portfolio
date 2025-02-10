"use client";
import { useRef, useState } from "react";
import ParticlesComponent from './Components/Particle';
import Navbar from "./Components/Navbar";
export default function Home() {
  // Refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="text-gray-900 dark:text-gray-100">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div id="particles">
        <ParticlesComponent id="particles" darkMode={darkMode}/>
      </div>
      {/* Home Section */}
      <section
        id="home"
        ref={homeRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            I&apos;m a developer passionate about building amazing web
            applications.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            I&apos;m passionate about learning web development and building cool
            projects!
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on:
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Feel free to reach out!
          </p>
        </div>
      </section>
    </div>
  );
}