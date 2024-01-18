import React from 'react';
import '../CSS/input.css'
const DateInput = ({ label, value, onChange }) => {
  const today = new Date().toISOString().split('T')[0];
  return (
    <div className='date_gap'>
      <label className='date_label' >{label}:</label>
      <input className='date_style' type="date" value={value} onChange={onChange} max={today} />
    </div>
  );
};

export default DateInput;