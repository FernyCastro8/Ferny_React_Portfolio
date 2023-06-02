import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFolder } from 'react-icons/ai';

import resume_pdf from '../assets/resume/Ferny_Castro_Resume.pdf'


function Footer_Flowbite() {

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
            href: resume_pdf,
            download: 'Ferny_Castro_Resume.pdf',
        },
    ];

    return (

        <footer name="links" className="bg-black p-10 bg-gradient-to-b from-black to-gray-900 max-h-fit ">

            <p className="text-4xl font-signature text-white border-b-4 border-gray-500 inline-block lg:pt-5">Links</p>

            <div>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between justify-center">
                        <div className="flex flex-col items-center mb-4 sm:mb-0 py-3">
                            <img src="https://see.fontimg.com/api/renderfont4/PKY87/eyJyIjoiZnMiLCJoIjoyNDYsInciOjIwMDAsImZzIjoxMjMsImZnYyI6IiNGRkZGRkYiLCJiZ2MiOiIjMzUzRDRCIiwidCI6MX0/RkM/emotional-rescue-personal-use-regular.png" className="h-8 mr-3" alt="Ferny Castro Logo" />
                            <span className="self-center text-2xl whitespace-nowrap dark:text-gray-400 font-signature">Ferny Castro</span>
                        </div>

                        <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            {links.map(({ id, child, href, download }) => (
                                <li key={id} className="mr-4 md:mr-6 cursor-pointer hover:scale-110 duration-200 hover:text-white">
                                    <a href={href} download={download}>
                                        {child}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 text-center dark:text-gray-400 pt-3">© 2023 <a href="/" className="hover:underline">Ferny Castro™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer_Flowbite;
