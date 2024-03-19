import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardProduct from '../components/products/CardProduct';
import axios from 'axios';


const ProductsPage = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = 'http://localhost:8000/api/furniture/all';

        if (category) {
          apiUrl = `http://localhost:8000/api/category/furniture/${category}`;
        }

        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

return (
  <div className='bg-[#f3f3f3] h-screen p-3'>
    <h2 className='mt-4 ml-5 text-2xl text-green-800 font-bold'>{category ? `Productos de ${category.toLocaleUpperCase()}` : 'Todos los productos'}</h2>
    <hr className='mt-3' />
  <div className='flex flex-row mt-4 ml-2 p-5'>
  {products.map((product) => (
    <CardProduct key={product.id} product={product} />
  ))}
  </div>
</div>
);
};

export default ProductsPage;
