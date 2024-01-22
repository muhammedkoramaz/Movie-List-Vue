<template>
  <section class="welcome-section">
    <img class="background-image" src="@/assets/film-background.jpeg" alt="Film Background" />
    <div class="overlay"></div>
    <div class="content-container">
      <h1>Hoş Geldiniz</h1>
      <p>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</p>
      <div>
        <form class="search-container" @submit.prevent="search">
          <input type="text" v-model="searchQuery" placeholder="Film, dizi, kişi arayın..." />
          <button type="submit">Ara</button>
        </form>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ path: "/search-results" });
      this.$store.commit('setQuery', this.searchQuery);
      this.$store.dispatch("performSearch");
    },
  },
};
</script>
  
<style scoped>
.welcome-section {
  position: relative;
  text-align: left;
  color: #fff;
  width: 90%;
  margin: 0 auto;
  height: 600px;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(100%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 75, 129, 0.65);
  z-index: -1;
}

.content-container {
  padding: 100px 20px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  flex-direction: row;
}

input {
  padding: 10px;
  width: 60%;
  margin-right: 10px;
  border-radius: 50px;
  border: none;
}

button {
  padding: 10px 26px;
  background: linear-gradient(to right, rgba(30, 213, 169) 0%, rgba(1, 180, 228) 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px;
}
</style>
  