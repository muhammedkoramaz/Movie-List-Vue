<template>
    <div class="person-list">
      <div v-for="person in persons" :key="person.id" class="person-item">
        <img :src="'https://image.tmdb.org/t/p/w185/' + person.profile_path" :alt="person.name" class="person-image" />
        <div class="person-info">
          <p class="person-name">{{ person.name }}</p>
          <p class="known-for">{{ person.known_for.map(item => item.title).join(', ') }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        persons: [],
      };
    },
    created() {
      this.fetchPopularPersons();
    },
    methods: {
      async fetchPopularPersons() {
        try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjAxMDcyZjYxMTEyNWYzODUyYmZhMmY2ODQzZmNhYiIsInN1YiI6IjYyMTI0NjEyM2Y0ODMzMDAxYzk1ZDEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFFarWR4jNmnkrLt0ZH428RZugAjHGOlLEpWKkBxBnk',
                    },
                };
                const response = await axios.get('https://api.themoviedb.org/3/trending/person/day?language=en-US', options);
                this.persons = response.data.results;
                console.log(this.movies);
            } catch (error) {
                console.error('Hata:', error);
            }
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
    height: auto;
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
  </style>
  