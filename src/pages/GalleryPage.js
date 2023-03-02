// import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const ImagePopup = ({ images, selectedImage, onClose }) => {
//   const [currentIndex, setCurrentIndex] = useState(
//     images.findIndex((image) => image === selectedImage)
//   );

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const image = images[currentIndex];

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       <img src={image.src} alt="" className="w-full h-full object-contain" />
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2"
//       >
//        <FontAwesomeIcon className="left-arrow" icon={faArrowLeft} />
        
          
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2"
//       >
//         <FontAwesomeIcon icon={faArrowRight} />

//       </button>
//     </div>
//   );
// };

// const Gallery = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {images.map((image, index) => (
//         <div key={index}>
//           <img
//             src={image.src}
//             alt=""
//             className="wh-40 h-full object-cover rounded-lg cursor-pointer hover:opacity-75"
// onClick={() => handleImageClick(image)}
// />
// </div>
// ))}
// {selectedImage && (
// <div className="fixed inset-0 z-10 flex items-center justify-center">
// <div
//          className="fixed inset-0 bg-gray-900 opacity-75"
//          onClick={handleCloseImage}
//        ></div>
// <div className="relative z-10">
// <ImagePopup
//            images={images}
//            selectedImage={selectedImage}
//            onClose={handleCloseImage}
//          />
// </div>
// </div>
// )}
// </div>
// );
// };

// export default Gallery;

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const ImagePopup = ({ images, selectedImage, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((image) => image === selectedImage)
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const image = images[currentIndex];
  const topRef = useRef(null);

  function handleScrollToTop() {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg flex justify-center items-center">
     <AnimatePresence>
   
  
      <div className="relative bg-white  shadow-lg overflow-hidden">
      <motion.img
      key={image.src}
      src={image.src}
      initial={{ opacity: 0.7, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full object-contain  imgss"
    />
      </div>
      </AnimatePresence>
      <div className="absolute top-5 left-[50px] text-xl text-white font-['poppins'] font-bold">
        {currentIndex + 1}/{images.length}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4  text-white p-2 "
      >
        <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

      </button>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 transition-all duration-500 ease-in-out hover:text-gray-900"
      >
        <svg className="left-arrow2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-500 ease-in-out hover:text-gray-900"
      >
        <svg className="right-arrow2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

      </button>
    </div>
  );
};

// const GalleryPage = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseImage = () => {
//     setSelectedImage(null);
//   };

//   return (

//     <div className="flex flex-col items-center justify-center">
//   <h1 className="text-4xl font-bold mb-8 text-white">Gallery</h1>
//   <h1 className="text-4xl font-bold mb-8 text-white mt-10">Burger King</h1>
//   <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 px-[20px]">
//     {images.map((image, index) => (
//       <div key={index}>
//         <img
//           src={image.src}
//           alt=""
//           className="w-full h-full object-cover cursor-pointer hover:opacity-75"
//           onClick={() => handleImageClick(image)}
//         />
//       </div>
//     ))}
//     {selectedImage && (
//       <div className="fixed inset-0 z-10 flex items-center justify-center">
//         <div
//           className="fixed inset-0 bg-gray-900 opacity-75"
//           onClick={handleCloseImage}
//         ></div>
//         <div className="relative z-10">
//           <ImagePopup
//             images={images}
//             selectedImage={selectedImage}
//             onClose={handleCloseImage}
//           />
//         </div>
//       </div>
//     )}
//   </div>


//   <h1 className="text-4xl font-bold mb-8 text-white mt-20">Burger King</h1>
//   <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 px-[20px] mt-20">

//     {images.map((image, index) => (
//       <div key={index}>
//         <img
//           src={image.src}
//           alt=""
//           className="w-full h-full object-cover cursor-pointer hover:opacity-75"
//           onClick={() => handleImageClick(image)}
//         />
//       </div>
//     ))}
//     {selectedImage && (
//       <div className="fixed inset-0 z-10 flex items-center justify-center">
//         <div
//           className="fixed inset-0 bg-gray-900 opacity-75"
//           onClick={handleCloseImage}
//         ></div>
//         <div className="relative z-10">
//           <ImagePopup
//             images={images}
//             selectedImage={selectedImage}
//             onClose={handleCloseImage}
//           />
//         </div>
//       </div>
//     )}
//   </div>
// </div>




//     );
//   };

// export default GalleryPage;

const GalleryPage = ({ images, restaurant }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold font-['poppins'] mb-8 text-white mt-10">{restaurant}</h1>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 px-[20px]">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover cursor-pointer hover:opacity-75"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
        {selectedImage && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div
              className="fixed inset-0 bg-gray-900 opacity-75"
              onClick={handleCloseImage}
            ></div>
            <div className="relative z-10">
              <ImagePopup
                images={images}
                selectedImage={selectedImage}
                onClose={handleCloseImage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
