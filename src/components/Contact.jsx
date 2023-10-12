import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form to contact</p>

          <div className="flex justify-center item-center">
            <form action="https://getform.io/f/494709e1-7cdd-480e-8486-5a2252a2a329" method="POST" className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enteryourname"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enteryouremail"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300">
                Let's Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
