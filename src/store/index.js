import Vue from "vue";
import Vuex from "vuex";
import * as url from "../../urls";
import {
  fetchData,
  fetchMovieVideos,
  fetchSearchResults,
} from "@/services/fetchData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    trendMovies: [],
    nowPlayingMovies: [],
    upComingMovies: [],
    topRatedMovies: [],
    airingTodayTv: [],
    popularTv: [],
    topRatedTv: [],
    onTheAirTv: [],
    persons: [],
    query: "",
    personResults: [],
    movieResults: [],
    tvShowResults: [],
    trendingAllDay: [],
    trendingAllWeek: [],
    whatsPopular: [],
    onTv: [],
    thrailerUrl: "",
    forRent: [],
    freeMovie: [],
    freeTV: [],
  },

  getters: {
    getTrendMovies(state) {
      return state.trendMovies;
    },
    getNowPlayingMovies(state) {
      return state.nowPlayingMovies;
    },
    getUpComingMovies(state) {
      return state.upComingMovies;
    },
    getTopRatedMovies(state) {
      return state.topRatedMovies;
    },
    getAiringTodayTv(state) {
      return state.airingTodayTv;
    },
    getPopularTv(state) {
      return state.popularTv;
    },
    getTopRatedTv(state) {
      return state.topRatedTv;
    },
    getOnTheAirTv(state) {
      return state.onTheAirTv;
    },
    getPersons(state) {
      return state.persons;
    },
    getQuery(state) {
      return state.query;
    },
    getPersonResults(state) {
      return state.personResults;
    },
    getMovieResults(state) {
      return state.movieResults;
    },
    getTvShowResults(state) {
      return state.tvShowResults;
    },
    getThrailerUrl(state) {
      return state.thrailerUrl;
    },
    getTrendingAllDay(state) {
      return state.trendingAllDay;
    },
    getTrendingAllWeek(state) {
      return state.trendingAllWeek;
    },
    getWhatsPopular(state) {
      return state.whatsPopular;
    },
    getOnTv(state) {
      return state.onTv;
    },
    getForRent(state) {
      return state.forRent;
    },
    getFreeMovie(state) {
      return state.freeMovie;
    },
    getFreeTV(state) {
      return state.freeTV;
    },
  },
  mutations: {
    setTrendMovies(state, trendMovies) {
      state.trendMovies = trendMovies;
    },
    setnowPlayingMovies(state, nowPlayingMovies) {
      state.nowPlayingMovies = nowPlayingMovies;
    },
    setupComingMovies(state, upComingMovies) {
      state.upComingMovies = upComingMovies;
    },
    settopRatedMovies(state, topRatedMovies) {
      state.topRatedMovies = topRatedMovies;
    },
    setAiringTodayTv(state, airingTodayTv) {
      state.airingTodayTv = airingTodayTv;
    },
    setPopularTv(state, popularTv) {
      state.popularTv = popularTv;
    },
    setTopRatedTv(state, topRatedTv) {
      state.topRatedTv = topRatedTv;
    },
    setOnTheAirTv(state, onTheAirTv) {
      state.onTheAirTv = onTheAirTv;
    },
    setPersons(state, persons) {
      state.persons = persons;
    },
    setQuery(state, query) {
      state.query = query;
    },
    setPersonResults(state, personResults) {
      state.personResults = personResults;
    },
    setMovieResults(state, movieResults) {
      state.movieResults = movieResults;
    },
    setTvShowResults(state, tvShowResults) {
      state.tvShowResults = tvShowResults;
    },
    setThrailerUrl(state, thrailerUrl) {
      state.thrailerUrl = thrailerUrl;
    },
    setTrendingAllDay(state, trendingAllDay) {
      state.trendingAllDay = trendingAllDay;
    },
    setTrendingAllWeek(state, trendingAllWeek) {
      state.trendingAllWeek = trendingAllWeek;
    },
    setWhatsPopular(state, whatsPopular) {
      state.whatsPopular = whatsPopular;
    },
    setOnTv(state, onTv) {
      state.onTv = onTv;
    },
    setForRent(state, forRent) {
      state.forRent = forRent;
    },
    setFreeMovie(state, freeMovie) {
      state.freeMovie = freeMovie;
    },
    setFreeTV(state, freeTV) {
      state.freeTV = freeTV;
    },
  },

  actions: {
    async fetchTrendMovies(context) {
      fetchData(context, "setTrendMovies", url.TREND_MOVIES);
    },
    async fetchNowPlayingMovies(context) {
      fetchData(context, "setnowPlayingMovies", url.NOW_PLAYING_MOVIES);
    },
    async fetchUpComingMovies(context) {
      fetchData(context, "setupComingMovies", url.UPCOMING_MOVIES);
    },
    async fetchTopRatedMovies(context) {
      fetchData(context, "settopRatedMovies", url.TOP_RATED_MOVIES);
    },
    async fetchAiringTodayTv(context) {
      fetchData(context, "setAiringTodayTv", url.AIRING_TODAY_TV);
    },
    async fetchPopularTv(context) {
      fetchData(context, "setPopularTv", url.POPULAR_TV);
    },
    async fetchTopRatedTv(context) {
      fetchData(context, "setTopRatedTv", url.TOP_RATED_TV);
    },
    async fetchOnTheAirTv(context) {
      fetchData(context, "setOnTheAirTv", url.ON_THE_AIR_TV);
    },
    async fetchPopularPersons(context) {
      fetchData(context, "setPersons", url.POPULAR_PEOPLE);
    },
    async performSearch({ commit, state }) {
      fetchSearchResults({ commit, state });
    },
    async fetchMovieVideos(context, movie) {
      fetchMovieVideos(context, movie);
    },
    async fetchTrendingAllDay(context) {
      fetchData(context, "setTrendingAllDay", url.TRENDING_ALL_DAY);
    },
    async fetchTrendingAllWeek(context) {
      fetchData(context, "setTrendingAllWeek", url.TRENDING_ALL_WEEK);
    },

    async fetchWhatsPopular(context) {
      fetchData(context, "setWhatsPopular", url.STREAMING);
    },
    async fetchOnTv(context) {
      fetchData(context, "setOnTv", url.ON_TV);
    },
    async fetchForRent(context) {
      fetchData(context, "setForRent", url.FOR_RENT);
    },
    async fetchFreeMovie(context) {
      fetchData(context, "setFreeMovie", url.FREE_MOVIES);
    },
    async fetchFreeTV(context) {
      fetchData(context, "setFreeTV", url.FREE_TV);
    },
  },
});

export default store;
