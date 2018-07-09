import React from 'react'
import '../styles/common.scss'

const TextButton = () => {
  return (
    <div className="button-wrapper">
      <button className="text-btn">
        All
      </button>
      <button className="text-btn">
        Rent
      </button>
      <button className="text-btn">
        Homestay
      </button>
    </div>
  );
}

export default TextButton;