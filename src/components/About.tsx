import { Code, Github, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Expertise in modern web technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Creative problem-solving approach",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Delivering results that matter",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative and supportive",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id='about'
      className='py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-red-600/20 dark:from-pink-600/10 dark:to-red-800/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6'>
            About Me
          </h2>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='animate-fade-in' style={{ animationDelay: "0.2s" }}>
            <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text'>
              Passionate Full Stack Developer ✨
            </h3>

            <div className='space-y-6 text-lg'>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                With over{" "}
                <span className='font-bold text-blue-600 dark:text-blue-400'>
                  5 years of experience
                </span>{" "}
                in full-stack development, I specialize in building{" "}
                <span className='bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold'>
                  scalable web applications
                </span>{" "}
                using modern technologies. My expertise spans across frontend
                frameworks like React.js and Next.js, backend technologies
                including Node.js and NestJS.
              </p>

              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                I&apos;m passionate about{" "}
                <span className='font-semibold text-green-600 dark:text-green-400'>
                  clean code
                </span>
                ,
                <span className='font-semibold text-yellow-600 dark:text-yellow-400'>
                  {" "}
                  performance optimization
                </span>
                , and
                <span className='font-semibold text-red-600 dark:text-red-400'>
                  {" "}
                  security best practices
                </span>
                . I have experience with cloud services, microservices
                architecture, and modern development tools.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                <h4 className='font-bold text-gray-900 dark:text-white mb-3 text-lg'>
                  🎓 Education
                </h4>
                <p className='text-gray-700 dark:text-gray-300 font-semibold'>
                  Master of Computer Applications
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Academy of Technology, West Bengal
                </p>
                <p className='text-sm text-blue-600 dark:text-blue-400 font-medium'>
                  Aug 2017 - July 2020
                </p>
              </div>
                <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                <h4 className='font-bold text-gray-900 dark:text-white mb-3 text-lg'>
                  🎓 Profiles
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                  <Code size={20} />
                  <a
                  href='https://leetcode.com/u/arpanbagui7/'
                  className='text-blue-600 font-semibold'
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Leetcode Profile
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github size={20} />
                  <a
                  href='https://github.com/arpanbagui7'
                  className='text-blue-600 font-semibold'
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Github Profile
                  </a>
                </div>
                </div>
            </div>
          </div>

          <div className='animate-fade-in' style={{ animationDelay: "0.4s" }}>
            <div className='bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50'>
              <h4 className='text-2xl font-bold dark:text-white mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                Key Strengths 🚀
              </h4>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className='group flex flex-col items-center text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50 dark:border-gray-700/50'
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent
                          size={24}
                          className='group-hover:rotate-12 transition-transform duration-300'
                        />
                      </div>
                      <h5 className='font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-gray-100 dark:group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300'>
                        {item.title}
                      </h5>
                      <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
