"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Navbar({ darkMode, setDarkMode }) {
  // Check for stored theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, [setDarkMode]);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-15 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
                {darkMode?
                <Image
                src="/logo-modified.png"
                alt="My Portfolio Logo"
                width={120}
                height={40}
                className="h-10 w-auto spin-logo hover:scale-110 transition-transform duration-300"
              />:
              <Image
              src="/logo1-modified.png"
              alt="My Portfolio Logo"
              width={120}
              height={40}
              className="h-10 w-auto spin-logo hover:scale-110 transition-transform duration-300"
            />
              }
              
            </a>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="text-xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className=" text-xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md bg-gray-500 dark:bg-gray-700 text-black dark:text-white ml-4 transition-colors duration-300"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-900 dark:text-gray-100 hover:text-blue-600 focus:outline-none">
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