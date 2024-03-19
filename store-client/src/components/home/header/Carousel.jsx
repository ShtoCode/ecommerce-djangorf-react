import React, { useState, useEffect } from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Carousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('http://localhost:8000/api/category/all')
      setImages(response.data)
    }
    fetchImages()

  }, [])

  console.log(images)



  return (
    <div className="carousel mt-5 ml-3 mr-3 w-full">
      <div className='flex align-middle'>
        <h2 className='ml-5 text-black '>NUESTRO CATALOGO DE VENTAS</h2>
        <span className='ml-4 mt-1'><TbShoppingBag /></span>
      </div>
      <hr className='border-orange my-4' />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
        {images.map((image, index) => (
          <Link className='p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 relative' to={`/productos/${image.name}`} key={index}>
            <div
              key={index}
              className={`card ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="aspect-w-4 aspect-h-3 h-full">
                <img src={`http://localhost:8000${image.image}`} alt={image.title} className="object-cover w-full h-[400px]" />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white p-4 opacity-70 transition-opacity duration-300 hover:opacity-100">
                <div className="bg-black bg-opacity-75 rounded-lg p-4 w-full text-center">
                  <h3 className="text-white text-xl sm:text-lg lg:text-xl">{image.name}</h3>
                  <p className="text-zinc-300 text-md sm:text-sm lg:text-base">{image.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <hr className='border-orange my-4' />
    </div>
  );

};
export default Carousel
