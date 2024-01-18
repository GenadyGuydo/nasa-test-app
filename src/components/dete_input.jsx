import React from 'react';
import '../CSS/input.css'
const DateInput = ({ label, value, onChange }) => {
  return (
    <div className='date_gap'>
      <label className='date_label' >{label}:</label>
      <input className='date_style' type="date" value={value} onChange={onChange} />
    </div>
  );
};

export default DateInput;