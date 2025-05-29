"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl dark:shadow-gray-900/20 border-b border-white/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo with enhanced styling */}
          <div className='group flex items-center space-x-2'>
            {scrolled ? (
              <>
                <div className='relative'>
                  <Sparkles
                    className='text-blue-500 dark:text-blue-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300 group-hover:rotate-12'
                    size={24}
                  />
                  <div className='absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md group-hover:bg-purple-500/20 dark:group-hover:bg-purple-400/20 transition-colors duration-300'></div>
                </div>
                <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>
                  Arpan Bagui
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                duration={500}
                offset={0}
                className='group relative flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20'
                style={{ animationDelay: `${index * 0.1}s` }}>
                <span className='relative'>
                  {item.name}
                  <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300'></div>
                </span>
              </Link>
            ))}
            <div className='ml-4'>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className='md:hidden flex items-center space-x-3'>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300'>
              <div className='relative'>
                {isOpen ? (
                  <X
                    size={24}
                    className='transform rotate-180 transition-transform duration-300'
                  />
                ) : (
                  <Menu
                    size={24}
                    className='transition-transform duration-300'
                  />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
          <div className='bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl mt-2 shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden'>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                duration={500}
                offset={0}
                onClick={() => setIsOpen(!isOpen)}
                className='group w-full flex items-center space-x-3 py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 border-b border-gray-100/50 dark:border-gray-700/50 last:border-b-0'
                style={{ animationDelay: `${index * 0.1}s` }}>
                <span className='font-medium'>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
