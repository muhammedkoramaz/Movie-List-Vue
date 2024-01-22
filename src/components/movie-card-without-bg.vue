<template>
    <div class="movie-card">
        <div class="poster-container">

            <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
                :alt="movie.title" class="movie-poster" />
            <img v-else-if="movie.profile_path == null" src="https://via.placeholder.com/185x278?text=Poster+Yok"
                :alt="movie.title" class="movie-poster" />
            <img v-else :src="'https://image.tmdb.org/t/p/w185/' + movie.profile_path" :alt="movie.title"
                class="movie-poster" />
            <movie-rating class="rating-style" :progress-value="(Number(movie.vote_average) * 10).toFixed()"/>
        </div>
        <div class="movie-info">
            <p class="movie-title">{{ movie.title || movie.name }}</p>
            <p class="release-date">{{ movie.release_date || movie.first_air_date }}</p>
        </div>
    </div>
</template>
  
<script>
import MovieRating from '@/components/movie-rating.vue';

export default {
    props: {
        movie: Object,
    },
    methods: {
    },
    components: {
        MovieRating,
    },
};
</script>
  
<style scoped>
.movie-poster {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.movie-card {
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
    max-width: fit-content;
    width: 140px;
    height: 320px;
    min-width: 140px;
}


.poster-container {
    position: relative;
}

.movie-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
}

.movie-title {
    font-weight: bold;
    max-width: 160px;

}
.movie-title:hover {
    color: rgb(1,180,228,1);
    cursor: pointer;
}
.release-date {
    color: #888;
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    top: -10px;
}
.rating-style {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: -20px;
    margin-left: 4px;
}
</style>
  