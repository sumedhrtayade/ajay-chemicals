import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white header-shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center font-bold">AC</div>
          <div>
            <div className="font-extrabold text-lg">Ajay Chemicals</div>
            <div className="text-xs opacity-90">Global Supply · Manufacturing · Logistics</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>isActive?'underline font-semibold':'hover:underline'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'underline font-semibold':'hover:underline'}>About</NavLink>
          <NavLink to="/products" className={({isActive})=>isActive?'underline font-semibold':'hover:underline'}>Products</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'underline font-semibold':'hover:underline'}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <input aria-label="Search" placeholder="Search products or HS code" className="hidden md:block px-3 py-2 rounded-full bg-white/20 placeholder-white text-white"/>
          <button className="btn-primary hidden md:inline">Enquire Now</button>
        </div>
      </div>
    </header>
  )
}
