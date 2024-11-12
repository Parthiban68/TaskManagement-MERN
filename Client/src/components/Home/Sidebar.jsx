import React from 'react';
import { CgNotes } from "react-icons/cg";
import { MdNotificationImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const data = [
    {
      title:"All tasks",
      icons: <CgNotes />,
      link:'/',
    },
    {
      title:"Important tasks",
      icons: <MdNotificationImportant />,
      link:'/importanttasks',
    },
    {
      title:"Completed tasks",
      icons: <FaCheckDouble />,
      link:'/completedtasks',
    },
    {
      title:"Incompleted tasks",
      icons: <TbNotebookOff />,
      link:'/incompletedtasks',
    },
  ]
  return (
    <>
      <div>
        <h2 className='text-xl font-mono'>Parthiban.M</h2>
        <h4 className='mb-1 font-mono'>parthi@gmail.com</h4>
        <hr />
      </div>
      <div>
      {data.map((data, index)=>(
           <Link to={data.link} key={index} className='mb-2 font-mono flex items-center gap-2 hover:bg-gold px-1 rounded transition-all duration-300'>
            {data.icons}
            {data.title}
           </Link>
        ))}
      </div>
      <div>
        <button className='bg-gold w-full p-2 rounded font-mono'>Log Out</button>
      </div>
    </>
  )
}

export default Sidebar