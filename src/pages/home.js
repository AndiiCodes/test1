// import React from 'react'

// import Gallery from '../components/gallery';

// export default function Home() {
//   return (
//     <div className="px-10 pt-[6rem] md:pt-[2rem] ">
//     <div className="relative ">
//     <span className='flex justify-center 2xl:flex 2xl:justify-center lg:block '>
      
//         <img className='w-[33rem] h-auto sm:h-auto lg:w-2/4 ' data-aos="zoom-out-up" data-aos-offset="250" src="https://i.ibb.co/GdjGqS9/p.jpg" alt=''/>
        
//     </span>
    

//         <h1 className="lg:relative sm:flex sm:justify-center 
//          lg:text-[3.5rem] t  sm:text-4xl  text-white lg:bottom-[30rem]
//           lg:left-[10%]
//           xl:bottom-[35rem]
//           xl:left-[10%]  
//           left-24 
//           lg:py-0
//           font-bold
//           py-8
//           text-center
//           text-3xl
//           lg:leading-[3rem]
//           2xl:flex
          
        
          
          
          
          
//            ">
//            <span className='2xl:block'>

//             Photography <br className='hidden lg:block' /> helps people <br className='md:hidden lg:block' /> to see.
//            </span>
            
            
//             </h1>
            
    
      
//     </div>
//     <span className=''>

//     <p className='text-white
    
//     xl:text-xl
    
//     xl:relative xl:left-[40rem] font-os xl:-top-[30rem]
//     lg:relative lg:left-[30rem]  lg:-top-[25rem] 
//     sm:block
//     lg:text-justify
//     sm:relative
//     sm:text-center
//     text-center
//     sm:left-auto
//     font-light
//     break-words

//     '>
//             From inspiring people's stories to impoctful messages,
//             <br className='hidden md:block' /> I create head-turning photograph that does the 
//             <br className='hidden md:block'/> right thing, in the right ploce. at the right
//             <br className='hidden md:block'/> time to unlock the possibilty
//             </p>
//     </span>
//     <Gallery />
    
// </div>
//   )
// }





import React from 'react'
import Gallery from '../components/gallery';

export default function Home() {
  return (
    <div className="px-10 pt-[6rem] md:pt-[2rem]">
      <div className="relative">
        <span className="flex justify-center 2xl:flex 2xl:justify-center lg:block">
          <img
            className="w-[33rem] h-full sm:h-auto lg:w-2/4"
            data-aos="zoom-out-up"
            data-aos-offset="250"
            src="https://i.ibb.co/GdjGqS9/p.jpg"
            alt=""
          />
        </span>
        <h1
          className="lg:relative text-white sm:flex sm:justify-center lg:text-[3.5rem] lg:bottom-[30rem] lg:left-[10%] xl:bottom-[35rem] xl:left-[10%] left-24 lg:py-0 font-bold py-8 text-center text-3xl lg:leading-[3rem] 2xl:static 2xl:text-7xl 2xl:mt-[2rem]"
        >
          <span>
            Photography
            <br className="hidden lg:block" />
            helps people
            <br className="md:hidden lg:block" />
            to see.
          </span>
        </h1>
        <span>
          <p className="text-white xl:text-xl xl:relative xl:left-[40rem] font-['os'] xl:-top-[30rem] lg:relative lg:left-[30rem] lg:-top-[25rem] sm:block lg:text-justify sm:relative sm:text-center text-center sm:left-auto font-light break-words 2xl:static 2xl:text-center 2xl:mt-[5rem] 2xl:text-3xl">
            From inspiring people's stories to impactful messages,
            <br className="hidden md:block" />
            I create head-turning photographs that do the
            <br className="hidden md:block" />
            right thing, in the right place, at the right
            <br className="hidden md:block" />
            time to unlock the possibility.
          </p>
        </span>
      </div>
      <Gallery />
    </div>
  )
}
