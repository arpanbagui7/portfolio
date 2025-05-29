import { Linkedin, Mail } from "lucide-react";
import React from "react";

const Home = () => {
  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "15+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500",
    },
    { number: "4", label: "Companies", color: "from-green-500 to-teal-500" },
  ];

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center pt-16 relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 dark:from-blue-600/20 dark:to-purple-800/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-red-600/30 dark:from-pink-600/20 dark:to-red-800/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 dark:from-cyan-600/15 dark:to-blue-800/15 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='animate-fade-in'>
          <h1 className='text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent transition-all duration-300'>
            Arpan Bagui
          </h1>
          <div className='relative mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-fade-in'>
              Full Stack Developer
            </h2>
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse'></div>
          </div>
          <p
            className='text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in transition-colors duration-300'
            style={{ animationDelay: "0.2s" }}>
            Results-driven Full Stack Developer with{" "}
            <span className='font-bold text-blue-600 dark:text-blue-400'>
              5+ years
            </span>{" "}
            of experience building
            <span className='bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold'>
              {" "}
              scalable web applications
            </span>
            . Proficient in modern technologies with a passion for creating
            exceptional user experiences.
          </p>
          <div
            className='flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in'
            style={{ animationDelay: "0.4s" }}>
            <a
              href='mailto:arpanbagui7@gmail.com'
              className='group flex items-center justify-center space-x-3 border-2 border-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white dark:hover:from-blue-400 dark:hover:to-purple-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-blue-600 dark:border-blue-400'>
              <Mail
                size={20}
                className='group-hover:rotate-12 transition-transform duration-300'
              />
              <span className='font-semibold'>Get In Touch</span>
            </a>
            <a
              href='https://linkedin.com/in/arpanb7'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center justify-center space-x-3 border-2 border-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white dark:hover:from-blue-400 dark:hover:to-purple-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-blue-600 dark:border-blue-400'>
              <Linkedin
                size={20}
                className='group-hover:rotate-12 transition-transform duration-300'
              />
              <span className='font-semibold'>LinkedIn</span>
            </a>
          </div>
          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in'
            style={{ animationDelay: "0.6s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20 transition-all duration-300 border border-white/50 dark:border-gray-700/50 hover:border-transparent transform hover:-translate-y-2'>
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className='text-gray-600 dark:text-gray-300 font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
