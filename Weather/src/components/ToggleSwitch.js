import React, { useState } from 'react';
import './Switch.css'; // Import your CSS file

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;