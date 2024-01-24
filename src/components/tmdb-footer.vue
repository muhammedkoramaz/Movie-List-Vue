<template>
  <footer class="tmdb-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="@/assets/logo.png" alt="TMDB Logo" />
      </div>
      <div class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/movies">Movies</router-link>
        <router-link to="/tv-shows">TV Shows</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 TMDB. All rights reserved.</p>
    </div>
  </footer>
</template>
  
<script>
export default {
  // Bileşenin içeriği
};
</script>
  
<style scoped>
.tmdb-footer {
  background-image: radial-gradient(at 30%top, #031d33 0%, rgba(3,37,65, 1) 70%);
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 20px 0;
  height: 200px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo img {
  max-width: 100px;
  margin: 50px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
}
</style>
  