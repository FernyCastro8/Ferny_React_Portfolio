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

        <section name="portfolio" class="min-h-screen px-10 py-10 bg-black bg-gradient-to-b from-black to-gray-900 text-white w-full md:h-screen">
            <div class="max-w-screen-lg mx-auto p-4 m-5 flex flex-col justify-center w-full h-full">
                <div id="portfolio" class="pb-8 mb-5">
                    <p class="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                    {projects.map(({ id, name, image, demoURL, codeURL }) =>
                        <div class="py-10 bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-500">
                            <div class="relative overflow-hidden group">
                                <img src={image} class="w-full h-64 object-cover" alt="Portfolio Item" />
                                <div class="absolute inset-0 bg-black bg-opacity-80 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100">
                                    <div class="flex items-center justify-center h-full">
                                        <div class="text-center">
                                            <h2 class="text-2xl font-bold text-white mb-2">Standard Color</h2>
                                            <p class="text-lg font-light text-white">Lorem ipsum dolor sit amet, #brands.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>

    )
}

export default Portfolio_2;



