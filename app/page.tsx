
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
import { BsPersonPlusFill } from "react-icons/bs";
import { AiFillNotification } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";



const Page = () => {
  // State to keep track of the currently active navigation item.
  // Initialized to "Dashboard" as it's typically the default view.
  const [active, setActive] = useState("Dashboard");

  // Array of navigation items, making it easier to map and manage.
  const navItems = [
    { name: "Dashboard", icon: MdOutlineDashboard },
    { name: "Directory", icon: IoPersonCircleOutline},
    { name: "Attendance", icon: CiCalendar },
    { name: "Grades", icon: MdOutlineGrade },
    { name: "Settings", icon: IoSettingsOutline},
  ];

  const schoolStats = [
    { name: 'Total Students', number: '2,840', description: '+12% from last year' },
    { name: 'Total Teachers', number: '156', description: '98% Active attendance' },
    { name: 'Total Classes', number: '48', description: 'Across 8 departments' }
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
                  <Image src="/image_9cbc33a4.png" alt="Profile" fill sizes="40px" className='rounded-lg object-cover'/>
                </div>
              </div>
            </div>
          </header>

          <main className='space-y-6'>
            {active === "Dashboard" && (
              <div className='space-y-6'>
                <div className='w-full flex justify-between gap-5 items-center'>
                  <div>
                    <h2 className='text-2xl font-bold text-[#1A5276] mb-2'>Campus Overview</h2>
                    <p className='text-gray-600'>Curated academic analytics and real-time administrative metrics.</p>
                  </div>

                  <div className='flex gap-4'>
                    <div className='bg-white shadow-sm border border-gray-100 p-4 rounded-lg flex gap-3 items-center cursor-pointer hover:bg-gray-50 transition-colors'>
                  <span className='text-[#1A5276]'>   <BsPersonPlusFill size={25}/> </span> 
                      <p className='font-medium text-sm'>Add Student</p>
                    </div>
                    <div className='bg-white shadow-sm border border-gray-100 p-4 rounded-lg flex gap-3 items-center cursor-pointer hover:bg-gray-50 transition-colors'>
                    <span className='text-[#1A5276]'>  <AiFillNotification size={25} /> </span>
                      <p className='font-medium text-sm'>Post Notice</p>
                    </div>
                    <div className='flex gap-3 bg-[#1A5276] text-white p-4 rounded-lg items-center cursor-pointer hover:bg-[#154360] transition-colors'>
                      <BsBookmarkCheck size={25}/>
                      <p className='font-medium text-sm'>Mark Attendance</p>
                    </div>
                  </div>
                </div>

<div className='flex flex-row gap-10'>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
                  {schoolStats.map((stat) => (
                    <div key={stat.name} className='bg-white shadow-sm border border-gray-100 p-6 rounded-xl'>
                      <p className='text-sm text-gray-500 font-medium mb-1'>{stat.name}</p>
                      <h3 className='text-2xl font-bold text-[#1A5276] mb-1'>{stat.number}</h3>
                      <p className='text-xs text-green-600 font-medium'>{stat.description}</p>
                    </div>
                  ))}
                </div>

<div className='bg-[#6B4604] text-white p-3 rounded-lg flex flex-col gap-5'>
  <p className='text-[#c6a367]'>Enrollment Goal</p>
  <div>
  <h1 className='text-2xl'>94%</h1>
  <p className='text-xtrasmall text-gray-300'>TARGET 3,000 </p>
<input type="range" min="0" max="100" defaultValue="94" className='bg-white'/>
</div>
</div>
</div>

              </div>
            )}





            {active === "Directory" && (
              <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
                <h2 className='text-xl font-bold text-[#1A5276] mb-4'>Directory</h2>
                <p className='text-gray-600'>Here you can find all the directory entries in the academic archive.</p>
              </div>
            )}

            {active === "Attendance" && (
              <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
                <h2 className='text-xl font-bold text-[#1A5276] mb-4'>Attendance</h2>
                <p className='text-gray-600'>Here you can find all the attendance records in the academic archive.</p>
              </div>
            )}

            {active === "Grades" && (
              <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
                <h2 className='text-xl font-bold text-[#1A5276] mb-4'>Grades</h2>
                <p className='text-gray-600'>Here you can find all the grade records in the academic archive.</p>
              </div>
            )}

            {active === "Settings" && (
              <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
                <h2 className='text-xl font-bold text-[#1A5276] mb-4'>Settings</h2>
                <p className='text-gray-600'>Here you can adjust your settings and preferences for the academic archive.</p>
              </div>
            )}
          </main>
        
        </div>
      </div>
    </div>
  )
}

export default Page
