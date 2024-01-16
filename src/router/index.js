import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/movies/popular",
      name: "Movies",
      component: () => import("@/pages/PopularMovies.vue"),
    },
    {
      path: "/movies/now-playing",
      name: "Movies",
      component: () => import("@/pages/NowPlayingMovie.vue"),
    },
    {
      path: "/movies/upcoming",
      name: "Movies",
      component: () => import("@/pages/UpcomingMovie.vue"),
    },
    {
      path: "/movies/top-rated",
      name: "Movies",
      component: () => import("@/pages/TopRatedMovie.vue"),
    },
    {
      path: "/tv/popular",
      name: "PopularTv",
      component: () => import("@/pages/PopularTv.vue"),
    },
    {
      path: "/tv/airing-today",
      name: "AiringTodayTv",
      component: () => import("@/pages/AiringTodayTv.vue"),
    },
    {
      path: "/tv/on-the-air",
      name: "OnTheAirTv",
      component: () => import("@/pages/OnTheAirTv.vue"),
    },
    {
      path: "/tv/top-rated",
      name: "TopRatedTv",
      component: () => import("@/pages/TopRatedTv.vue"),
    },  
    {
      path: "/person",
      name: "person",
      component: () => import("@/pages/PopularPerson.vue"),
    },
    {
      path: "/more",
      name: "More",
      component: () => import("@/pages/PopularPerson.vue"),
    },
    {
      path: '/search-results/:query',
      name: 'search-results',
      component: () => import('@/pages/SearchResults.vue'),
      props: true,
    },
  ],
});
