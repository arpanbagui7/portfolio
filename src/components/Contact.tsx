"use client";
import React, { useState } from "react";
import { Mail, Linkedin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const availabilities = [
    { text: "Full-time opportunities" },
    { text: "Contract projects" },
    { text: "Technical consultation" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    try {
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to send message.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Unexpected error occurred.");
      }
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "arpanbagui7@gmail.com",
      link: "mailto:arpanbagui7@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7003311837",
      link: "tel:+917003311837",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/arpanb7",
      link: "https://linkedin.com/in/arpanb7",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <h2 className='text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Get In Touch
            </h2>
          </div>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6 animate-pulse'></div>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            I&apos;m always interested in hearing about{" "}
            <span className='font-bold text-blue-400'>new opportunities</span>{" "}
            and
            <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold'>
              {" "}
              exciting projects
            </span>
            . Let&apos;s discuss how we can work together!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='animate-fade-in' style={{ animationDelay: "0.2s" }}>
            <h3 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Contact Me
            </h3>

            <div className='space-y-6 mb-12'>
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className='group flex items-center space-x-4 animate-fade-in'
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent
                        size={24}
                        className='group-hover:rotate-12 transition-transform duration-300'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg text-gray-100 mb-1'>
                        {item.title}
                      </h4>
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-medium hover:underline transition-all duration-200`}>
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <section className='py-8'>
              <div className='max-w-xl mx-auto bg-[#0f172a] dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'>
                <h2 className='text-center text-lg md:text-xl font-semibold text-emerald-400 mb-6'>
                  Available for
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {availabilities.map((label) => (
                    <div
                      key={label.text}
                      className='w-full text-center bg-slate-800/80 hover:bg-gradient-to-r from-emerald-500/20 to-purple-600/20 text-white py-3 px-6 rounded-xl font-medium transition duration-300 hover:scale-[1.03] hover:ring-1 hover:ring-emerald-400'>
                      {label.text}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <div className='animate-fade-in' style={{ animationDelay: "0.4s" }}>
            <div className='bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50'>
              <h3 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2 text-gray-300'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400'
                      placeholder='John Doe'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2 text-gray-300'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400'
                      placeholder='john@example.com'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium mb-2 text-gray-300'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400'
                    placeholder='Project Discussion'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2 text-gray-300'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 text-white placeholder-gray-400'
                    placeholder='Tell me about your project or opportunity...'></textarea>
                </div>

                <button
                  type='submit'
                  disabled={status === "loading"}
                  className='group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3'>
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send
                        size={20}
                        className='group-hover:rotate-12 transition-transform duration-300'
                      />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {!["idle", "loading"].includes(status) && (
                  <div
                    className={`mt-3 text-sm px-4 py-2 rounded-lg ${
                      status === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
