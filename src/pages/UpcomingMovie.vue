<template>
    <div>
        <card-list title="Vizyona Girecek Filmler" :movies="movies" />
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
            return this.$store.getters.getUpComingMovies;
        },
    },
    created() {
        this.$store.dispatch('fetchUpComingMovies');
    },
};
</script>
