export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  export const validatePassword = (password) => {
    return password.length >= 6;
  };



  // import axios from 'axios';


// const fetchMovieDetails = async (movieId) => {
//   try {
//     const response = await axios.get(OMDB_BASE_URL, {
//       params: {
//         apikey: OMDB_API_KEY,
//         i: movieId, // Movie ID (IMDB ID)
//       },
//     });
//     return response.data; // Returns movie details
//   } catch (error) {
//     console.error('Error fetching movie details:', error);
//     throw error;
//   }
// };

// export { fetchMovies, fetchMovieDetails };
