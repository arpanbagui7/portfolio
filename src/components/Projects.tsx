import React from "react";
import { Award, Link2, SquareChartGantt } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Voza Chat",
      description: "Real-Time Customer Chat and Integration",
      link: null,
      color: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      achievements: [
        "Developed chat application for 1:1 and group chats, media sharing, and bot triggers using Node, React, and MongoDB",
        "Integrated WAHA Apis to enable seamless reflection between the application and WhatsApp",
        "Utilized AWS-SDK & Multer to upload chat media",
        "Injected Node-Cron to send unseen chats to customer email after a certain time using Sendgrid",
      ],
    },
    {
      title: "Yellow Inbox",
      description: "Custom Email Marketing Platform",
      link: "https://stagefrontend.yelo.one",
      color: "from-purple-500 to-pink-500",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      achievements: [
        "Developed a fully-featured email marketing platform with NestJs, NextJs, and MySQL",
        "Created a microservice architecture with TCP communication for efficient microservice interactions",
        "Built email server using Postfix, Dovecot, and OpenDKIM for email signing and authenticity",
        "Integrated Prisma for database management, Winston for logging, and storing them using Elasticsearch, Logstash, and Kibana for enhanced monitoring and analysis",
      ],
    },
    {
      title: "Sipdirect",
      description: "Online Alcohol Delivery Platform",
      link: "https://sipdirect.com",
      color: "from-green-500 to-teal-500",
      bgGradient:
        "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      achievements: [
        "Implemented Pub/Sub model with AWS-SQS and AWS-SNS, utilizing FCM tokens for real-time push notifications",
        "Stored geo-polygon data in MySQL spatial data to calculate delivery ranges and ensure accurate delivery zone mapping",
        "Integrated Stripe for payment processing and Socket.IO for real-time updates on order status",
      ],
    },
    {
      title: "DMIS",
      description: "Diversion Management Information System",
      link: "https://trial.dmis211.com",
      color: "from-orange-500 to-red-500",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      achievements: [
        "Built a platform with Django, React, and PostgreSQL to list shelters, food services, and clothing charities",
        "Integrated Google Maps API for pinpoint location, allowing users to easily find nearby resources",
        "Used ANTD for a responsive UI, improving accessibility and providing a user-friendly experience",
      ],
    },
  ];

  return (
    <section
      id='projects'
      className='py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 dark:from-blue-600/10 dark:to-purple-800/10 rounded-full blur-3xl'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-600/20 dark:from-pink-600/10 dark:to-red-800/10 rounded-full blur-3xl'
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6'>
            Projects
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            A showcase of{" "}
            <span className='font-bold text-blue-600 dark:text-blue-400'>
              innovative solutions
            </span>{" "}
            and
            <span className='bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold'>
              {" "}
              real-world problem-solving
            </span>{" "}
            through well-engineered, production-grade applications
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full animate-pulse'></div>
        </div>

        <div className='relative'>
          <div className='space-y-12'>
            {projects.map((proj, index) => (
              <div key={index} className='relative md:ml-16 '>
                <div className='group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 p-8 transition-all duration-500 border border-white/50 dark:border-gray-700/50 hover:border-transparent transform hover:-translate-y-2'>
                  {/* Header section with enhanced styling */}
                  <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6'>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-3 mb-2'>
                        <SquareChartGantt
                          className='text-gray-500 dark:text-gray-400'
                          size={20}
                        />
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-gray-100 dark:group-hover:to-gray-400 group-hover:bg-clip-text'>
                          {proj.title} - {proj.description}
                        </h3>
                      </div>
                      {proj.link && (
                        <div className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
                          <div className='flex items-center space-x-1'>
                            <Link2 size={16} />
                            <a
                              className='text-blue-600'
                              href={proj.link}
                              target='_blank'
                              rel='noopener noreferrer'>
                              {proj.link}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements section with enhanced styling */}
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${proj.bgGradient} border border-gray-100/50 dark:border-gray-700/50`}>
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
                      {proj.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className='flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300'
                          style={{
                            animationDelay: `${index * 0.2 + idx * 0.1}s`,
                          }}>
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${proj.color} rounded-full mt-2 flex-shrink-0 animate-pulse`}></div>
                          <span className='text-gray-700 dark:text-gray-300 leading-relaxed hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`h-1 bg-gradient-to-r ${proj.color} rounded-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
