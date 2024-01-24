<template>
    <div>
        <h2>Arama Sonuçları</h2>
        <p>Aranan kelime: {{ query }}</p>

        <h3>Kişiler</h3>
        <div v-if="person.length === 0">Sonuç bulunamadı.</div>
        <div v-else class="items">
            <div class="movie-item" v-for="person in person" :key="person.id">
                <img v-if="person.profile_path == null" src="https://via.placeholder.com/185x278?text=Fotoğraf+Yok"
                    :alt="person.name" class="person-poster" />
                <img v-else class="person-poster" :src="'https://image.tmdb.org/t/p/w185/' + person.profile_path"
                    :alt="person.name" />

                <p class="movie-title">{{ person.name }}</p>
            </div>
        </div>
        <h3>Filmler</h3>
        <div v-if="movies.length === 0">Sonuç bulunamadı.</div>
        <div v-else class="items">
            <div class="movie-item" v-for="movie in movies" :key="movie.id">
                <movie-card :movie="movie" />
            </div>
        </div>

        <h3>TV Şovları</h3>
        <div v-if="tvShows.length === 0">Sonuç bulunamadı.</div>
        <div v-else class="items">
            <div class="movie-item" v-for="tvShows in tvShows" :key="tvShows.id">
                <movie-card :movie="tvShows" />
            </div>
        </div>
    </div>
</template>
  
<script>
import MovieCard from '@/components/movie-card.vue';
export default {
    components: {
        MovieCard,
    },
    computed: {
        movies() {
            return this.$store.getters.getMovieResults;
        },
        tvShows() {
            return this.$store.getters.getTvShowResults;
        },
        person() {
            return this.$store.getters.getPersonResults;
        },
        query() {
            return this.$store.getters.getQuery;
        },
    }
};
</script>
  
<style scoped>
.items {
    display: flex;
    overflow-x: auto;
    padding: 20px;
    white-space: nowrap;
    margin-left: 40px;
}

.person-poster {
    width: 185px;
    height: 278px;
    object-fit: cover;
    border-radius: 10px;
}

.movie-item {
    width: 300px;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 300px;
}
</style>
  