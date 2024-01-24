<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <WelcomeSection />
    <TrendMovieList class="margin" />
    <VideoList />
    <WhatsPopular class="margin" />
    <ForFree class="margin" />
  </div>
</template>
<script>
import WelcomeSection from "@/components/welcome-section.vue";
import TrendMovieList from "@/components/trend-movie-list.vue";
import VideoList from "@/components/video-list.vue";
import WhatsPopular from "@/components/whats-popular.vue";
import ForFree from "@/components/for-free.vue";

export default {
  components: {
    WelcomeSection,
    TrendMovieList,
    VideoList,
    WhatsPopular,
    ForFree,
  },
};
</script>

<style scoped>
.margin {
  width: 86%;
  margin: 0 auto;
}
</style>