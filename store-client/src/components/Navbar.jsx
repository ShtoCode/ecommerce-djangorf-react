import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import DropdownLinks from './DropdownLinks';
import { BiSolidSearch } from 'react-icons/bi';
import axios from 'axios'


const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [categories, setCategories] = useState([])

  const handleSearch = async (event) => {
    event.preventDefault();
  }

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:8000/api/category/all')
      setCategories(response.data)
    }
    fetchCategories()
  })

  return (
    <nav className="flex justify-between items-center bg-[#004943] pb-2 pt-2 mt-0">
      <div className='flex order-1'>
        <Link to="/" className="flex items-center">
          <img src="/images/Logo.jpg" className="h-8 mr-3 sm:w-40 " />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white sm:hidden md:hidden lg:inline">Tienda de muebles</span>
        </Link>

      </div>

      <div className="flex order-3 items-center">
        <div className="sm:hidden md:inline">
          <button
            onClick={toggleSideBar}
            className="ml-3 rounded-lg px-3 py-2 bg-secondary-rgb text-white font-medium hover:bg-secondary-700 transition duration-300 lg:hidden md:inline sm:inline"
          >
            {isSidebarOpen ? 'Ocultar Menú' : 'Mostrar Menú'}
          </button>
        </div>
        <div className={`lg:flex ${isSidebarOpen ? 'sm:block md:block' : 'sm:hidden md:hidden'} `}>
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-white font-medium hover:bg-secondary-rgb hover:text-white transition duration-1000"
          >
            Inicio
          </Link>
          <DropdownLinks title="Productos" links={[
            {
              title: 'Todos los Productos',
              to: '/productos'
            },
            ...categories.map((category) => ({
              title: category.name,
              to: '/productos/' + category.name,
            }))

          ]} />
          <Link
            to="/contacto"
            className="rounded-lg px-3 py-2 text-white font-medium hover:bg-secondary-rgb hover:text-white transition duration-1000"
          >
            Contacto
          </Link>
        </div>
      </div>
      <div className="flex order-2 flex-grow justify-center ml-5">
        <form onSubmit={handleSearch} className="flex items-center ml-36">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="rounded-lg px-3 py-2 text-white bg-gray-800 w-96 border-2 border-[#09682A] border-solid sm:w-64 "
            placeholder='Busca un producto'
          />
          <button type="submit" className="flex rounded-lg px-3 py-2 ml-1 bg-[#2B837F] text-white font-medium hover:bg-secondary-rgb transition duration-300 sm:w-24">
            <span className='ml-1 mt-1'><BiSolidSearch /></span> Buscar
          </button>
        </form>
      </div>

    </nav>
  )
}

export default Navbar
