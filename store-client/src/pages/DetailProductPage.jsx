import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import axios from 'axios'

import { Carousel, IconButton } from '@material-tailwind/react'

const DetailProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const API = "http://localhost:8000"

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API}/api/furniture/${id}`)
        setProduct(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    fetchProduct()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {product.images.map(img => (
            <img className="h-full w-full object-cover" key={img.id} src={`${API}/${img.image}`} alt={`Product ${product.name}`} />
          ))}
        </Carousel>
        <div className="w-1/2 pl-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
          <p className="text-gray-600 mb-4">Dimensiones: {product.dimensions}</p>
          <p className="text-gray-600 mb-4">Color: {product.color}</p>
          <p className="text-gray-600 mb-4">Marca: {product.brand}</p>
          <p className="text-gray-600 mb-4">Categoria: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage
