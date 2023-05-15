import React, { useState } from "react";
import { HiArrowSmDown } from "react-icons/hi";
import imgWebp from '../assets/IMG_7122.webp'


function Header() {
    return (
        <div name="header"
            className="h-screen w-full bg-black bg-gradient-to-b from-black via-neutral-800 to-gray-900 text-white  px-10 ">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
                <div>
                    <img src={imgWebp} alt="profile img" />
                </div>

                <br />

                <div className="">
                    <h2 className="tex-4ls sm:text-7xl font-signature">Full Stack Dev</h2>

                    <p className="text-gray-400 py-4"> Hello, I go by the name of Ferny Castro. I'm a passionate Web Deverloper building Web App from scratch using technology tools to illustrate my craft
                    </p>

                    <div className="flex justify-center">
                        <button className="w-fit px-6 p-3 my-2  flex items-center rounded-md  bg-gradient-to-r from-yellow-900 to-neutral-800 cursor-pointer hover:scale-105
                         duration-200">
                            Portfolio
                            <span className="">
                                <HiArrowSmDown size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Header;