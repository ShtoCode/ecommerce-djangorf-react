import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = props => {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <h2 className='font-bold text-slate-800'>Oops, parece que te has perdido!</h2>
      <span className='font-light'>La ruta que has ingresado no existe :(</span>
      <br />
      <Link className='bg-tertiary-rgb p-4 mt-5 text-white hover:bg-secondary-rgb hover:text-white transition duration-700' to="/">Volver al inicio</Link>
    </div>
  )
}


export default NotFoundPage
