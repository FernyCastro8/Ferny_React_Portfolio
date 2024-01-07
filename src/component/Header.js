import React from "react";
// import { HiArrowSmDown } from "react-icons/hi";
// import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImg from '../assets/profileImg_IMG_7122.webp';


function Header() {

    const links = [
        {
            id: 1,
            child: <FaGithub size={30} />,
            href: 'https://github.com/FernyCastro8',
        },
        {
            id: 2,
            child: <FaLinkedin size={30} />,
            href: 'https://www.linkedin.com/in/ferny-castro/',
        },
        {
            id: 2,
            child: '',
            href: ''
        }
    ];


    return (
        <div
            name="header"
            className="h-screen w-full bg-black bg-gradient-to-b from-black via-neutral-800 to-gray-900 text-white px-10"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row " >
                <div className="">
                    <img src={profileImg} alt="profile img" id="profile-img" className="opacity-80  " />
                </div>

                <br />

                <section >
                    <p className="justify-start text-gray-400 text-2xl font-signature flex ">Hello, I go by the name of</p>
                    <p className="text-white text-6xl font-signature py-4">Ferny Castro</p>

                    <p className="text-2xl text-gray-300 font-signature ">I'm a Full Stack Developer</p>

                    <p className="text-gray-400 py-4">
                        I'm a passionate Web
                        Deverloper building Web Apps from scratch using technology tools like to
                        illustrate my craft. I specialize in all aspects of web development from front-end coding to back-end database development. My core skills include coding in JavaScript, React, and HTML/CSS. I also have experience with Node.js, Express, MongoDB, and MySQL.
                    </p>

                    <div className="flex justify-center ">
                        {links.map(({ id, child, href }) => (
                            <ul key={id} className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
                                <li className="mr-4 md:mr-6 cursor-pointer hover:scale-110 duration-200 hover:text-white">
                                    <a href={href}>
                                        {child}
                                    </a>
                                </li>
                            </ul>
                        ))}

                        {/* <Link
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className=" px-2 p-1 my-1 flex items-center rounded-md bg-gradient-to-r from-yellow-900 to-neutral-800 cursor-pointer hover:scale-105 duration-200"
                        >
                            Portfolio
                            <buttom className="">
                                <HiArrowSmDown size={25} className="ml-1 mr-1" />
                            </buttom>
                        </Link> */}

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Header;
