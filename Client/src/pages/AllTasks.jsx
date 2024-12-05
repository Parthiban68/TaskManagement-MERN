import React, { useState } from 'react'
import Cards from '../components/Home/Cards'
import { IoAddCircleOutline } from "react-icons/io5";
import InputData from '../components/Home/InputData';
const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");
  return (
    <>
    <div>
      <div className='w-full flex justify-end p-4 py-2'>
      <button onClick={() => setInputDiv("fixed")}>
      <IoAddCircleOutline className='text-black text-4xl hover:text-gray-700 transition-all duration-300'/>
      </button>
      </div>
      <Cards home={'true'} setInputDiv={setInputDiv}/>
    </div>
    <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
    </>
  )
}

export default AllTasks