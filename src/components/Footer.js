import React from 'react'
import "../index.css";

export default function Footer() {
  return (
    <div className='h-[50%] sm:h-[65%] con'>
      <footer class="p-4 bg-[#061a29] shadow text-center md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 flex-1">
      <div className='flex flex-col items-center'>

        <span class="text-sm    text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://manoo-g.com/" class="hover:underline">ManooGawra</a>. All Rights Reserved. 
        
        </span>
        
        <p className='flex items-center justify-center sm:justify-start  text-white bg-[#172d3e]'>
        
  <span className=''>Made With</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-[15px] mx-[5px] ">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
  <a href="https://andiicodes.com" className='font-["poppins"] underline'>by AndiiCodes</a>
</p>

      </div>



        
        
      </footer>
    </div>
  )
}



