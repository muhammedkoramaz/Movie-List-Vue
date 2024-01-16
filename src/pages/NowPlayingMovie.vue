<template>
    <div>
        <movie-list title="Gösterimdeki Filmler" api-url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" />
    </div>
</template>
  
<script>
import MovieList from '@/components/movie-list.vue';

export default {
    components: {
        MovieList,
    },
};
</script>
