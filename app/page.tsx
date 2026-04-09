
'use client'

import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineGrade } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from 'react';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { href } from 'react-router-dom';

const Page = () => {
  // State to keep track of the currently active navigation item.
  // Initialized to "Dashboard" as it's typically the default view.
  const [active, setActive] = useState("Dashboard");

  // Array of navigation items, making it easier to map and manage.
  const navItems = [
    { name: "Dashboard", icon: MdOutlineDashboard, Link: "/" },
    { name: "Directory", icon: IoPersonCircleOutline, Link: "/components/directory" },
    { name: "Attendance", icon: CiCalendar, Link: "/components/attendance" },
    { name: "Grades", icon: MdOutlineGrade, Link: "/components/grades" },
    { name: "Settings", icon: IoSettingsOutline, Link: "/components/settings" },
  ];

  return (
    <div>
      <div className='flex gap-4 p-5 min-h-screen bg-gray-50'>
        <div className='border-r border-gray-300 w-64 sticky top-5 h-[calc(100vh-40px)]'>
          <div className='p-3 flex flex-col gap-1'>
            <h1 className='text-2xl font-bold text-[#1A5276]'>Atheneum</h1>
            <p className='text-gray-600'>Academic Archive</p>
          </div>

          {/* Navigation section */}
          <nav className='mt-4'>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-2 p-3 transition-all cursor-pointer mb-1 ${
                    active === item.name ? "text-[#1A5276] bg-gray-200 rounded-md font-semibold" : "text-gray-600 hover:bg-gray-100 rounded-md"
                  }`}
                  aria-current={active === item.name ? "page" : undefined}
                >
                  <item.icon size={25} />
                  <span className='text-lg'>{item.name}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main content area */}
        <div className='grow'>
          <header className='w-full p-2 flex justify-between items-center bg-white rounded-xl shadow-sm border border-gray-100 mb-6'>
            <div className='bg-gray-100 rounded-lg flex items-center gap-2 px-3 py-2 w-full max-w-md border border-transparent focus-within:border-gray-300 transition-all'>
              <span className='text-gray-500'>
                <IoIosSearch size={20}/>
              </span>
              <input 
                type="text" 
                placeholder='Search archive records...'  
                className='bg-transparent outline-none w-full text-sm'
              />
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex gap-4 border-r pr-6 border-gray-200'>
                <span className='text-gray-500 hover:text-[#1A5276] cursor-pointer transition-colors'>
                  <FaBell size={22}/>
                </span>
                <span className='text-gray-500 hover:text-[#1A5276] cursor-pointer transition-colors'>
                  <BsFillQuestionCircleFill size={22}/>
                </span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='text-right'>
                  <h1 className='text-sm font-bold text-gray-800 leading-none'>Admin User</h1>
                  <p className='text-[10px] text-gray-500 font-medium tracking-wider'>PRINCIPAL ARCHIVER</p>
                </div>
                <div className='w-10 h-10 relative'>
                  <Image src="/image_9cbc33a4.png" alt="Profile" fill className='rounded-lg object-cover '/>
                </div>
              </div>
            </div>
          </header>

        
        </div>
      </div>
    </div>
  )
}

export default Page
