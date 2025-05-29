import React from "react";
import { Building, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Techno Exponent (T-Web Exponent Services Pvt. Ltd)",
      location: "Kolkata",
      period: "Mar 2024 - May 2025",
      color: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      achievements: [
        "Developed 6+ scalable web applications using Node, React, Next.js, MySQL, and PostgreSQL",
        "Built secure REST APIs with JWT, RBAC, and MFA, reducing unauthorized access by 30%",
        "Enhanced frontend performance and user experience with React-i18next, React Hook Form, and Redux Toolkit",
        "Followed TypeScript, OOP, and MVC principles, reducing code maintenance time by 50%",
        "Collaborated with other team members to deliver on-time releases and ensured integrity",
      ],
    },
    {
      title: "Software Engineer",
      company: "Spurtree Technology",
      location: "Bangalore",
      period: "Aug 2021 - Mar 2024",
      color: "from-purple-500 to-pink-500",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      achievements: [
        "Built and maintained full-stack apps with Node.js, React, and MySQL for high performance",
        "Integrated Stripe for payments, Google APis for locations, and AWS SQS & SNS for real-time events",
        "Enhanced front end with React, Redux, and Material-Ul for better UX and responsiveness",
        "Optimized backend using microservices, improving scalability and reducing response times",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Scanta India Pvt Ltd",
      location: "Gurgaon",
      period: "May 2021 - Jul 2021",
      color: "from-green-500 to-teal-500",
      bgGradient:
        "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      achievements: [
        "Developed a platform using Django, React, and PostgreSQL, focusing on scalability and performance",
        "Implemented multi-level authorization and encrypted customer data to meet HIPAA security standards",
        "Integrated Google Maps API to enable precise resource pinpointing and improved user experience",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Keross Reseach & Development Centre",
      location: "Kolkata",
      period: "Jul 2020 - Apr 2021",
      color: "from-orange-500 to-red-500",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      achievements: [
        "Collaborated and developed web applications using JavaScript, jQuery, MySQL, and MongoDB",
      ],
    },
  ];

  return (
    <section
      id='experience'
      className='py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-600/20 dark:from-pink-600/10 dark:to-red-800/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6'>
            Work Experience
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            A journey of{" "}
            <span className='font-bold text-blue-600 dark:text-blue-400'>
              continuous growth
            </span>{" "}
            and
            <span className='bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold'>
              {" "}
              technical excellence
            </span>
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full animate-pulse'></div>
        </div>

        <div className='relative'>
          {/* Enhanced timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 hidden md:block rounded-full shadow-lg'></div>

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='relative md:ml-16 animate-fade-in'
                style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Enhanced timeline dot */}
                <div
                  className={`absolute -left-20 top-8 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-xl hidden md:block animate-pulse`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className='absolute inset-1 bg-white dark:bg-gray-900 rounded-full'></div>
                </div>

                <div className='group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 p-8 transition-all duration-500 border border-white/50 dark:border-gray-700/50 hover:border-transparent transform hover:-translate-y-2'>
                  {/* Header section with enhanced styling */}
                  <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6'>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-3 mb-2'>
                        <Building
                          className='text-gray-500 dark:text-gray-400'
                          size={20}
                        />
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-gray-100 dark:group-hover:to-gray-400 group-hover:bg-clip-text'>
                          {exp.title}
                        </h3>
                      </div>
                      <h4
                        className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1`}>
                        {exp.company}
                      </h4>
                      <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
                        <div className='flex items-center space-x-1'>
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                      <span
                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${exp.bgGradient} px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent border border-gray-200/50 dark:border-gray-700/50`}>
                        <Calendar
                          size={16}
                          className='text-gray-500 dark:text-gray-400'
                        />
                        <span
                          className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.period}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Achievements section with enhanced styling */}
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${exp.bgGradient} border border-gray-100/50 dark:border-gray-700/50`}>
                    <div className='flex items-center space-x-2 mb-4'>
                      <Award
                        className={`text-gray-900 dark:text-white`}
                        size={20}
                      />
                      <h5 className='font-bold text-gray-900 dark:text-white'>
                        Key Achievements
                      </h5>
                    </div>
                    <ul className='space-y-3'>
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className='flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300'
                          style={{
                            animationDelay: `${index * 0.2 + idx * 0.1}s`,
                          }}>
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0 animate-pulse`}></div>
                          <span className='text-gray-700 dark:text-gray-300 leading-relaxed hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`h-1 bg-gradient-to-r ${exp.color} rounded-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
