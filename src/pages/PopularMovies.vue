<template>
    <div>
        <card-list title="Popüler Filmler" :movies="movies"  />
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
            return this.$store.getters.getTrendMovies;
        },
    },
    created() {
        this.$store.dispatch('fetchTrendMovies');
    },
};
</script>
