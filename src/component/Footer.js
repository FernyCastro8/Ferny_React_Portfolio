import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFolder } from 'react-icons/ai';


function Footer() {

    //  looping over the links
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
            href: 'mailto:Fernycastro28@gmail.com',
        },
        {
            id: 4,
            child: <AiFillFolder size={30} />,
            // Fetch the URL and open it in a new tab
            onClick: () => { window.open('https://drive.google.com/file/d/1TvcItM03LsRcGmlPEmLP-zvN7xeZzIuT/view', '_blank') }
        },
    ];

    return (

        // footer from flowbite.com library
        <footer name="links" className="bg-black p-10 max-h-fit ">

            <p className="text-4xl font-signature text-white border-b-4 border-gray-500 inline-block lg:pt-5">Links</p>

            <section>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between justify-center">
                        <div className="flex flex-col items-center mb-4 sm:mb-0 py-3 ">
                            <img className="h-8 mr-3 hidden sm:block "
                                src="https://see.fontimg.com/api/renderfont4/PKY87/eyJyIjoiZnMiLCJoIjoyNDYsInciOjIwMDAsImZzIjoxMjMsImZnYyI6IiNGRkZGRkYiLCJiZ2MiOiIjMzUzRDRCIiwidCI6MX0/RkM/emotional-rescue-personal-use-regular.png"
                                alt="Ferny Castro Logo" />

                            <span className="self-center text-2xl whitespace-nowrap dark:text-gray-400 font-signature">
                                Ferny Castro
                            </span>
                        </div>

                        <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            {links.map(({ id, child, href, download, handleResumeClick }) => (
                                <li key={id}
                                    className="mr-4 md:mr-6 cursor-pointer hover:scale-110 duration-200 hover:text-white">
                                    <a href={href} download={download} onClick={handleResumeClick} >
                                        {child}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 text-center dark:text-gray-400 pt-3">© 2023 <a href="/" className="hover:underline">Ferny Castro™</a>. All Rights Reserved.</span>
            </section>
        </footer>
    );
}

export default Footer;
