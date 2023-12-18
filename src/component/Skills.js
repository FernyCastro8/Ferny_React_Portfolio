import React from "react";

// skill logo imports
import HTML_logo from '../../src/assets/skills/htmllogo.png';
import CSS_logo from '../assets/skills/csslogo.png';
import JavaScript_logo from '../assets/skills/jslogo.png';
import Nodejs_logo from '../assets/skills/nodelogo.png';
import Reactjs_logo from '../assets/skills/reactlogo.png';
import Mongo_logo from '../assets/skills/mongologo.png';
import Mysql_logo from '../assets/skills/mysql_logo.png'
import Tailwind_logo from '../assets/skills/tailwindlogo.png';
// import Terminal_logo from '../assets/skills/terminallogo.png';
// import Githug_logo from '../assets/skills/github-mark.png';
// import NPM_logo from '../assets/skills/npm_logo.png';


function Skills() {

    const skills = [
        {
            id: 0,
            title: 'HTML',
            src: HTML_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 1,
            title: 'CSS',
            src: CSS_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 2,
            title: 'JavaScript',
            src: JavaScript_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 3,
            title: 'Nodejs',
            src: Nodejs_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 4,
            title: 'React js',
            src: Reactjs_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 5,
            title: 'MongoDB',
            src: Mongo_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 6,
            title: 'Mysql',
            src: Mysql_logo,
            style: 'shadow-gray-500'
        },
        {
            id: 7,
            title: 'Tailwind CSS',
            src: Tailwind_logo,
            style: 'shadow-gray-500'
        },
        // {
        //     id: 8,
        //     title: 'NPM',
        //     src: NPM_logo,
        //     style: 'shadow-gray-500'
        // },
        // {
        //     id: 9,
        //     title: 'Terminal',
        //     src: Terminal_logo,
        //     style: 'shadow-gray-500'
        // },

        // {
        //     id: 10,
        //     title: 'Github',
        //     src: Githug_logo,
        //     style: 'shadow-gray-500'
        // }
    ]

    return (

        <div title='skills'
            className="w-full bg-black" >

            <section className="max-w-screen-lg mx-auto w-full  flex flex-col justify-center p-4 text-white">

                <div>
                    <p className="text-4xl font-signature  border-b-4 border-gray-500 inline">Skills</p>
                    <p className="text-gray-300 py-6">Techlogies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-6 ms:px-0 pt-2">
                    {skills.map(({ index, title, src, style }) => (
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img key={index} src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>

            </section>

        </div>
    )
}

export default Skills;

