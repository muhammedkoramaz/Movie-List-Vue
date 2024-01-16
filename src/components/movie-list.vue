<template>
    <div class="movies">
        <h2>{{ title }}</h2>
        <div class="movie-list">
            <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" class="movie-item" />
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import MovieCard from '@/components/movie-card.vue';

export default {
    props: {
        title: String,
        apiUrl: String,
    },
    data() {
        return {
            movies: [],
        };
    },
    created() {
        this.fetchMovies();
    },
    components: {
        MovieCard,
    },
    methods: {
        async fetchMovies() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjAxMDcyZjYxMTEyNWYzODUyYmZhMmY2ODQzZmNhYiIsInN1YiI6IjYyMTI0NjEyM2Y0ODMzMDAxYzk1ZDEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFFarWR4jNmnkrLt0ZH428RZugAjHGOlLEpWKkBxBnk',
                    },
                };
                const response = await axios.get(this.apiUrl, options);
                this.movies = response.data.results;
                console.log(this.movies);
            } catch (error) {
                console.error('Hata:', error);
            }
        },
    },
};
</script>
  
<style scoped>
.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    margin-left: 110px;
}

.movie-item {
    width: calc(20% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
}

.release-date {
    color: #888;
}

@media (max-width: 1200px) {
    .movie-item {
        width: calc(25% - 20px);
    }
}

@media (max-width: 900px) {
    .movie-item {
        width: calc(33.3% - 20px);
    }
}

@media (max-width: 767px) {
    .movie-item {
        width: calc(50% - 20px);
    }
}

@media (max-width: 479px) {
    .movie-item {
        width: 100%;
    }
}
</style>
  