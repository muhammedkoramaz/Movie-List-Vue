<template>
    <div>
        <movie-list title="Popüler Filmler" api-url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" />
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
