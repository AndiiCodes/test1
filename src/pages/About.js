import React from 'react'

export default function About() {
  return (
    <div className='mt-[6rem] sm:px-[10%] px-[5%]'>
    <div className='md:flex md:justify-center block'>
      <div className='max-w-fit'>
        <img
          src="https://i.ibb.co/SfBpvqf/IMG-6755.jpg" 
          className='sm:w-fit w-[70%] mx-auto '
          alt=""
        />
      </div>
      <div className='flex flex-col sm:px-[8rem] md:px-[2rem] px-[10%] w-full'>
        <h1 className='text-white font-medium sm:text-[2rem] md:text-4xl text-3xl py-[2rem] font-["poppins"] text-justify'>Hi there!</h1>
        <span className='text-white sm:text-2xl md:text-xl text-lg font-light font-["poppins"]'>

        <p>My name is  <strong>Manoo</strong>, and I am a skilled graphic designer with over 7 years of experience working with Adobe Illustrator and Photoshop. I have a wealth of knowledge when it comes to creating beautiful and effective designs for my clients.

In addition to my design work, I am also an avid photographer. I am passionate about capturing the world around me through my camera lens, and I love to experiment with different styles and techniques to create unique and stunning images.
</p>
<p className='mt-4'>I am so grateful that you have taken the time to visit my website or social media platform. If you have any questions about my work, or if you are interested in connecting with me to discuss a potential project or collaboration, please do not hesitate to reach out. I am always happy to chat and answer any questions you may have. Thank you again for your interest, and I look forward to hearing from you soon!</p>
        </span>
      </div>
      
    </div>
    <div className='mt-[3rem] sm:px-[0%] px-[10%]'>

    <h1 className='text-white font-medium sm:text-6xl md:text-4xl text-3xl py-[2rem] font-poppins text-justify'>Hi there!</h1>
        <p className='text-white sm:text-2xl md:text-xl text-lg font-light font-poppins'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Molestias iste voluptatum similique iusto harum, <br /> temporibus necessitatibus sequi dolor incidunt laudantium!</p>
    </div>
  </div>
  
  

  )
}
