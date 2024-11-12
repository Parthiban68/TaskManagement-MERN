import React from 'react'

const Cards = () => {
    const data = [
        {
          "title": "Building a Responsive Sidebar",
          "description": "Learn how to create a responsive sidebar that adapts seamlessly to different screen sizes. This tutorial covers using Tailwind CSS and basic JavaScript for functionality."
        },
        {
          "title": "Introduction to Microservices Architecture",
          "description": "An introductory guide to understanding microservices, their benefits, and how to implement them using Node.js and Nginx for load balancing."
        },
        {
          "title": "Mastering State Management in Flutter",
          "description": "Dive into advanced BLoC concepts in Flutter and learn how to manage complex state efficiently in large applications."
        },
      ]
      
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data.map((items, index)=>(
            <div className='bg-gold rounded-sm p-4'>
               <h3 className='text-xl font-semibold font-mono'>{items.title}</h3> 
               <p className='text-gray-50 font-mono font-thin my-2'>{items.description}</p>
               <div className='mt-4'>
                <button className='bg-orange p-2 rounded'>
                    In Completed
                </button>
               </div>
            </div>
        ))}
    </div>
  )
}

export default Cards