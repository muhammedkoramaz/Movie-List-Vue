<template>
    <div>
        <card-list title="Şu Anda Yayınlanan Diziler" :movies="movies"/>
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
            return this.$store.getters.getOnTheAirTv;
        },
    },
    created() {
        this.$store.dispatch('fetchOnTheAirTv');
    },
};
</script>
