import axios from 'axios';

const ApiService = {
  fetchPictures: async (startDate, endDate) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ArKVftAes9hleWwh6yd8jejpQOS9pEsKxR8y5kN4&start_date=${startDate}&end_date=${endDate}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching pictures:', error);
      throw error;
    }
  },

  fetchPictureByDate: async (date) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ArKVftAes9hleWwh6yd8jejpQOS9pEsKxR8y5kN4&date=${date}`
      );
      return [response.data];
    } catch (error) {
      console.error('Error fetching picture:', error);
      throw error;
    }
  },
};

export default ApiService;