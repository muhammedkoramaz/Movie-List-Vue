<template>
    <div>
        <card-list title="En Çok Oy Alan Filmler" :movies="movies" />
    </div>
</template>
  
<script>
import CardList from '@/components/card-list.vue';

export default {
    components: {
        CardList,
    },
    computed: {
        movies() {
            return this.$store.getters.getTopRatedMovies;
        },
    },
    created() {
        this.$store.dispatch('fetchTopRatedMovies');
    },
};
</script>
