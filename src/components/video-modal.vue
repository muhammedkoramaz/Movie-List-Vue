<template>
  <div class="video-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div>
        <movie-video :movieId="movieId" :type="type" />
      </div>
    </div>
  </div>
</template>
  
<script>
import MovieVideo from "@/components/movie-video.vue";

export default {
  props: {
    showModal: Boolean,
    movieId: Number,
    type: String,
  },
  components: {
    MovieVideo,
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
  
<style scoped>
.video-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  filter: blur(8px);
  z-index: 1001;
}

.modal-content {
  position: relative;
  z-index: 1002;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #aaa;
}
</style>
  