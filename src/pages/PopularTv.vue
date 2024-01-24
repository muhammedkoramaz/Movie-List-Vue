<template>
    <div>
        <card-list title="Popular Diziler" :movies="movies"/>
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
            return this.$store.getters.getPopularTv;
        },
    },
    created() {
        this.$store.dispatch('fetchPopularTv');
    },
};
</script>
