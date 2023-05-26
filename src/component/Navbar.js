import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

function Navbar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'about',
            target: 'about',
        },
        {
            id: 2,
            link: 'portfolio',
            target: 'portfolio',
        },
        {
            id: 3,
            link: 'contact',
            target: 'contact',
        },
        {
            id: 4,
            link: 'links',
            target: 'links',
        }
    ];

    return (
        <header name="navbar" className="max-h-screen px-10 bg-black text-white capitalize">
            <nav className="flex justify-between py-10 pb-8">
                {/* <h1 className="text-xl font-signature hover:scale-110 duration-200">Ferny Castro</h1> */}
                <span className="logo-container hidden md:block ">
                    <a href="">
                        <img src="https://see.fontimg.com/api/renderfont4/PKY87/eyJyIjoiZnMiLCJoIjoxMTQsInciOjIwMDAsImZzIjo1NywiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiMzNTNENEIiLCJ0IjoxfQ/RkM/emotional-rescue-personal-use-regular.png" alt="logo" />
                    </a>
                </span>

                <ul className="hidden md:flex items-center text-md cursor-pointer font-medium">
                    {links.map(({ id, link, target }) => (
                        <li key={id}>
                            <Link
                                to={target}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="rounded-md ml-8 px-4 border-none text-gray-400 hover:scale-105 duration-200"
                                onClick={() => setNav(false)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
            </nav>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute py-6 pb-10 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900">
                    {links.map(({ id, link, target }) => (
                        <li
                            key={id}
                            className="px-4 py-5 cursor-pointer hover:scale-105 duration-200"
                        >
                            <Link
                                to={target}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setNav(false)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}

export default Navbar;
