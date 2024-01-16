<template>
    <div class="movie-card">
        <div class="poster-container">

            <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path"
                :alt="movie.title" class="movie-poster" />
            <img v-else-if="movie.profile_path == null" src="https://via.placeholder.com/185x278?text=Poster+Yok"
                :alt="movie.title" class="movie-poster" />
            <img v-else :src="'https://image.tmdb.org/t/p/w185/' + movie.profile_path" :alt="movie.title"
                class="movie-poster" />
        </div>
        <div class="movie-info">
            <p class="movie-title">{{ movie.title || movie.name }}</p>
            <p class="release-date">{{ movie.release_date || movie.first_air_date }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        movie: Object,
    },
    methods: {
    },
};
</script>
  
<style scoped>
.movie-poster {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.movie-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
    max-width: fit-content;
    width: 140px;
    height: 400px;
}

.movie-card:hover {
    transform: scale(1.05);
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

.release-date {
    color: #888;
}
</style>
  