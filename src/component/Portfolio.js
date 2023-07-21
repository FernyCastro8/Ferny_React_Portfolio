import React from "react";

// importing project images
import fitnessFusion from '../assets/projects/fitnessfusion.png'
import Note_taker_1 from '../assets/projects/Note_Taker_1.webp';
// import Social_media_api from '../assets/projects/social_media_api-1080x642.webp';
// import E_commerce from '../assets/projects/E-commerce_backend.webp';
// import E_commerce_png from '../assets/projects/E-commerce_backend(resized).png'


// Portfolio component Function
function Portfolio() {

    // looping over the pojects on the the project section
    const projects = [
        // {
        //     id: 0,
        //     name: 'Daedalus Roster',
        //     image: "",
        //     demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
        //     codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
        // },
        // {
        //     id: 1,
        //     name: 'Social Media Api',
        //     image: Social_media_api,
        //     demoURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git',
        //     codeURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git'
        // },
        {
            id: 2,
            name: 'Note Taker',
            image: Note_taker_1,
            demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
            codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
        },
        {
            id: 3,
            name: 'Fitness Fusion',
            image: fitnessFusion,
            demoURL: 'https://github.com/FernyCastro8/fitness-fusion-workout-maker/tree/main',
            codeURL: 'https://fernycastro8.github.io/fitness-fusion-workout-maker/'
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
        <section name='portfolio'
            className="min-h-screen px-10 py-10 bg-black bg-gradient-to-b from-black to-gray-900  text-white w-full md:h-screen">

            <div className="max-w-screen-lg mx-auto p-4 m-5 flex flex-col justify-center w-full h-full ">

                <div id="portfolio" className="pb-8 ">
                    <p className="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>

                <div id="grid_section" className="flex-grow overflow-scroll">

                    <section id="projects_array"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 hover:scale-100 ">

                        {projects.map(({ id, name, image, demoURL, codeURL }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <p>{name}</p>
                                <img src={image} alt="Project_Img" className="image-container rounded-md " />
                                <div id="button" className="flex items-center justify-center">
                                    <a href={demoURL} className="block w-full bg-gray-800 rounded-full sm:w-1/2 px-1 py-1 m-2 sm:m-4 hover:scale-105 duration-200">
                                        Demo
                                    </a>
                                    <a href={codeURL} className="block w-full bg-gray-800 rounded-full sm:w-1/2 px-1 py-1 m-2 sm:m-4 hover:scale-105 duration-200">
                                        Code
                                    </a>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
