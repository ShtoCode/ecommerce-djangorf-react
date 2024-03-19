import React from 'react'
import { FaFire } from 'react-icons/fa'
import CardProduct from '../products/CardProduct'
import axios from 'axios'
import { useState, useEffect } from 'react'




const TopSells = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = 'http://localhost:8000/api/furniture/all';


        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className='ml-5'>
      <div className='flex align-middle'>
        <h2 className=''>
         PRODUCTOS EN STOCK 
        </h2>
        <span className='ml-4 mt-1 mb-2'><FaFire /></span>
      </div>

  <div className='flex flex-row mt-4 ml-2 p-5'>
  {products.map((product) => (
    <CardProduct key={product.id} product={product} />
  ))}
  </div>
    </div>
  )
}

export default TopSells
