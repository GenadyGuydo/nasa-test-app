import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AstronomyPicture = () => {
  const [pictureData, setPictureData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const fetchPictures = async (startDate, endDate) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ArKVftAes9hleWwh6yd8jejpQOS9pEsKxR8y5kN4&start_date=${startDate}&end_date=${endDate}`
      );
      setPictureData(response.data);
    } catch (error) {
      console.error('Error fetching pictures:', error);
    }
  };

  const fetchPictureByDate = async (date) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
      );
      setPictureData([response.data]);
    } catch (error) {
      console.error('Error fetching picture:', error);
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
      <h1>Astronomy Pictures</h1>
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      <label>End Date:</label>
      <input type="date" value={endDate} onChange={handleEndDateChange} />
      <button onClick={handleFetchPictures}>Show Pictures</button>
      <div>
        <label>Selected Date:</label>
        <input type="date" value={selectedDate} onChange={handleSelectedDateChange} />
        <button onClick={handleFetchPictureByDate}>Show Picture for Selected Date</button>
      </div>
      <div>
        {pictureData.map((picture) => (
          <div key={picture.date}>
            <h2>{picture.title}</h2>
            <p>{picture.date}</p>
            <img src={picture.url} alt={picture.title} />
            <p>{picture.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstronomyPicture;