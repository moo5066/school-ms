import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineGrade } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const page = () => {

  const List={
    Dashboard: MdOutlineDashboard,
    Directory:IoPersonCircleOutline,
    Attendance:CiCalendar,
    Grades:MdOutlineGrade,
    Settings:IoSettingsOutline,

  }
  return (
    <div>
      <div className='flex gap-4 text-[#1A5276]'>
        <div className='border-r border-gray-300 h-screen'>
          <div className='p-3 flex flex-col gap-1'>
          <h1 className='text-2xl font-bold'>Atheneum Management</h1>
          <p className='text-gray-600'>Academic Archive</p>
</div>

<div>
<div>
  <ul className='flex flex-col gap-2  text-xl  font-bold'>
    {Object.entries(List).map(([name, Icon])=>(
      <li key={name} className='flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer'>
        <Icon size={20}/>
        <span>{name}</span>
      </li>
    ))}
  </ul>
</div>
</div>

 </div>



       
      <div>
<h1></h1>
      </div>
      </div>
    </div>
  )
}

export default page
