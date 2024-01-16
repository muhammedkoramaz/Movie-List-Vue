<template>
    <div class="trend-movies-list">
        <h2>Trend Filmler</h2>
        <div class="movie-list-container">
            <div class="movie-list" ref="movieList">
                <div v-for="movie in movies" :key="movie.id" class="movie-item">
                    <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path"
                        :alt="movie.title" />
                    <p class="movie-title">{{ movie.title }}</p>
                    <p class="movie-release-date">{{ movie.release_date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            movies: [],
        };
    },
    mounted() {
        this.fetchTrendMovies();
    },
    methods: {
        async fetchTrendMovies() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjAxMDcyZjYxMTEyNWYzODUyYmZhMmY2ODQzZmNhYiIsInN1YiI6IjYyMTI0NjEyM2Y0ODMzMDAxYzk1ZDEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFFarWR4jNmnkrLt0ZH428RZugAjHGOlLEpWKkBxBnk',
                    },
                };
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
                this.movies = response.data.results;

                // Bu kısım kayan liste işlemleri için
                const movieList = this.$refs.movieList;
                let scrollAmount = 0;
                const scrollInterval = setInterval(() => {
                    movieList.scrollLeft += 1;
                    scrollAmount += 1;
                    if (scrollAmount >= movieList.scrollWidth - movieList.clientWidth) {
                        clearInterval(scrollInterval);
                    }
                }, 50); // İstenilen kayma hızını ayarlayabilirsiniz
            } catch (error) {
                console.error('Hata:', error);
            }
        },
    },
};
</script>
  
<style scoped>
.trend-movies-list {
    text-align: left;
    width: 90%;
    margin: 0 auto;
}

.movie-list-container {
    overflow: hidden;
}

.movie-poster {
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.movie-list {
    display: flex;
    overflow-x: auto;
    scroll-behavior: auto;
}

.movie-item {
    margin-right: 20px;
    flex-shrink: 0;
    width: 150px;
    text-align: left;

}

img {
    max-width: 150px;
    margin-left: 15px;
}

p {
    margin: 0;
    padding-left: 20px;
    text-align: left;

}

.movie-title {
    font-size: 1rem;
    font-weight: bolder;
}

.movie-release-date {
    font-size: 0.8rem;
    color: #aaa;
}</style>
  