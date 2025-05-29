import React from "react";
import { Code, Database, Shield, Cloud, Users, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Language",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      bgGradient:
        "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      skills: ["Javascript", "Typescript", "Python", "HTML", "CSS"],
    },
    {
      title: "Frontend Technologies",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      bgGradient:
        "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      skills: [
        "React.js",
        "Next.js",
        "React Hook Form",
        "Redux Toolkit",
        "React Query",
      ],
    },
    {
      title: "Backend Technologies",
      icon: Cloud,
      color: "from-green-500 to-teal-600",
      bgGradient:
        "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      skills: ["Node.js", "NestJS", "Django", "Flask", "Prisma", "Express"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-orange-500 to-red-600",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Libraries",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      skills: [
        "AWS-SDK",
        "Socket.IO",
        "Stripe",
        "PdfMake",
        "CsvtoJson",
        "Chart.js",
        "Xlsx",
        "HandlebarJs",
      ],
    },
    {
      title: "Securites & Others",
      icon: Shield,
      color: "from-cyan-500 to-blue-600",
      bgGradient:
        "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      skills: [
        "OOP",
        "MVC",
        "JWT",
        "MFA",
        "CI/CD",
        "Winston",
        "Logstash",
        "Kibana",
        "Rate Limit",
        "CORS",
        "Helmet",
      ],
    },
    {
      title: "Soft Skills & Leadership",
      icon: Users,
      color: "from-rose-500 to-pink-600",
      bgGradient:
        "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      skills: ["Team Leadership", "Code Review", "Communication"],
    },
  ];

  return (
    <section
      id='skills'
      className='py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl animate-pulse transition-colors duration-300'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-600/20 dark:from-pink-600/10 dark:to-red-800/10 rounded-full blur-3xl animate-pulse transition-colors duration-300'
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 transition-colors duration-300'>
            Technical Expertise
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300'>
            Proficient in modern technologies and frameworks with hands-on
            experience in building
            <span className='text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text font-semibold'>
              {" "}
              scalable applications
            </span>
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mx-auto mt-8 rounded-full transition-colors duration-300 animate-pulse'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className='group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 border border-white/50 dark:border-gray-700/50 hover:border-white/80 dark:hover:border-gray-600/80 transform hover:-translate-y-2 animate-fade-in'
                style={{ animationDelay: `${index * 150}ms` }}>
                <div className='flex items-center mb-8'>
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent
                      size={28}
                      className='group-hover:rotate-12 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-gray-100 dark:group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300'>
                    {category.title}
                  </h3>
                </div>

                <div
                  className={`p-6 rounded-2xl bg-gradient-to-br ${category.bgGradient} mb-6 group-hover:shadow-inner transition-all duration-300`}>
                  <div className='flex flex-wrap gap-3'>
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2.5 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gradient-to-r hover:${category.color} hover:text-white transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-transparent shadow-sm hover:shadow-md transform hover:scale-105 cursor-default`}
                        style={{
                          animationDelay: `${index * 150 + idx * 50}ms`,
                        }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated bottom border */}
                <div
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
