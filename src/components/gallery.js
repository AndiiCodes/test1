import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useEffect } from 'react';
import TypeIt from 'typeit-react';






export default function Gallery() {
  
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <div className='sm:mt-[2rem] mt-[7rem]'>
    <span className='flex justify-center py-[2rem] sm:text-3xl sm:m-[4rem] text-xl '>
  
    
    
  
      <TypeIt
      className="text-white text-lg sm:text-xl 2xl:text-4xl 2xl:mt-[5rem]"
  options={{
    speed: 100,
    waitUntilVisible: true,
    
  }}
  getBeforeInit={(instance) => {
    instance.type("Some Of the Pciturse").pause(800).delete(8).pause(500).type("Pictures i Have Taken📸!");
    // Remember to return it!
    return instance;
  }}
/>
    </span>
    <div className=''>

    <div className='sm:flex sm:justify-center
    sm:flex-row
    sm:flex-wrap
    sm:flex-[0 50%]
    grow
    flex
    flex-col
    justify-center
    items-center
    sm:gap-[.5rem]
    px-1
    gap-[1rem]
    sm:px-[.2rem]
    gallery-image-container
     '>
  
      
        <img className='sm:w-[40%] md:w-[40%] w-[80%] ' data-aos="fade-up-right" data-aos-offset="50"  loading='lazy' src="https://i.ibb.co/GdjGqS9/p.jpg" alt="" />
        <img className='sm:w-[40%] md:w-[40%] w-[80%]  ' data-aos="fade-up-left" data-aos-offset="100"  loading='lazy' src="https://i.ibb.co/GdjGqS9/p.jpg" alt="" />
        <img className='sm:w-[40%] md:w-[40%] w-[80%]  ' data-aos="fade-up-right" data-aos-offset="100"  loading='lazy' src="https://i.ibb.co/GdjGqS9/p.jpg" alt="" />
        <img className='sm:w-[40%] md:w-[40%] w-[80%]  ' data-aos="fade-up-left" data-aos-offset="100"  loading='lazy' src="https://i.ibb.co/GdjGqS9/p.jpg" alt="" />
        
        
        
        

       
        

        <div className='flex justify-center items-center py-[20px] w-[100%]  '>

      <Link to={"/gallery"}>
      <Button onClick={scrollToTop} className='btn 2xl:text-[5rem] 2xl:w-[10rem] 2xl:h-[4rem] '>
      <span className='2xl:text-2xl'>
  
      View More
      </span>
    </Button>
      </Link>
        </div>
        
    </div>
    </div>


    </div>
  )
}
