
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
import { MdGrade } from "react-icons/md";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { MdDownload } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { CgExport } from "react-icons/cg";
import { FaRegSave } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";



const Page = () => {
  // State to keep track of the currently active navigation item.
  // Initialized to "Dashboard" as it's typically the default view.
  const [active, setActive] = useState("Dashboard");
  const [trendTab, setTrendTab] = useState("Monthly");
  const [directorTab, setDirectorTab] = useState("Grade12");

  // Array of navigation items, making it easier to map and manage.
  const navItems = [
    { name: "Dashboard", icon: MdOutlineDashboard },
    { name: "Directory", icon: IoPersonCircleOutline},
    { name: "Attendance", icon: CiCalendar },
    { name: "Grades", icon: MdOutlineGrade },
    { name: "Settings", icon: IoSettingsOutline},
  ];

  const directoryList=[
    { name: "Grade12", icon: MdGrade },
    { name: "SectionB", icon: PiBuildingApartmentDuotone },
    { name: "Export", icon: MdDownload },
  ]
  const [archive, setArchive]=useState("Bulk Records Update")

function handleArchive() {
  setArchive("Bulk Records Update")
}
function handleTwo() {
  setArchive("Class Transition Log")
}
function handleThree() {
  setArchive("ID Card Printing")
}

const [students , setStudents]=useState([
  {id:1, name: "Authur Pendragon" , uid:"2023-2012" , status:"PRESENT"},
  {id:2, name:"Guinerere Vance", uid:"2023-0045",status:"PRESENT"},
  {id:3, name:"Lancelot Dulac", uid:"2023-0102",status:"PRESENT"},
  {id:4, name:"Morgan LeFay", uid:"2023-0189",status:"PRESENT"},
])

function updateStatus(id: number, newStatus: string){
setStudents(prev =>
prev.map(student =>
  student.id === id ? { ...student, status: newStatus } : student

)
)
}






  function handleTrendTab(){
    setTrendTab("Monthly")
  }

  
// function handleAttendenceTwelve() {
//   setAttendence("LATE")
// }

const [on,setOn]=useState()


  // const lists =[
    
  //   "ACADEMIC PROFILE",'ID','ATTENDANCE','GPA','ACTION' 
  // ]

  function handleClick(){
    console.log("Hello Mohamed Abdulkadir Abdulahi")
  }

  const schoolStats = [
    { name: 'Total Students', number: '2,840', description: '+12% from last year' },
    { name: 'Total Teachers', number: '156', description: '98% Active attendance' },
    { name: 'Total Classes', number: '48', description: 'Across 8 departments' }
  ];

const listItems = [
  "HUMANITIES",
  "SCIENCE",
  "ECONOMICS",
  "FINEARTS"
]






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

<div className='absolute bottom-5'>
  <div className='bg-[#1A5276] text-white p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-[#154360] transition-colors'>
    <p onClick={handleClick}>+ New Record</p>
  </div>
</div>


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

              <div className='flex flex-col lg:flex-row w-full justify-around items-start gap-10'>
                <div className='mt-10 lg:mt-20 bg-gray-200 p-5 rounded-lg w-full lg:max-w-[650px] min-h-[480px] flex flex-col justify-between'>
                  <div>


       <div className='flex flex-nowrap justify-between items-center mb-5 gap-4 overflow-x-auto pb-2 scrollbar-hide'> 
        <div className='shrink-0'>
        <h1 className='text-xl md:text-2xl font-bold text-[#1A5276] mb-1 whitespace-nowrap'>Live Enrollment Trends</h1>
        <p className='text-gray-500 text-xs md:text-sm whitespace-nowrap'>Comparative analysis of new registrations by faculty</p>
        </div>
        <div className='flex flex-nowrap gap-2 bg-white p-1 rounded-lg shrink-0'>
          <h2 
            onClick={handleTrendTab} 
            className={`px-4 py-1.5 rounded-md cursor-pointer text-sm transition-all whitespace-nowrap ${
              trendTab === "Monthly" ? "bg-[#1A5276] font-bold text-white shadow-sm" : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Monthly
          </h2>
          <h2 
            onClick={() => setTrendTab("Quarterly")} 
            className={`px-4 py-1.5 rounded-md cursor-pointer text-sm transition-all whitespace-nowrap ${
              trendTab === "Quarterly" ? "bg-[#1A5276] font-bold text-white shadow-sm" : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            Quarterly
          </h2>
        </div>
      </div>
      



<div className='mt-20 lg:mt-32 mx-4 md:mx-10'>
  <div className='flex justify-between items-center mb-5 text-sm '>
    {listItems .map((item)=>(
      <div key={item}>{item}</div>
    ))}
  </div>
</div>

<hr className='mt-10 text-gray-300'/>

<div className='flex items-center gap-5 mt-10'>
  <div>
    <h1 className='text-gray-500 text-sm'>PEAK PERIOD</h1>
    <p className='text-lg font-medium'>August 12-sep 05</p>
  </div>
  <div>
    <h1 className='text-gray-500 text-sm'>TOP FACULTY</h1>
    <p className='text-lg font-medium'>Computer Sceince (CS)</p>
  </div>

</div>
</div>   
</div>

<div className='flex flex-col gap-5'>
<div className='bg-gray-300 shadow-sm p-5 rounded-lg lg:mt-20'>
  <div>
    <div className='flex justify-between'>
    <h1>Upcoming Events</h1>
<p>veiw All</p>
  </div>

<div>
  <div className='flex gap-5 bg-white p-5 rounded-lg mb-5'>
  <div className='flex flex-col bg-gray-200 p-2 rounded-lg'>
    <p>SEP</p>
    <p>24</p>
  </div>

  <div className='text-gray-500 flex flex-col items-center'>
    <p>Faculty Seminar</p>
    <p>10:00 AM.Main Hall</p>
  </div>
  </div>
  <div className='flex gap-5 bg-white p-5 rounded-lg mb-5'>
  <div className='flex flex-col bg-gray-200 p-2 rounded-lg'>
    <p>OCT</p>
    <p>02</p>
  </div>

  <div className='text-gray-500 flex flex-col items-center'>
    <p>Sport Meet</p>
    <p>8:30AM.West Stadium</p>
  </div>
  </div>
  <div className='flex gap-5 bg-white p-5 rounded-lg mb-5'>
  <div className='flex flex-col bg-gray-200 p-2 rounded-lg'>
    <p>OCT</p>
    <p>15</p>
  </div>

  <div className='text-gray-500 flex flex-col items-center'>
    <p>Mid-Term Reviews</p>
    <p>All Days.Academic wing</p>
  </div>
  </div>

</div>
</div>
</div>




<div>
  <div className='bg-[#1A5276] text-white p-2 rounded-lg'>
    <h1 className='text-xl font-bold  rounded-md mb-2'>LIBRARY ACCESS</h1>
    <p className='text-gray-200 text-sm mb-5'>Digital archivies are currently undergoing maintenance.</p>
  </div>
</div>



 </div>
</div>


<div className='flex justify-around w-full text-gray-500'>
  <div>
    Ⓒ 2024 Atheneum Academic Archive. All rights reserved.
  </div>
<div className='flex justify-around items-center gap-5'>
  <p>System</p>
  <p>DATA PRIVACY</p>
  <p>SUPPORT</p>
</div>
</div>


</div> 



            )}





            {active === "Directory" && (
              <div className=''>
              <div className=' flex justify-between p-6  border border-gray-100 rounded-xl shadow-sm bg-white'>
                <div className='w-full max-w-md'>
                <h2 className=' font-bold text-[#1A5276] text-2xl mb-4'>Student Directory</h2>
                <p className='text-gray-600'>Curated academic registry for the 2023-2024 Archive Session.</p>
                </div>
                <div className='flex justify-end-safe items-center gap-5 w-full'>
                  {/* <p onClick={()=>setDirectorTab("Grade12")} className={`flex items-center  shadow-sm p-2 rounded-lg gap-2 ${directorTab === "Grade12" ? "bg-[#1A5276] text-white" : "bg-white text-[#1A5276]"}`}><span><MdGrade size={20}/></span><span >Grade12</span></p>
                  <p onClick={()=>setDirectorTab("SectionB")} className={`flex items-center bg-white shadow-sm p-2 rounded-lg  gap-2 ${directorTab === "SectionB" ? "bg-[#1A5276] text-white" : "bg-white text-[#1A5276]"}`}><span><PiBuildingApartmentDuotone size={20}/></span><span>SectionB</span></p>
                  <p onClick={()=>setDirectorTab("Export")} className={`flex items-center text-white shadow-sm p-2 rounded-lg  gap-2 ${directorTab === "Export" ? "bg-[#1A5276] text-white" : "bg-white text-[#1A5276]"}`}><span><MdDownload size={20}/></span><span>Export</span></p> */}

{directoryList.map((item)=>(
  <div key={item.name} onClick={()=>setDirectorTab(item.name)} className={`flex items-center cursor-pointer shadow-sm p-2 rounded-lg gap-2 transition-colors ${directorTab === item.name ? "bg-[#1A5276] text-white" : "bg-white text-[#1A5276]"}`}>
    <item.icon size={20}/>
    <span>{item.name}</span>
  </div>
))}

                </div>
</div>

<div className='flex flex-col lg:flex lg:flex-row  gap-5 p-5'>
  <div className=' bg-white shadow-sm p-3 rounded-lg lg:w-[70%] lg:h-110 overflow-y-auto'>
  <div className='text-sm flex justify-between items-center gap-5 bg-gray-200 p-5 rounded-lg mb-5'>
    <p>ACADEMIC PROFILE</p>
    <p>ID</p>
    <p>ATTENDENCE</p>
    <p>GPA</p>
    <p>ACTION</p>
  </div>

<div className='flex flex-col gap-10 '>
  <div className='flex justify-between items-center p-1'>
    <p className='text-lg font-bold'>Julian Sterling</p>
    <p>2023-082</p>
    <p className='border-b-2 border-[#1A5276]'>94%</p>
    <p className='bg-blue-200 p-1 rounded-md'>3.92</p>
    <p className='text-[#1A5276] hover:underline cursor-pointer'>View Profile</p>
  </div>
  <div className='flex justify-between items-center mt-5'>
    <p className='text-lg font-bold'>Elena Rodriguez</p>
    <p>2023-114</p>
    <p className='border-b-2 border-[#1A5276]'>98%</p>
    <p className='bg-blue-200 p-1 rounded-md'>4.00</p>
    <p className='text-[#1A5276] hover:underline cursor-pointer'>View Profile</p>
  </div>
  <div className='flex justify-between items-center mt-5'>
    <p className='text-lg font-bold'>Marcos Thorne</p>
    <p>2023-059</p>
    <p className='border-b-2 border-[#1A5276]'>82%</p>
    <p className='bg-gray-200 p-1 rounded-md'>3.15</p>
    <p className='text-[#1A5276] hover:underline cursor-pointer'>View Profile</p>
  </div>
  <div className='flex justify-between items-center mt-5'>
    <p className='text-lg font-bold'>Sienna Voss</p>
    <p>2023-091</p>
    <p className='border-b-2 border-[#1A5276]'>91%</p>
    <p className='bg-blue-200 p-1 rounded-md'>3.78</p>
    <p className='text-[#1A5276] hover:underline cursor-pointer'>View Profile</p>
  </div>
</div>

<div className='flex justify-between mt-5 items-center text-sm text-gray-500'>
  <div>
<p>SHOWING 1 TO 4 OF 42 RECORDS</p>
  </div>
  <div className='flex justify-between gap-10'>
    <p>Previous Archive</p>
    <p>Next Archive</p>
  </div>
</div>

</div>





<div className='lg:w-[30%]'>
    <div className='bg-[#1A5276] text-white p-6 rounded-lg flex flex-col gap-5 '>
      <p className='text-xl text-gray-300'>CLASS INSIGHTS</p>
      <div>
    <h1 className='text-3xl font-bold'>3.64</h1>
    <p>AVRAGE CLASS GPA</p>
    </div>

<div className='flex gap-10 mt-5'>


  <div >
  <h1 className='text-lg font-bold' >92%</h1>
  <p className='text-gray-300'>ATTENDANCE</p>
  </div>

  <div>
  <h1 className='text-lg font-bold'>18</h1>
  <p className='text-gray-300'>DISTINCTIONS</p>
  </div>



</div>

  </div>

{/* <div > */}
  <div className=' p-5 rounded-lg mt-5 bg-[#ded6c8]'>
  <div className='flex items-center gap-3 mb-3 text-2xl font-bold justify-center text-[#6b4604]'>
<FcIdea/>
<p>CURATOR'S NOTES</p>
</div>
<div>
  <p className='text-gray-500 text-sm text-mono'>This section provides a comprehensive overview of the students in Grade 12, showcasing their academic performance, attendance records, and overall class insights. The directory allows for easy access to individual student profiles, enabling educators and administrators to monitor progress and identify areas for support.</p>
</div>
  
{/* </div> */}
</div>


<div>
  <div className='bg-gray-300 mt-5  shadow-sm p-5 rounded-lg'>
    <h1 className='text-gray-500 text-xl font-bold mb-7'>ARCHIVAL TOOLS</h1>
    <div className='flex flex-col gap-3'>
      <h2 onClick={handleArchive} className={`bg-white text-black p-2 font-bold text-xl rounded-lg ${archive === "Bulk Records Update" ? "ring-2 ring-blue-500" : ""}`}>Bulk Records Update</h2>
      <h2 onClick={handleTwo} className={`bg-white text-black p-2 font-bold text-xl rounded-lg ${archive === "Class Transition Log" ? "ring-2 ring-blue-500" : ""}`}>Class Transition Log</h2>
      <h2 onClick={handleThree} className={`bg-white text-black p-2 font-bold text-xl rounded-lg ${archive === "ID Card Printing" ? "ring-2 ring-blue-500" : ""}`}>ID Card Printing</h2>
    </div>
  </div>
  </div>







</div>




</div>




</div>


              
            )}

            {active === "Attendance" && (
              <div>
              <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-5 lg:flex lg:flex-row justify-between  items-center'>
                <div>
                <h2 className='text-xl font-bold text-[#1A5276] mb-4'>Attendance Manegmnet</h2>
                <p className='text-gray-600'>Advanced Litterature-Room 402 .Archive ID:ALT-402-24.</p>
              </div>
              <div className='flex flex-row gap-7'>
  <div  className='flex flex-col gap-5 bg-white shadow-sm px-5 py-1 shadow-[#1a5276] border-b border-[#1a5276] rounded-lg hover:scale-105 transition-colors'>
    <p>PRESENT</p>
    <h1><span className='text-3xl text-[#1a5276] font-bold'>24</span><span>/28Students</span></h1>
  </div>
  <div className='flex flex-col gap-5 bg-white shadow-sm px-5 py-1 shadow-[#6b4604] border-b border-[#1a5276] rounded-lg hover:scale-105 transition-colors'>
    <p >ABSENT</p>
    <h1><span  className='text-3xl text-[#6b4604] font-bold'>03</span><span>Authorized</span></h1>
  </div>
  <div className='flex flex-col gap-5 bg-white shadow-sm px-6 py-2 shadow-[#b21212] border-b border-[#b21212] rounded-lg hover:scale-105 transition-colors'>
    <p>LATE</p>
    <h1><span  className='text-3xl text-[#b21212] font-bold'>01</span><span>Entry Flag</span></h1>
  </div> 
</div>
 </div>

<div className='mt-10 bg-gray-200 p-5 rounded-lg'>
  <div className='flex gap-5'>
    <div>
    <p>SESSION DATE</p>
    <div className='flex gap-3 items-center bg-white py-2 lg:py-5 px-6 lg:px-10  rounded-lg'>
      <FaRegCalendarAlt/>
      <p>Monday , Oct 23 2023</p>
    </div>
 </div>

  <div>
     <div>
    <p>COHORT SELECTION</p>
    <div className='flex gap-3 items-center bg-white py-2 lg:py-5 px-6 lg:px-10  rounded-lg'>
      <FcGraduationCap/>
      <p>Advanced Literature -Room 402</p>
    </div>
  </div>
   

  </div>
</div>

<div className='flex gap-5 mt-10'>
  <div className='bg-white p-4 flex gap-3 items-center rounded-lg border border-gray-400'>
<CgExport size={20}/>
<p>Export PDF</p>
  </div>
  <div className='bg-[#1A5276] text-white p-4 flex gap-3 items-center rounded-lg border border-gray-400'>
<FaRegSave/>
<p>Commit Records</p>
  </div>
</div>

</div>


<div className='flex flex-col gap-5 mt-10 lg:flex lg:flex-row lg:gap-10'>
<div className='mt-10 bg-white rounded-lg shadow-sm border border-gray-100 lg:w-[60%]'>


  <div>
    <div className='flex justify-between p-2 bg-gray-200'>
      <p>STUDENT ARCHIVE</p>
      <p>STUDENT REGISFRY</p>
      <p>REMARKS</p>
    </div>
  </div>

  {students.map(student => (
    <div key={student.id} className='flex justify-between items-center mt-3 px-3'>

      <div>
        <h1 className='font-bold text-lg'>{student.name}</h1>
        <p>UID:{student.uid}</p>
      </div>

      <div className='flex gap-5 mt-10 p-2'>
        {["PRESENT", "ABSENT", "LATE"].map(status => (
          <p
            key={status}
            onClick={() => updateStatus(student.id, status)}
            className={`p-2 ${
              student.status === status
                ? status === "PRESENT"
                  ? "bg-[#1A5276] text-white rounded-lg"
                  : status === "ABSENT"
                  ? "bg-[#e31e1e] text-white rounded-lg"
                  : "bg-[#6B4604] text-white rounded-lg"
                : "bg-white text-[#1A5276]"
            }`}
          >
            {status}
          </p>
        ))}
      </div>

      <CiMenuBurger />

    </div>
  ))}
</div>

<div>
<div className='bg-[#1A5276] text-white p-5 rounded-lg lg:h-70 overflow-y-auto'>
  <div>
    <h1 className='text-2xl  font-semibold'>Cusator's Notes</h1>
<div className='flex items-center gap-5 mt-5'>
  <IoIosInformationCircleOutline size={30}/>
  <p className='text-medium'>Session forcus:Victorian Era symbolism in Gothic Architecture.Quiz scheduled for tomorrow.</p>
</div>
<hr className='mt-10  '/>

<div className='mt-5'>
  <p className='text-gray-400'>ASSINGED INSTRUCTOR</p>
  <p>DR.Alistair Thorne</p>
</div>
  </div>
</div>

<div className='bg-gray-200  p-3 rounded-lg mt-10 lg:h-30'>
  <div>
    <div className='flex justify-around text-xl font-semibold'>
    <h1>CLASS VITALS</h1>
    <p>7 Day Trend</p>
    </div>
    <div className='px-5'>
      <p><span className='text-[#16689b] font-bold'>92% Average</span> conssistency this week. Attendance is slightly higher than department average</p>
    </div>
  </div>
</div>



</div>


</div>


<div className='mt-10'>
  <h1 className='text-center text-[#1A5276]'>VEIW ALL 28 STUDENTS</h1>
</div>


             
              </div>
            )}

            {active === "Grades" && (
              <div>
              <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
                <div>
                <h2 className='text-xl font-bold text-[#1A5276] mb-4'>Grades</h2>
                <p className='text-gray-600'>Here you can find all the grade records in the academic archive.</p>
                </div>



              </div>
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
// import React from 'react'

// const page = () => {

// function handleClick(){
//   console.log("add Click");
  
// }



//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default page
