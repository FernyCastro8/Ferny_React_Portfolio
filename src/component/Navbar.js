import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

import resume_pdf from '../assets/resume/RESUME_wd_FernyCastro.pdf';

function Navbar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 0,
            logo: [
                <span>
                    <a href=" ">
                        <img src="https://see.fontimg.com/api/renderfont4/PKY87/eyJyIjoiZnMiLCJoIjo3NiwidyI6MjAwMCwiZnMiOjM4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/RkM/emotional-rescue-personal-use-regular.png" alt="Cursive fonts" />
                    </a>
                </span>
            ],
            target: 'navbar',
        },
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
            link: 'links',
            target: 'links',
        },
        {
            id: 4,
            link: 'contact',
            target: 'contact',
        },
        {
            id: 5,
            link: 'resume',
            target: 'resume',
            // on click funtion to enable the download option for Resume
            onClick: () => {
                const link = document.createElement('a');
                link.href = resume_pdf;
                link.download = 'Ferny_Castro_Resume.pdf';
                link.click();
            }
        }
    ];

    return (
        <header name="navbar" className="max-h-screen px-10 bg-black text-white capitalize">
            <nav className="flex justify-between py-10 pb-8 items-center">
                <span className="flex justify-center ">
                    <a href=" ">
                        <img className="cursor-default" src="https://see.fontimg.com/api/renderfont4/PKY87/eyJyIjoiZnMiLCJoIjo3NiwidyI6MjAwMCwiZnMiOjM4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/RkM/emotional-rescue-personal-use-regular.png" alt="logo" />
                    </a>
                </span>

                <ul className="hidden md:flex items-center font-medium text-md cursor-pointer">
                    {links.map(({ id, link, target, onClick }) => (
                        <li
                            key={id}
                            className="rounded-md ml-8 px-4 border-none text-gray-400 hover:underline hover:text-white hover:scale-105 duration-200"
                        >
                            {onClick ? (
                                <a href="/" onClick={onClick} download>
                                    {link}
                                </a>
                            ) : (
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
                            )}
                        </li>
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
            </nav>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute py-6 pb-10 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900">
                    {links.map(({ id, link, target, logo }) => (
                        <li
                            key={id}
                            className="px-4 py-5 cursor-pointer hover:scale-110 duration-200"
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
