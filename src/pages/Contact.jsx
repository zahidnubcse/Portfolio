import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-lg">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded h-32"></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
