import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'



function Navbar() {
    const [nav, setNav] = useState(false)

    // array of obj
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'contact'
        },
    ]

    return (
        <header name="navbar"
            className="max-h-screen px-10 bg-black text-white">
            <nav className="flex justify-between py-10 pb-0 ">
                <h1 className="text-xl font-signature
                hover:scale-110
                duration-200">Ferny Castro
                </h1>

                <ul className="hidden md:flex
                items-center 
                text-md
                cursor-pointer
                font-medium
                ">
                    {/* .map to display all objs by id */}
                    {links.map(({ id, link }) => (
                        <li key={id} className="rounded-md
                        ml-8
                        px-4
                        border-none
                         text-gray-400
                         hover:scale-105
                         duration-200">
                            {link}
                        </li>
                    ))}
                </ul>

                {/* useState function to how and hide menu bar  on click*/}
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
            </nav>

            {nav && <ul className="flex 
            flex-col
            justify-center
            items-center
            abusolute
            py-6 pb-10
            top-0 left-0 w-full h-screen 
            bg-gradient-to-b
            from-black to-gray-900
            ">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 py-5
                        cursor-pointer
                         hover:scale-105
                         duration-200">
                        {link}
                    </li>
                ))}
            </ul>
            }

        </header>
    )
}

export default Navbar;