import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33395232-2c7298051ec43baaf859d6c71';

const getImages = async (searchQuery, page = 1) => {
  const options = 'image_type=photo&orientation=horizontal&per_page=12';
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&${options}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('No response from server');
    }
  } catch (error) {
    throw error;
  }
};

const pixabayApi = {
  getImages,
};

export default pixabayApi;
