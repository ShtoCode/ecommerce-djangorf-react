import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { TbShoppingBag } from 'react-icons/tb'

const Carousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);


  const images = [
    {
      src: '/images/mueble1.jpg',
      title: 'Biblioteca.',
      description: 'Mesas de estudio, estanterías, sillas y más.'
    },
    {
      src: '/images/mueble2.jpg',
      title: 'Dormitorio.',
      description: 'Camas, veladores, colchones, closet y más.'
    },
    {
      src: '/images/mueble3.jpg',
      title: 'Baños.',
      description: 'Lavamanos, espejos, botiquines y más.'
    },
    {
      src: '/images/mueble4.jpg',
      title: 'Living y sala de estar.',
      description: 'Sillones, mesas de centro, televisores y más'
    },
    {
      src: '/images/mueble5.jpg',
      title: 'Comedor',
      description: 'Comedores, sillas, individuales, vasos y más.'
    },

  ];



  return (
    <div className="carousel mt-5 w-full">
      <div className='flex align-middle'>
        <h2 className='ml-5 text-black '>NUESTRO CATALOGO DE VENTAS</h2>
        <span className='ml-4 mt-1'><TbShoppingBag /></span>
      </div>
      <hr className='border-orange my-4' />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`card ${index === currentSlide ? 'active' : ''} p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 relative`}
          >
            <div className="aspect-w-4 aspect-h-3 h-full">
              <img src={image.src} alt={image.title} className="object-cover w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white p-4 opacity-70 transition-opacity duration-300 hover:opacity-100">
              <div className="bg-black bg-opacity-75 rounded-lg p-4 w-full text-center">
                <h3 className="text-white text-xl sm:text-lg lg:text-xl">{image.title}</h3>
                <p className="text-zinc-300 text-md sm:text-sm lg:text-base">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-orange my-4' />
    </div>
  );

};
export default Carousel
