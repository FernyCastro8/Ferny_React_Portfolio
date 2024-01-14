import React from "react";

function AboutMe() {
    return (
        <div name='about' className=" w-full bg-gray-900 text-white">

            <div className="max-w-screen-lg p-10 pt-5 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me
                    </p>
                </div>

                <p className="text-gray-300 text-xl mt-15">
                    I am an enthusiastic individual who, as a kid, grew up playing sports. This experience helped me develop discipline and other valuable qualities. Through sports, I learned the importance of dedication, teamwork, and perseverance. The challenges and victories on the field instilled in me a strong work ethic and a drive to continuously improve. As a hobby, I also engage in weightlifting to maintain a healthy balance and indulge in my favorite restaurants.
                </p>


            </div>

        </div >
    )

}

export default AboutMe;