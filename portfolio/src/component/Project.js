import React, { useState } from "react";
import NoteTaker from '../assets/Note_Taker.webp';


function Project() {
    return (
        <div name='project' className="min-h-screen px-10 bg-black bg-gradient-to to-black  text-white md:h-screen w-full md:h-screen"  >

            <h1 className="text-3xl font-signature">Project</h1>

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p>Portfolio</p>
                </div>

                {/* cards */}
                <div>
                    <div>
                        <img src={NoteTaker} alt="" />
                        <div>
                            <button>Demo</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )

}

export default Project;