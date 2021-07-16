import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ brandLink }) {
    return (
        <div className='navbar md:py-6 py-5 md:px-24 px-8 font-sans antialiased'>
            <nav className='flex md:flex-row flex-col justify-between items-center'>
                <div className="branding md:text-3xl text-2xl">
                    {brandLink === "link" ? (
                        <Link to='/' className="flex">
                            <p className="first">Arpan</p>
                            <p className="last">Neupane</p>
                        </Link>
                    ) : (
                        <a href="#home" className="flex">
                            <p className="first">Arpan</p>
                            <p className="last">Neupane</p>
                        </a>
                    )}


                </div>

                <ul className='flex flex-center md:mt-0 mt-3 md:text-xl text-base'>
                    <li className='mx-3 nav-link'><a href="/#about">About</a></li>
                    <li className='mx-3 nav-link'><Link to="/projects">Projects</Link></li>
                    <li className='mx-3 nav-link'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
