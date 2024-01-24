<template>
    <div>
        <card-list title="Bugün Başlayan Diziler" :movies="movies"/>
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
            return this.$store.getters.getAiringTodayTv;
        },
    },
    created() {
        this.$store.dispatch('fetchAiringTodayTv');
    },
};
</script>
