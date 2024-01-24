<template>
    <div>
        <card-list title="En Çok Oy Alan Diziler" :movies="movies"/>
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
            return this.$store.getters.getTopRatedTv;
        },
    },
    created() {
        this.$store.dispatch('fetchTopRatedTv');
    },
};
</script>
