import React, { useState } from "react";

export default function Count() {
  const [value, setValue] = useState(0);
  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleIncrement = () => {
    setValue(value + 1);
  };
  return (
    <div className="">
      <div className="">
        <p className="font-bold text-3xl uppercase">
          count: 
          <span className="text-yellow-700"> {value} </span>
        </p>
        <div className="flex justify-center gap-3 my-3">
          <button
            className="p-3 bg-green-700 text-white rounded-lg uppercase"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="p-3 bg-red-700 rounded-lg uppercase"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
