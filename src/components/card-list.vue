<template>
    <div class="movies">
        <h2>{{ title }}</h2>
        <div class="movie-list">
            <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" class="movie-item" />
        </div>
    </div>
</template>
  
<script>
import MovieCard from '@/components/movie-card.vue';

export default {
    props: {
        title: String,
        movies: Array
    },
    components: {
        MovieCard,
    },

};
</script>
  
<style scoped>
.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
}

.movie-item {
    width: calc(20% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
    height: 490px;
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
  