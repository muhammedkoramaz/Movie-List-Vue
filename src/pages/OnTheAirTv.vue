<template>
    <div>
        <movie-list title="Şu Anda Yayınlanan Diziler" api-url="https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1" />
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
