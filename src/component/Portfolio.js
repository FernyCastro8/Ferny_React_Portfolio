import React from "react";
import Note_taker_1 from '../assets/Note_Taker_1.webp';
import Social_media_api from '../assets/social-media-api.webp';
import E_commerce from '../assets/E-commerce_backend.webp';

function Portfolio() {

    const projects = [
        {
            id: 1,
            name: 'Note Taker',
            image: [Note_taker_1],
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
            image: [E_commerce],
            demoURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git',
            codeURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git'
        },
    ];

    return (
        <div name='portfolio' className="min-h-screen px-10 bg-black bg-gradient-to to-black text-white md:h-screen w-full md:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, name, image, demoURL, codeURL }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <p>{name}</p>
                            <img src={image} alt="" className="rounded-md hover:scale-105" />
                            <div className="flex items-center justify-center">
                                <a href={demoURL} className="block w-full sm:w-1/2 px-6 py-3 m-2 sm:m-4 duration-200">Demo</a>
                                <a href={codeURL} className="block w-full sm:w-1/2 px-6 py-3 m-2 sm:m-4 duration-200">Code</a>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Portfolio;
