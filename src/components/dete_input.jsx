import React from 'react';

const DateInput = ({ label, value, onChange }) => {
  return (
    <div className='date_gap'>
      <label>{label}:</label>
      <input type="date" value={value} onChange={onChange} />
    </div>
  );
};

export default DateInput;