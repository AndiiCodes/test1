// import React from 'react'

// export default function Contact() {
//   return (
//     <div>
//     <section className="bg-gray-100">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-1/2 md:w-2/3 mx-auto">
//           <h1 className="text-3xl font-medium text-center mb-10">Get in touch</h1>
//           <form className="flex flex-wrap -m-2">
//             <div className="p-2 w-1/2">
//               <input
//                 className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 type="text"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//             <div className="p-2 w-1/2">
//               <input
//                 className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 type="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="p-2 w-full">
//               <textarea
//                 className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out h-48"
//                 placeholder="Message"
//                 required
//               ></textarea>
//             </div>
//             <div className="p-2 w-full">
//               <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Submit
//               </button>
//             </div>
//           </form>
//           <p className="text-xs text-gray-500 mt-3 text-center">
//             Based on <a className="text-indigo-500 underline" href="http://redcollar.digital/contacts/" target="_blank" rel="noopener noreferrer">Red Collar Contact Form</a>
//           </p>
//         </div>
//       </div>
//     </section>

//     </div>
//   )
// }


import React from "react";
import { useState } from "react";


function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  return (
    <div className="sm:px-20 px-5 mt-[10px]">

<section className="">
  <div className=" sm:py-24  sm:mx-auto   flex flex-wrap">
  <div className="lg:w-1/2 w-full mb-0 md:mb-0">
  <img src="https://i.ibb.co/GdjGqS9/p.jpg" alt="Contact" className="w-full h-full object-cover object-center" />
</div>
    <div className="lg:w-1/2  bg-white  p-8 flex flex-col justify-center">
      <h1 className="text-3xl font-medium font-['poppins'] mb-10">Get in touch 📥</h1>
      <form className="flex flex-wrap -m-2" action="https://formspree.io/f/xeqwgnvr" method="POST">
        <div className="p-2 w-full md:w-1/2">
        <input
  className="w-full bg-gray-100 rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  type="text"
  placeholder="Name"
  name="name"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        </div>
        <div className="p-2 w-full md:w-1/2">
        <input
  className="w-full bg-gray-100 rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
  type="email"
  placeholder="Email"
  required
  email="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        </div>
        <div className="p-2 w-full">
            <textarea
    className="w-full bg-gray-100 rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out h-48 red-asterisk"
    placeholder="Message "
    
    required
    message="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    
    ></textarea>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-[#031421] border-0 py-2 px-8 focus:outline-none hover:bg-[#0e283c] rounded text-lg">
            Submit ✅
          </button>
          <p className="font-sans mt-[50px] text-center">Lazy to fill a form? Message me directly</p>
          <div className="flex items-center mb-4 md:mb-0 md:mr-4 justify-center mt-[20px] ">
  <svg className="fill-current text-green-500 w-6 h-6 mr-2" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"/></svg>
    <a href="https://wa.me/+9647508966996" class="underline font-medium">+964 750 896 6996</a>
  </div>

  
  <div className="flex items-center mb-4 md:mb-0 md:mr-4 justify-center mt-[10px]">
  <svg className="fill-current text-blue-500 w-6 h-6 mr-2" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
    <a href="https://t.me/+9647508966996" class="underline font-medium">+964 750 896 6996</a>
  </div>

        </div>
      </form>
      
    </div>
  </div>
</section>

    </div>
  );
}

export default ContactForm;
