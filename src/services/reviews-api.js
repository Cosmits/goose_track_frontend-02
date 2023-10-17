import axios from 'axios';

const BASE_URL = 'https://goose-track-backend-02.onrender.com';

function fetchAllReviews() {
  return axios.get(`${BASE_URL}/reviews`);
}

export default { fetchAllReviews };
