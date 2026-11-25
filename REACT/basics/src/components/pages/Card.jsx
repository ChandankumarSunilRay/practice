import React from 'react'

const Card = ({title, price}) => {
  return (
    <div className="border rounded-xl p-5 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>₹{price}</p>

      <button className="bg-amber-400 text-white rounded-lg p-2">
        Book Now
      </button>
    </div>
  );
}

export default Card
