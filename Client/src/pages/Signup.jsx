import React from "react";

const Signup = () => {
  return (
    <div className="bg-red-600 h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div>Signup</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="username"
        />
           <input
          type="email"
          placeholder="User Email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="xyz@gmail.com"
          required
        />
           <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
