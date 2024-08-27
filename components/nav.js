'use client';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
      setIsDarkMode(storedMode === 'dark');
      document.documentElement.classList.toggle('dark', storedMode === 'dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    console.log('tooooo')
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };


  return (
<div className="bg-glass w-full h-28 flex justify-between items-center px-4 ">
<p  className=" font-bold text-4xl text-cyan-950 ms-5 dark:text-slate-100" >Logo</p>
<input onClick={toggleDarkMode} type="checkbox" className=" toggle border-0 bg-transparent [--tglbg:rgba(241,245,249,1)] hover:bg-transparent checked:bg-transparent drop-shadow-md" defaultChecked />
</div>
  )
  
};
export default Nav;