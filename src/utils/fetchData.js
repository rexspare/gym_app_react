export const exerciseOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': 'bfb19a27cbmsh5594cfb3bbb5f9cp18e9ffjsnc92a6efa90dc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bfb19a27cbmsh5594cfb3bbb5f9cp18e9ffjsnc92a6efa90dc',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}