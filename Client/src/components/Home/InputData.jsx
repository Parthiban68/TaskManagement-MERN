import React from "react";
import { ImCross } from "react-icons/im";

const InputData = ({ InputDiv,setInputDiv }) => {
  return (
    <>
      <div className={`${InputDiv} fixed top-0 left-0 bg-gold opacity-80 h-screen w-full`}></div>
      <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-3/6 bg-puce p-4 rounded">
          <div className="flex justify-end">
            <button className="text-xl" onClick={()=> setInputDiv('hidden')}>
              <ImCross />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="p-3 py-2 rounded w-full bg-sand text-black placeholder:font-mono my-3"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Description..."
            name="desc"
            className="p-3 py-2 rounded w-full bg-sand my-3 placeholder:font-mono text-black"
          ></textarea>
          <button className="px-3 py-2 bg-gold rounded text-xl font-mono font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
