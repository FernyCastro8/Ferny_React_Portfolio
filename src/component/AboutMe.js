import React, { useState } from "react";

function AboutMe() {
    return (
        <div name='about' className="h-screen w-full bg-gradient-to-t from-black to-gray-900 via-gray-950 text-white">

            <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me
                    </p>
                </div>

                <p className="text-xl mt-15">
                    I am an enthusiastic individual who, as a kid, grew up playing sports. This experience helped me develop discipline and other valuable qualities. Through sports, I learned the importance of dedication, teamwork, and perseverance. The challenges and victories on the field instilled in me a strong work ethic and a drive to continuously improve. As a hobby, I also engage in weightlifting to maintain a healthy balance and indulge in my favorite restaurants.
                </p>

            </div>

        </div >
    )

}

export default AboutMe;