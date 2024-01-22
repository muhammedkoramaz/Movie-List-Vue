<template>
    <div>
        <card-list title="Gösterimdeki Filmler" :movies="movies"/>
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
            return this.$store.getters.getNowPlayingMovies;
        },
    },
    created() {
        this.$store.dispatch('fetchNowPlayingMovies');
    },
};
</script>
