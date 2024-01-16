<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <WelcomeSection />
        <TrendMovieList />
    </div>
</template>
<script>
import WelcomeSection from "@/components/welcome-section.vue";
import TrendMovieList from "@/components/trend-movie-list.vue";

export default {
  components: {
    WelcomeSection,
    TrendMovieList,
  },
};
</script>