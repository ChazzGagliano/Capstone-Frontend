import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
  params: {
    term: 'bojack',
    country: 'uk'
  },
  headers: {
    'X-RapidAPI-Key': '3987471bbcmsh47aece8a29a080ap1ca01bjsnbf5dc083bcea',
    'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}