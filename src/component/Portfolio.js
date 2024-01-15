import React from "react";

// importing project images
import daedauls_Roster from '../assets/projects/daedalus_roster.png'
import fitnessFusion from '../assets/projects/fitnessfusion.png'
import Note_taker from '../assets/projects/Note_taker.png';
import E_commerce_png from '../assets/projects/E-commerce_backend(resized).png'
import Social_media_api from '../assets/projects/social_media_api-1080x642.webp';


// looping over the pojects on the project section
const projects = [
    {
        id: 0,
        name: 'Daedalus Roster',
        image: daedauls_Roster,
        demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
        codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git',
        description: 'A full MERN Stack Web App with user authentication, Daedalus Roster is an easy-to-use app that helps freelancers find jobs and lets businesses hire skilled workers.'
    },
    {
        id: 1,
        name: 'Fitness Fusion',
        image: fitnessFusion,
        demoURL: 'https://fernycastro8.github.io/fitness-fusion-workout-maker/',
        codeURL: 'https://github.com/FernyCastro8/fitness-fusion-workout-maker/tree/main',
        description: 'Site created a site using JavaScript, jQuery, HTML, CSS, Tailwind(framework), and NinjaAPI!'
    },
    {
        id: 2,
        name: 'Note Taker',
        image: Note_taker,
        demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
        codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git',
        description: 'Built with Node.js and Express, allows users to create, retrieve, and delete notes. A convenient way to jot down important information, tasks, or ideas.'
    },
    {
        id: 4,
        name: 'E-commerce backend API',
        image: E_commerce_png,
        demoURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git',
        codeURL: 'https://github.com/FernyCastro8/E-commerce-Back-End_mod13.git',
        description: 'Mongoose Object Data Modeling (ODM) REST API. Utilizing NoSQL databases, built with Express.js, MongoDB, and Mongoose ODM. Guarantees scalability and efficient data management.'
    },
    {
        id: 3,
        name: 'Social Media Api',
        image: Social_media_api,
        demoURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git',
        codeURL: 'https://github.com/FernyCastro8/Social_Network_API-mod18.git',
        description: 'Object Relational Mapping ( ORM ). Leverages SQL databases, Powered by Express.js for seamless routing and it employs MySQL and sequelize 5.21.7 to ensure scalability and streamlined data handlings'

    }
];

function Portfolio() {
    return (

        <section name="portfolio"
            class="min-h-screen px-10 py-10 bg-black bg-gradient-to-b from-slate-900 to-gray-900 text-white w-full md:h-screen">
            <div class="max-w-screen-lg mx-auto p-4 m-5 flex flex-col justify-center w-full h-full">
                <div id="portfolio" class="pb-8 mb-5">
                    <p class="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 overflow-auto">

                    {projects.map(({ id, name, image, description, demoURL, codeURL }) =>
                        <div key={id} class="py-8 px-1 bg-gray-800 shadow-lg rounded-lg  hover:scale-105 duration-500">
                            <div class="relative group">
                                <img src={image} class="w-full h-64 object-cover rounded-lg" alt="Portfolio Item" />
                                <div class="absolute inset-0 bg-black bg-opacity-80 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100">
                                    <div class="flex items-center justify-center h-full">
                                        <div class="text-center">
                                            <h2 class="text-2xl font-bold text-white mb-2">{name}</h2>
                                            <p class="text-lg font-light text-white">{description}</p>

                                            <div class="justify-center my-9 select-none flex">
                                                <a href={codeURL} target="_blank" rel="noopenner noreferrer">
                                                    <button
                                                        class="py-2 px-4 shadow-md no-underline rounded-full bg-gray-600 text-white  font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-gray-800 focus:outline-none active:shadow-none mx-3">Code</button>
                                                </a>
                                                <a href={demoURL} target="_blank" rel="noopenner noreferrer">
                                                    <button
                                                        class="py-2 px-4 shadow-md no-underline rounded-full bg-gray-600 text-white  font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-gray-800 focus:outline-none active:shadow-none mx-3">Demo</button>
                                                </a>
                                            </div>

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

export default Portfolio;



