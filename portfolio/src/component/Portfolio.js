import React, { useState } from "react";
import Note_taker_1 from '../assets/Note_Taker_1.webp';




function Portfolio() {

    const projects = [
        {
            id: 1,
            name: 'note-taker',
            demoURL: 'https://note-taker-app-mod11.herokuapp.com/',
            codeURL: 'https://github.com/FernyCastro8/Note_Taker_app-mod11.git'
        },
        {
            id: 1,
            src: 'Social Media api'
        },
        {
            id: 1,
            src: 'Ecommers api'
        },
        // {
        //     id: 1,
        //     src: ' some other'
        // }
    ]

    return (
        <div name='portfolio' className="min-h-screen px-10 bg-black bg-gradient-to to-black  text-white md:h-screen w-full md:h-screen"  >


            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  h-full">
                <div className="pb-8">

                    <p className="text-4xl font-signature font-bold inline border-b-4 border-gray-500">Portfolio</p>
                </div>




                {/* cards */}
                {/*  flex-wrap  */}
                <section className="grid ms:grid-cols2 md:grid-cols-3 gap-8 px-12 sm:px-0 flex-wrap ">

                    {projects.map(({ id, name, demoURL, codeURL }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg m-4">
                            <img src={Note_taker_1} alt="" className="rounde-md hover:scale-105 " />
                            <div className="flex items-center justify-center">
                                <a href={demoURL} className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">Demo</a>
                                <a href={codeURL} className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">Code</a>
                            </div>
                        </div>
                    ))}


                    <div name='note-taker' className="shadow-md shadow-gray-600 rounded-lg m-4">
                        <img src={Note_taker_1} alt="" className="rounde-md hover:scale-105 " />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4">Code</button>
                        </div>
                    </div>


                    {/* <div className="shadow-md shadow-gray-600 rounded-lg m-4">
                        <img src={Note_taker_1} alt="" className="rounde-md hover:scale-105 " />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4">Code</button>
                        </div>
                    </div>

                    <div className="shadow-md shadow-gray-600 rounded-lg m-4">
                        <img src={Note_taker_1} alt="" className="rounde-md hover:scale-105 " />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4">Code</button>
                        </div>
                    </div> */}

                    {/* <div className="shadow-md shadow-gray-600 rounded-lg m-4">
                        <img src={Note_taker_1} alt="" className="rounde-md hover:scale-105 " />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4">Code</button>
                        </div>
                    </div>

                    <div className="shadow-md shadow-gray-600 rounded-lg m-4">
                        <img src={Note_taker_1} alt="" className="rounde-md hover:scale-105 " />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4">Code</button>
                        </div>
                    </div> */}


                </section>


            </div>



        </div>





    )

}

export default Portfolio;