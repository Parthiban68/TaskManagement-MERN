import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import { FaCheckDouble } from "react-icons/fa6";

const Cards = ( {home} ) => {
    const data = [
        {
          "title": "Building a Responsive Sidebar",
          "description": "Learn how to create a responsive sidebar that adapts seamlessly to different screen sizes. This tutorial covers using Tailwind CSS and basic JavaScript for functionality.",
          "status": "Incomplete",
        },
        {
          "title": "Introduction to Microservices Architecture",
          "description": "An introductory guide to understanding microservices, their benefits, and how to implement them using Node.js and Nginx for load balancing.",
           "status": "Complete",
        },
        {
          "title": "Mastering State Management in Flutter",
          "description": "Dive into advanced BLoC concepts in Flutter and learn how to manage complex state efficiently in large applications.",
           "status": "Incomplete",
        },
      ]
      const [importantButton, setimportantButton] = useState('Incomplete')
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data.map((items, index)=>(
          <div className='bg-gold rounded-sm p-4 flex flex-col justify-between'>
            <div>
               <h3 className='text-xl font-semibold font-mono'>{items.title}</h3> 
               <p className='text-gray-50 font-mono font-thin my-2'>{items.description}</p>
            </div>
               <div className='mt-4 w-full flex items-center'>
                <button className={`${items.status === "Incomplete" ? "bg-puce":"bg-sand text-puce "} p-2 rounded font-mono`}>
                  {items.status === 'Incomplete'? items.status: <div className='flex items-center gap-2 font-mono font-semibold'>{items.status} <FaCheckDouble/></div>}
                </button>
                <div className='text-white p-2 w-3/6 text-2xl flex justify-around'>
                  <button><FaRegHeart/></button>
                  <button><FiEdit/></button>
                  <button><MdDelete/></button>
                  </div>
               </div>
          </div>
        ))}
        {home==="true" && (
        <div className='flex flex-col bg-gold justify-center items-center rounded-sm p-4 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
        <IoAddCircleOutline className='text-5xl'/>
          <h2 className='text-2xl font-mono mt-2'>Add Task</h2>
        </div>
        )}
    </div>
  )
}

export default Cards