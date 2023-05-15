import React from "react";

function Contact() {
    return (
        <div name='footer' className="max-h-screen bg-black text-white text-lg px-10 py-10 flex flex-col justify-between items-center font-signature text-justify-center pt-10">

            <div name='contact' className=" w-full h-screen flex flex-col justify-center items-center p-5" >

                <p className="text-4xl font-signature  border-b-4 border-gray-500">Contact</p>

                <form action="" className="flex flex-col items-center w-full md:w-1/2 pt-5 ">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 bg-transparent border-2  rounded-md text-white focus:outline-none m-3" />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email address"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none m-3" />
                    <textarea name=""
                        cols="30"
                        rows="5"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none m-3">
                    </textarea >
                    <button className="text-white bg-gray-500 m-3 px-5 rounded-md hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;