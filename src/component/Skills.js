import React from "react";

import HTML_logo from '../../src/assets/skills/htmllogo.png';
import CSS_logo from '../assets/skills/csslogo.png';
import JavaScript_logo from '../assets/skills/jslogo.png';
import Nodejs_logo from '../assets/skills/nodelogo.png';
import Reactjs_logo from '../assets/skills/reactlogo.png';
import Mongo_logo from '../assets/skills/mongologo.png';
import Tailwind_logo from '../assets/skills/tailwindlogo.png';
import Terminal_logo from '../assets/skills/terminallogo.png';
import Githug_logo from '../assets/skills/github-mark.png';





function Skills() {

    const skills = [
        {
            id: 1,
            name: 'HTML',
            logo: HTML_logo
        },
        {
            id: 2,
            name: 'CSS',
            logo: CSS_logo
        },
        {
            id: 3,
            name: 'JavaScript',
            logo: JavaScript_logo
        },
        {
            id: 4,
            name: 'Nodejs',
            logo: Nodejs_logo
        },
        {
            id: 5,
            name: 'React js',
            logo: Reactjs_logo
        },
        {
            id: 6,
            name: 'MongoDB',
            logo: Mongo_logo
        },
        {
            id: 7,
            name: 'MongoDB',
            logo: HTML_logo
        },
        {
            id: 8,
            name: 'Tailwind CSS',
            logo: Tailwind_logo
        },
        {
            id: 9,
            name: 'Terminal',
            logo: Terminal_logo
        },
        {
            id: 10,
            name: 'Github',
            logo: Githug_logo
        },
    ]

    return (
        <div name='skills' className="w-full h-screen bg-black bg-gradient-to-b from-gray-800 to-black" >

            <div className="max-w-screen mx-auto w-full h-full flex flex-col justify-center p-4 text-white">

                <div>
                    <p className="text-4xl font-signature  border-b-4 border-gray-500 inline">Skills</p>
                    <p className="py-6">Techlogies I've worked with</p>
                </div>

                <div className="w-fulsl grid grid-cols-2  ms:grid-col-3 gap-8 text-center py-8 ms:px-0 pt-2">
                    {skills.map(({ id, name, logo }) => (
                        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                            <img key={id} src={logo} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{name}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Skills;

