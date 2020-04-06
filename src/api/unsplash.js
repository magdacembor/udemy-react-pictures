import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bm81lMBToe5ZrLC7il1G2_K0cCyFQfyf6VNkOozgRAA'
  }
})
