import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left with spinning animation */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo-modified.png" // Path to your logo
                alt="My Portfolio Logo"
                width={120} // Adjust based on your logo's aspect ratio
                height={40} // Adjust based on your logo's aspect ratio
                className="h-10 w-auto spin-logo" // Apply the spin-logo class
              />
            </Link>
          </div>

          {/* Navigation links on the right */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
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