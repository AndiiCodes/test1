import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Contact from "./pages/Contact"
import Links from "./pages/Links"
import Header from "./components/Header"
import Home from "./pages/home";
import Error from "./pages/Error";
import About from "./pages/About";
import Footer from "./components/Footer"
import GalleryPage from "./pages/GalleryPage";



export default function App() {
  

  const Pica = [
    
    {
      src: 'https://i.ibb.co/NrTf5dd/img-2-min.jpg',
      alt: 'img2'
    },
    {
      src: 'https://i.ibb.co/cC5t7VG/img-3-min.jpg',
      alt: 'img3'
    },
    {
      src: 'https://i.ibb.co/sg4yzBy/img-4-min.jpg',
      alt: 'img4'
    },
    {
      src: 'https://i.ibb.co/RS5LjB3/img-5-min.jpg',
      alt: 'img5'
    },
    {
      src: 'https://i.ibb.co/DwMFNCB/img-6-min.jpg',
      alt: 'img6'
    },
    {
      src: 'https://i.ibb.co/RcHpxTz/img-7-min.jpg',
      alt: 'img7'
    },
    {
      src: 'https://i.ibb.co/M5dZmrx/img-8-min.jpg',
      alt: 'img8'
    },
    // {
    //   src: 'https://i.ibb.co/bXFxFCF/img-9-min.jpg',
    //   alt: 'it'
    // },
    // {
    //   src: 'https://i.ibb.co/MkX91wb/img-10-min.jpg',
    //   alt: 'itl'
    // },
    {
      src: 'https://i.ibb.co/4RgGLFD/img-11-min.jpg',
      alt: 'img11'
    },
    {
      src: 'https://i.ibb.co/Y8rXqQp/img-12-min.jpg',
      alt: 'img12'
    },
    // {
    //   src: 'https://i.ibb.co/wC4bwV0/img-13-min.jpg',
    //   alt: 'itl'
    // },
    // {
    //   src: 'https://i.ibb.co/z63vnbW/img-14-min.jpg',
    //   alt: 'img14'
    // },
    // {
    //   src: 'https://i.ibb.co/KxrGvtD/img-15-min.jpg',
    //   alt: 'img15'
    // },
    // {
    //   src: 'https://i.ibb.co/xDWfJPM/img-16-min.jpg',
    //   alt: 'img16'
    // },
    // {
    //   src: 'https://i.ibb.co/xjVq61v/img-17-min.jpg',
    //   alt: 'img17'
    // },
    // {
    //   src: 'https://i.ibb.co/tzLvTb0/img-18-min.jpg',
    //   alt: 'img18'
    // },
    // {
    //   src: 'https://i.ibb.co/RPdwm8s/img-19-min.jpg',
    //   alt: 'img19'
    // },
    // {
    //   src: 'https://i.ibb.co/2YvmcW5/img-20-min.jpg',
    //   alt: 'img20'
    // },
    // {
    //   src: 'https://i.ibb.co/m9rm2pw/img-21-min.jpg',
    //   alt: 'img21'
    // },
    // {
    //   src: 'https://i.ibb.co/7V2wfvW/img-22-min.jpg',
    //   alt: 'img22'
    // },
    // {
    //   src: 'https://i.ibb.co/LZkxgbh/img-23-min.jpg',
    //   alt: 'img23'
    // },
    // {
    //   src: 'https://i.ibb.co/3BSJtHg/img-24-min.jpg',
    //   alt: 'Baked',
    // },
    
      {
        src: 'https://i.ibb.co/YPqTSVd/img-25-min.jpg',
        alt: 'img1',
      },
      // {
      //   src: 'https://i.ibb.co/BZHQNjg/img-26-min.jpg',
      //   alt: '?',
      // },
      // {
      //   src: 'https://i.ibb.co/X7khddv/img-27-min.jpg',
      //   alt: 'it',
      // },
      // {
      //   src: 'https://i.ibb.co/hDCbDS6/img-28-min.jpg',
      //   alt: 'it',
      // },
      // {
      //   src: 'https://i.ibb.co/rb59zWs/img-29-min.jpg',
      //   alt: 'it',
      // },
      // {
      //   src: 'https://i.ibb.co/g6MgF5r/img-30-min.jpg',
      //   alt: 'it',
      // },
      // {
      //   src: 'https://i.ibb.co/qjX3smZ/img-31-min.png',
      //   alt: 'it',
      // },
      {
        src: 'https://i.ibb.co/2PYXszC/img-32.jpg',
        alt: 'img8',
      },
      // {
      //   src: 'https://i.ibb.co/N1Y1wrP/img-33.png',
      //   alt: 'it',
      // },
      // {
      //   src: 'https://i.ibb.co/Ky0W7Yw/img-34.jpg',
      //   alt: 'itln',
      // },
      {
        src: 'https://i.ibb.co/fpVg89d/img-35.jpg',
        alt: 'img11',
      },
      // {
      //   src: 'https://i.ibb.co/1d3ZCG2/img-36.jpg',
      //   alt: 'itln',
      // },
      {
        src: 'https://i.ibb.co/d5jSwrV/img-37.jpg',
        alt: 'pic',
      },
      
    
    
  ];

 
  
  const ItalianTaste = [
    {
      src: 'https://i.ibb.co/kHXXKp2/img-1-min.jpg',
      alt: 'it'
    },
   {
        src: 'https://i.ibb.co/rQvfPvb/img-38.jpg',
        alt: 'it',
      },
      {
        src: 'https://i.ibb.co/Dt2HhBZ/img-39.jpg',
        alt: 'itln',
      },
      {
        src: 'https://i.ibb.co/BZHQNjg/img-26-min.jpg',
        alt: '?',
      },
      {
        src: 'https://i.ibb.co/X7khddv/img-27-min.jpg',
        alt: 'it',
      },
      {
        src: 'https://i.ibb.co/hDCbDS6/img-28-min.jpg',
        alt: 'it',
      },
      {
        src: 'https://i.ibb.co/rb59zWs/img-29-min.jpg',
        alt: 'it',
      },
      {
        src: 'https://i.ibb.co/g6MgF5r/img-30-min.jpg',
        alt: 'it',
      },
      {
        src: 'https://i.ibb.co/qjX3smZ/img-31-min.png',
        alt: 'it',
      },
{
        src: 'https://i.ibb.co/N1Y1wrP/img-33.png',
        alt: 'it',
      },
      {
        src: 'https://i.ibb.co/Ky0W7Yw/img-34.jpg',
        alt: 'itln',
      },
{
        src: 'https://i.ibb.co/1d3ZCG2/img-36.jpg',
        alt: 'itln',
      },
  ];

  const Baked=[
    {
      src: 'https://i.ibb.co/wC4bwV0/img-13-min.jpg',
      alt: 'itl'
    },
    {
      src: 'https://i.ibb.co/z63vnbW/img-14-min.jpg',
      alt: 'img14'
    },
    {
      src: 'https://i.ibb.co/KxrGvtD/img-15-min.jpg',
      alt: 'img15'
    },
    {
      src: 'https://i.ibb.co/xDWfJPM/img-16-min.jpg',
      alt: 'img16'
    },
    {
      src: 'https://i.ibb.co/xjVq61v/img-17-min.jpg',
      alt: 'img17'
    },
    {
      src: 'https://i.ibb.co/tzLvTb0/img-18-min.jpg',
      alt: 'img18'
    },
    {
      src: 'https://i.ibb.co/RPdwm8s/img-19-min.jpg',
      alt: 'img19'
    },
    {
      src: 'https://i.ibb.co/2YvmcW5/img-20-min.jpg',
      alt: 'img20'
    },
    {
      src: 'https://i.ibb.co/m9rm2pw/img-21-min.jpg',
      alt: 'img21'
    },
    {
      src: 'https://i.ibb.co/7V2wfvW/img-22-min.jpg',
      alt: 'img22'
    },
    {
      src: 'https://i.ibb.co/LZkxgbh/img-23-min.jpg',
      alt: 'img23'
    },
    {
      src: 'https://i.ibb.co/3BSJtHg/img-24-min.jpg',
      alt: 'Baked',
    },
  ];
  
  return (
    <>
      
    <Router>
    <Header />
      <Routes>
      <Route path="/" exact  element={<Home />} ></Route>
      <Route path="/contact" exact  element={<Contact />}></Route>
      <Route path="/about" exact  element={<About />}></Route>
      <Route path="/links" exact  element={<Links />}></Route>
      <Route
            path="/gallery"
            exact
            element={
              <>
              <span className="">
                
                  <h1 className="text-4xl font-bold mb-2 text-center sm:text-left sm:ml-[50px] mt-[50px]  text-white">Gallery 🖼</h1>
                  <p className="text-xl font-light mb-8 text-center sm:text-left sm:ml-[50px] text-white">Lorem ipsum dolor sit amet consectetur.</p>
              </span>
                <GalleryPage images={Pica} restaurant="🥘 Piccadilly" />
                <GalleryPage images={ItalianTaste} restaurant="🇮🇹 Italian Taste" />
                <GalleryPage images={Baked} restaurant="👨‍🍳 Baked" />
                
              </>
            }
          />
      
      <Route path="/*" exact  element={<Error />}></Route>
      
      </Routes>
      <Footer />
    </Router>

    


    </>
  )
}