<template>
    <div>
        <h2>Fragman</h2>
        <div>
            <youtube :video-id="thrailerUrl" :player-width="640" :player-height="390" />
        </div>
    </div>
</template>
  
<script>

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        movieId: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        this.fetchMovieVideos();
    },
    computed: {
        thrailerUrl() {
            return this.$store.getters.getThrailerUrl;
        },
    },
    methods: {
        async fetchMovieVideos() {
             this.$store.dispatch('fetchMovieVideos', { movieId: this.movieId, type: this.type });
        },
    },
};
</script>
  
<style scoped></style>
  