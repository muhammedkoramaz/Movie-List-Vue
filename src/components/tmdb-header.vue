<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="TMDb Logo" />
      </router-link>
    </div>
    <div class="menu">
      <div class="dropdown">
        <p class="dropdown-toggle">Filmler</p>
        <div class="dropdown-menu">
          <router-link to="/movies/popular">Popüler</router-link>
          <router-link to="/movies/now-playing">Gösterimdekiler</router-link>
          <router-link to="/movies/upcoming">Yakında</router-link>
          <router-link to="/movies/top-rated">En Fazla Oy Alanlar</router-link>
        </div>
      </div>
      <div class="dropdown">
        <p class="dropdown-toggle">Diziler</p>
        <div class="dropdown-menu">
          <router-link to="/tv/popular">Popüler</router-link>
          <router-link to="/tv/airing-today">Günün Programı</router-link>
          <router-link to="/tv/on-the-air">Şu An TV'de</router-link>
          <router-link to="/tv/top-rated">En Fazla Oy Alanlar</router-link>
        </div>
      </div>
      <div class="dropdown">
        <p class="dropdown-toggle">Kişiler</p>
        <div class="dropdown-menu">
          <router-link to="/person">Popüler</router-link>
        </div>
      </div>
      <div class="dropdown">
        <p class="dropdown-toggle">Daha Fazla</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgb(3, 37, 65, 1);
  color: #fff;
  margin: 0;
  height: 50px;
  width: 100%;
}

.logo img {
  max-width: 150px;
  margin-left: 50px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 45px;
  margin-bottom: 3px;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 35px;
}

.dropdown-toggle {
  cursor: pointer;
  font-weight: bolder;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  flex-direction: column;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 165px;
  z-index: 1;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu a {
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}
</style>
