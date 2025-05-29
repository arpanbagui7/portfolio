import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Landing() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 relative overflow-hidden'>
      {/* Global animated background elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/5 to-purple-600/5 dark:from-blue-600/3 dark:to-purple-800/3 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-400/5 to-red-600/5 dark:from-pink-600/3 dark:to-red-800/3 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}></div>
        <div
          className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 dark:from-cyan-600/5 dark:to-blue-800/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "4s" }}></div>
      </div>

      <Navigation />
      <main className='relative z-10'>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
