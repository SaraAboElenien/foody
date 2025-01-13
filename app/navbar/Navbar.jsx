"use client"


import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../assets/images/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png'
import '../navbar/Navbar.css'
import { Menu, Search, ShoppingCart, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className={`navbar navbar-expand-lg  customNavbar`}>
      <div className="container">

        {/* Toggle Button */}
        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <Menu className="text-white" />
        </button>

        {/* Logo */}
        <Link href="/home" className="navbar-brand mx-auto mx-lg-0">
          <div className="position-relative" style={{ width: '80px', height: '80px' }}>
            <Image 
              src={Logo}
              alt="Basilico Coffee"
              fill
              className="object-fit-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            {['HOME', 'INGREDIENTS', 'CATEGORIES', 'AREAS',  'CONTACT'].map((item) => (
              <li className="nav-item" key={item}>
                <Link 
                  href={`/${item.toLowerCase()}`}
                  className={`nav-link navLink`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Sections */}
          <div className="d-lg-none">
            <div className={`locationSection mb-3`}>
              <MapPin className="me-2" />
              <div>
                <div className="small">LOCATION</div>
                <div>448 West Foxrun St. Bronx</div>
              </div>
            </div>

            <div className={`deliverySection`}>
              <Phone className="me-2" />
              <div>
                <div className="small">CALL DELIVERY</div>
                <div>(734) 665-1852</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
        <Link href="/search" className={`btn iconButton text-white`}>
            <Search />
          </Link>     


          <div className="position-relative mx-3">
            <button className={`btn iconButton text-white`}>
              <ShoppingCart />
            </button>
            <span className="cartBadge">3</span>
          </div>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;