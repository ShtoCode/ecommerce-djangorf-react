import { Link } from 'react-router-dom'

const CardProduct = ({ product }) => {
  return (
    <div key={product.id} className='w-[300px] mt-3'>
      <Link to={`/productos/detail/${product.id}`} className='block'>
        <div className='bg-gray-100 p-4 ml-5 border border-gray-300 transition-transform transform-gpu hover:scale-105 hover:shadow-lg duration-500 hover:bg-gray-200'>
          <h2 className='text-lg font-bold text-gray-800 mb-2 uppercase scale-reset-on-hover'>{product.name}</h2>
          <p className='text-gray-600 mb-2 scale-reset-on-hover'>Precio: ${product.price}</p>
          <div className='scale-reset-on-hover'>
            <img src={`http://localhost:8000${product.images[0].image}`} alt={`Product ${product.name}`} />
          </div>
          <button className='bg-tertiary-rgb text-white p-2 mt-3 ml-12 border-rounded transition ease-in-out hover:bg-secondary-rgb duration-500 scale-reset-on-hover'>Agregar al carrito</button>
        </div>
      </Link>
    </div>
  );
}

export default CardProduct