<template>
    <div>
        <movie-list title="En Çok Oy Alan Diziler" api-url="https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1" />
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
