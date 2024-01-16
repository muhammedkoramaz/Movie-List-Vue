<template>
    <div>
        <movie-list title="Bugün Başlayan Diziler" api-url="https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1" />
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
