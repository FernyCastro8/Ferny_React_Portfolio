import React from "react";

// importing project images
import fitnessFusion from '../assets/projects/fitnessfusion.png'
import Note_taker_1 from '../assets/projects/Note_taker_1.png';
// import Social_media_api from '../assets/projects/social_media_api-1080x642.webp';
// import E_commerce from '../assets/projects/E-commerce_backend.webp';
// import E_commerce_png from '../assets/projects/E-commerce_backend(resized).png'


// looping over the pojects on the project section
const projects = [
    // {
    //     id: 0,
    //     name: 'Daedalus Roster',
    //     image: "",
    //     demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
    //     codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
    // },
    {
        id: 1,
        name: 'Note Taker',
        image: Note_taker_1,
        demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
        codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
    },
    {
        id: 2,
        name: 'Fitness Fusion',
        image: fitnessFusion,
        demoURL: 'https://github.com/FernyCastro8/fitness-fusion-workout-maker/tree/main',
        codeURL: 'https://fernycastro8.github.io/fitness-fusion-workout-maker/'
    },
    // {
    //     id: 3,
    //     name: 'Social Media Api',
    //     image: Social_media_api,
    //     demoURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git',
    //     codeURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git'
    // },
    // {
    //     id: 4
    //     name: 'E-commerce backend API',
    //     image: [E_commerce],
    //     demoURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git',
    //     codeURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git'
    // }
];

function Portfolio_2() {
    return (

        <section name='portfolio'
            className="min-h-screen px-10 py-10 bg-black bg-gradient-to-b from-black to-gray-900  text-white w-full md:h-screen">

            <div className="max-w-screen-lg mx-auto p-4 m-5 flex flex-col justify-center w-full h-full">

                <div id="portfolio" className="pb-8 mb-5 ">
                    <p className="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 hover:scale-100 ">

                    {projects.map(({ id, name, image, demoURL, codeURL }) => (
                        <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={demoURL}>
                                <img className="rounded-t-lg" src={image} alt={name} />
                            </a>
                            <div className="p-5">
                                <a href={demoURL}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                </a>
                                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400"> {/* Add project-specific description here */}</p>
                                <a href={codeURL} className="inline-flex items-center px-3 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Live demo
                                </a>
                                <a href={codeURL} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Github repo
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Portfolio_2;



