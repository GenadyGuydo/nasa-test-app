import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import DateInput from './components/dete_input';
import ApiService from './API/ApiService';
const AstronomyPicture = () => {
  const [pictureData, setPictureData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const fetchPictures = async (start, end) => {
    try {
      const data = await ApiService.fetchPictures(start, end);
      setPictureData(data);
    } catch (error) {
      // Handle error if needed
    }
  };

  const fetchPictureByDate = async (date) => {
    try {
      const data = await ApiService.fetchPictureByDate(date);
      setPictureData(data);
    } catch (error) {
      // Handle error if needed
    }
  };

  useEffect(() => {
    const defaultDate = new Date().toISOString().split('T')[0];
    setStartDate(defaultDate);
    setEndDate(defaultDate);
    setSelectedDate(defaultDate);

    fetchPictures(defaultDate, defaultDate);
  }, []);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSelectedDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleFetchPictures = () => {
    fetchPictures(startDate, endDate);
  };

  const handleFetchPictureByDate = () => {
    fetchPictureByDate(selectedDate);
  };

  return (
    <div>
     <Header/>
     <div className='input__area'>
        <div className='interval_date date_gap'>
          <DateInput label="Start Date" value={startDate} onChange={handleStartDateChange} />
          <DateInput label="End Date" value={endDate} onChange={handleEndDateChange} />
          <button onClick={handleFetchPictures}>Show Pictures</button>
        </div>
        <div className='current_date date_gap'>
          <DateInput label="Selected Date" value={selectedDate} onChange={handleSelectedDateChange} />
          <button onClick={handleFetchPictureByDate}>Show Picture for Selected Date</button>
        </div>
      </div>
      <div className='pages_area'>
        {pictureData.map((picture) => (
          <div className='area_pad' key={picture.date}>
            <h2 className='area_pad'>{picture.title}</h2>
            <p className='area_pad'>{picture.date}</p>
            <div className='image_description__container'>  
            
            <p className='description_img area_pad'>{picture.explanation}</p>
            <img className='area_pad' src={picture.url} alt={picture.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstronomyPicture;