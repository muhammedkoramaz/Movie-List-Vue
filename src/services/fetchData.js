import axios from "axios";
import { API_KEY, SHORT_API_KEY } from "../../urls";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};
export const fetchData = async (context, mutationName, url) => {
  try {
    const response = await axios.get(url, options);
    const data = response.data.results;
    context.commit(mutationName, data);
  } catch (error) {
    console.error("Hata:", error);
  }
};

export const fetchMovieVideos = async (context, movie) => {
  try {
    const response = await axios.get(
      movie.type == "movie"
        ? `https://api.themoviedb.org/3/movie/${movie.movieId}/videos?language=en-US`
        : `https://api.themoviedb.org/3/tv/${movie.movieId}/videos?language=en-US`,
      options
    );
    const videos = response.data.results;

    const trailerVideo = videos.find((video) => video.type === "Trailer");

    if (trailerVideo) {
      context.commit("setThrailerUrl", trailerVideo.key);
    }
  } catch (error) {
    console.error("Hata:", error);
  }
};

export const fetchSearchResults = async ({ commit, state }) => {
  try {
    const personResponse = await axios.get(
      `https://api.themoviedb.org/3/search/person?query=${state.query}&api_key=${SHORT_API_KEY}`
    );
    commit("setPersonResults", personResponse.data.results);
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${state.query}&api_key=${SHORT_API_KEY}`
    );
    commit("setMovieResults", movieResponse.data.results);

    const tvShowResponse = await axios.get(
      `https://api.themoviedb.org/3/search/tv?query=${state.query}&api_key=${SHORT_API_KEY}`
    );
    commit("setTvShowResults", tvShowResponse.data.results);
  } catch (error) {
    console.error("Hata:", error);
  }
};
