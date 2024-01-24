<template>
    <div class="person-list">
      <div v-for="person in persons" :key="person.id" class="person-item">
        <img :src="'https://image.tmdb.org/t/p/original/' + person.profile_path" :alt="person.name" class="person-image" />
        <div class="person-info">
          <p class="person-name">{{ person.name }}</p>
          <p class="known-for">{{ person.known_for.map(item => item.title).join(', ') }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    computed: {
      persons() {
        return this.$store.getters.getPersons;
      },
    },
  };
  </script>
  
  <style scoped>
  .person-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  .person-item {
    width: calc(25% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
  }
  
  .person-image {
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .person-info {
    padding: 10px;
  }
  
  .person-name {
    font-weight: bold;
  }
  
  .known-for {
    font-size: 0.9rem;
    color: #888;
  }

  @media (max-width: 1200px) {
    .person-item {
        width: calc(33.3% - 20px);
    }
  }

  @media (max-width: 900px) {
    .person-item {
        width: calc(50% - 20px);
    }
  }

  @media (max-width: 767px) {
    .person-item {
        width: calc(100% - 20px);
    }
  }

  @media (max-width: 479px) {
    .person-item {
        width: 100%;
    }
  }

  </style>
  