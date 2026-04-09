import React from 'react'

const Directory = () => {
  return (
    <div>
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
        

<div>asc</div>



    </div>
  )
}

export default Directory
