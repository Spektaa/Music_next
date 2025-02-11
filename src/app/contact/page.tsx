'use client'
import React from 'react';
import { Meteors } from "@/components/ui/meteors";
export default function MeteorsDemo() {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-black text-white">
        <div className="relative h-full w-full flex justify-center items-center">
          {/* Full-Screen Meteor Effect */}
          <Meteors number={30} />
          
          {/* Contact Us Section */}
          <div className="absolute bg-gray-800 p-6 rounded-lg shadow-lg w-196 text-center">
            <h2 className="text-5xl font-bold mb-5">Contact Us</h2>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Feedback" 
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}


