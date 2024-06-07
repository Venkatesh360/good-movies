'use client';

import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PreviewIcon from '@mui/icons-material/Preview';
import RecommendIcon from '@mui/icons-material/Recommend';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import poster from "@/app/public/MOVIES.png";
import './CSS/Navbar.css';  // Import the custom CSS
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Navbar = ({ display }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const getUid = async () => {
      try {
        const response = await axios.get("/api/user/checkUser");
        if(response.data.success){
          setUser(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUid();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.get("/api/user/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <nav className={`${display} flex items-center h-[10vh] w-full border-b-2 bg-[#01005E] text-white z-10`}>
      <a href='/' className="flex flex-grow pl-4 px-4 py-2 text-2xl font-bold">
        <Image src={poster} alt='Good Movies' className='h-[9vh] w-[300px]' />
      </a>

      {user ? (
        <>
          <div className="hidden md:flex items-center gap-4">
            <a href="/" className="flex flex-col pt-5 items-center justify-center cursor-pointer group w-12 sm:w-20 hover:text-white">
              <HomeIcon className="h-8 mb-[-5px]" fontSize='medium' />
              <p className="opacity-0 flex items-center justify-center text-xs group-hover:opacity-100 tracking-widest pt-0">Home</p>
            </a>
            <a href="/Watchlist" className="flex flex-col pt-5 items-center justify-center cursor-pointer group w-12 sm:w-20 hover:text-white">
              <PreviewIcon className="h-8 mb-[-5px]" fontSize='medium' />
              <p className="opacity-0 flex items-center justify-center text-xs group-hover:opacity-100 tracking-widest pt-0">Watchlist</p>
            </a>
            <a href="/Recommendations" className="flex flex-col pt-5 items-center justify-center cursor-pointer group w-12 sm:w-20 hover:text-white">
              <RecommendIcon className="h-8 mb-[-5px]" fontSize='medium' />
              <p className="opacity-0 text-xs flex items-center justify-center group-hover:opacity-100 tracking-widest pt-0">Recommendation</p>
            </a>
            <span className="relative flex flex-col pt-5 items-center justify-center cursor-pointer group w-12 sm:w-20 hover:text-white" onClick={toggleProfileDropdown}>
              <AccountCircleIcon className="h-8 mb-[-5px]" fontSize='medium' />
              <p className="opacity-0 text-xs group-hover:opacity-100 tracking-widest flex items-center justify-center pt-0">Profile</p>
              {isProfileDropdownOpen && (
                <div className="absolute ml-[-120px] top-full mt-2 bg-white text-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:text-gray-200 z-10">
                  <ul className="py-2 text-sm">
                    <li>
                      <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                    </li>
                    <li>
                      <a href="/Recommendations" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Recommendations</a>
                    </li>
                    <li>
                      <a href="/Watchlist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Watchlist</a>
                    </li>
                    <li>
                      <a onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </span>
          </div>
          <div className="hidden md:flex max-w-[8vw] md:flex-grow"></div>
          <div className="flex md:hidden">
            <button className="p-2 mr-2" onClick={toggleMenu}>
              <MenuIcon fontSize="large" />
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute z-10 top-[10vh] w-full text-white md:hidden">
              <ul className="flex flex-col items-center bg-gray-800">
                <a href="/" className="w-full py-2 px-4 hover:bg-gray-700">Home</a>
                <a href="/Recommendations" className="w-full py-2 px-4 hover:bg-gray-700">Recommendation</a>
                <a href="/Watchlist" className="w-full py-2 px-4 hover:bg-gray-700">Watchlist</a>
                <a onClick={handleLogout} className="w-full py-2 px-4 hover:bg-gray-700">Logout</a>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-grow justify-end">
          <button onClick={() => router.push('/login')} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
