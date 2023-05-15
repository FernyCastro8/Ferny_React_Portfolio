import React, { useState } from "react";

function AboutMe() {
    return (
        <div name='about-me' className="h-screen w-full bg-gradient-to-t from-black to-gray-900 via-gray-950 text-white">

            <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi possimus, delectus nobis tempore provident unde eveniet distinctio at expedita atque omnis nemo? Provident quas aliquid ea debitis, id recusandae. Dolores!
                </p>

                <br />

            </div>

        </div >
    )

}

export default AboutMe;