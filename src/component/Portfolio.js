import React from "react";

import Note_taker_1 from '../assets/projects/Note_Taker_1.webp';
import Social_media_api from '../assets/projects/social-media-api.webp';
// import E_commerce from '../assets/projects/E-commerce_backend.webp';
import E_commerce_png from '../assets/projects/E-commerce_backend(resized).png'

function Portfolio() {

    const projects = [
        {
            id: 0,
            name: 'Daedalus Roster',
            image: "",
            demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
            codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
        },
        {
            id: 1,
            name: 'Note Taker',
            image: Note_taker_1,
            demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
            codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
        },
        {
            id: 2,
            name: 'Social Media Api',
            src: 'Social Media api',
            image: [Social_media_api],
            demoURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git',
            codeURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git'
        },
        {
            id: 3,
            name: 'E-commerce backend API',
            image: E_commerce_png,
            demoURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git',
            codeURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git'
        },
        // {
        //     id: 4,
        //     name: 'E-commerce backend API',
        //     image: [E_commerce],
        //     demoURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git',
        //     codeURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git'
        // }
    ];

    return (
        <div name='portfolio'
            className="min-h-screen px-10 py-10 bg-black bg-gradient-to-b from-black to-gray-900  text-white w-full md:h-screen">

            <div className="max-w-screen-lg mx-auto p-4 m-5 flex flex-col justify-center w-full h-full ">

                <div className="pb-8 ">
                    <p className="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>

                <div className="flex-grow overflow-scroll">
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 hover:scale-100 overflow-auto">
                        {projects.map(({ id, name, image, demoURL, codeURL }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <p>{name}</p>
                                <img src={image} alt="" className="rounded-md" />
                                <div className="flex items-center justify-center">
                                    <a href={demoURL} className="block w-full sm:w-1/2 px-6 py-3 m-2 sm:m-4 duration-200">Demo</a>
                                    <a href={codeURL} className="block w-full sm:w-1/2 px-6 py-3 m-2 sm:m-4 duration-200">Code</a>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>



                {/* <div className="m-10">
                    <a href=" " className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </a>

                    <a href=" " className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </a>
                </div> */}

            </div>
        </div>
    );
}

export default Portfolio;
