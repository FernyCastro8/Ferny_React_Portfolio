import React from "react";

function Contact() {
    return (
        <div name='contact'
            className="max-h-screen justify-between items-center bg-black text-white text-lg px-10 py-10 pt-10 flex flex-col  font-signature text-justify-center bg-gradient-to-t from-black to-gray-900 ">

            <div className=" w-full h-screen flex flex-col justify-center items-center p-5" >

                <p className="text-4xl font-signature  border-b-4 border-gray-500">Contact</p>

                <hr />

                <p className="text-xl text-gray-300 pt-5">Let's connect</p>

                {/* Getfrom.io  liks to personal email */}
                <form method="POST"
                    action="https://getform.io/f/165e4406-11de-4b15-b649-4bc5f1eff271"
                    className="flex flex-col items-center w-full lg:pb-6 md:w-1/2 pt-5 ">

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 bg-gray-900 border-2  rounded-md text-white text-center focus:outline-none m-3" />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className="p-2 bg-gray-900 border-2 rounded-md text-white text-center focus:outline-none m-3" />
                    <textarea name=""
                        cols="40"
                        rows="5"
                        placeholder="Enter your message"
                        className="p-2 bg-gray-900 border-2 rounded-md text-white text-center focus:outline-none m-3">
                    </textarea >
                    <button className="text-white bg-gray-500 m-3 px-5 rounded-md hover:scale-110 hover:bg-slate-400 duration-300">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;