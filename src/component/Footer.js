import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiFillFolder } from 'react-icons/ai';

function Footer() {
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
            id: 3,
            child: <HiOutlineMail size={30} />,
            href: 'mailto:Fernc28@outlook.com',
        },
        {
            id: 4,
            child: <AiFillFolder size={30} />,
            href: '',
            download: true,
        },
    ];

    return (
        <div name='links'
            className="max-h-screen bg-black bg-gradient-to-b from-black to-gray-900 text-white text-lg px-10 py-10 flex flex-col justify-between items-center font-signature text-justify-center pt-10">

            <p className="text-4xl font-signature text-white border-b-4 border-gray-500 inline-block">Links</p>

            <ul name="links" className="flex justify-between py-20">
                {links.map(({ id, child, href, download }) => (
                    <li
                        key={id}
                        className="flex justify-between px-3 cursor-pointer hover:scale-105 duration-200"
                    >
                        <a href={href} download={download} target="_blank" rel="noreferrer">{child}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;