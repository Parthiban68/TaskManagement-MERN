import React from 'react'
import Cards from '../components/Home/Cards'
import { IoAddCircleOutline } from "react-icons/io5";
const AllTasks = () => {
  return (
    <div>
      <div className='w-full flex justify-end p-4 py-2'>
      <button>
      <IoAddCircleOutline className='text-black text-4xl hover:text-gray-700 transition-all duration-300'/>
      </button>
      </div>
      <Cards home={'true'}/>
    </div>
  )
}

export default AllTasks