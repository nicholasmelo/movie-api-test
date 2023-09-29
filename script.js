const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0068646/production_locations/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5131599b8amsh5cd7960c965ca44p1c76fcjsnf65b00e1bb62',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('API response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
