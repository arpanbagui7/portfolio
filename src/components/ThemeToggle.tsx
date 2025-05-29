import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='group relative p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 border border-blue-200/50 dark:border-gray-600/50 hover:border-blue-300/70 dark:hover:border-gray-500/70 shadow-lg hover:shadow-xl transform hover:scale-105'
      aria-label='Toggle theme'>
      <div className='relative w-5 h-5'>
        <Sun className='absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all duration-500 text-amber-500 group-hover:rotate-180 dark:-rotate-90 dark:scale-0' />
        <Moon className='absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-500 text-blue-500 group-hover:rotate-0 dark:rotate-0 dark:scale-100' />
      </div>

      {/* Animated background glow */}
      <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-yellow-400/20 dark:to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
    </button>
  );
};

export default ThemeToggle;
