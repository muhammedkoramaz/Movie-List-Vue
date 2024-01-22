<template>
    <div>
      <h1>Popüler Kişiler</h1>
      <person-list />
    </div>
  </template>
  
  <script>
  import PersonList from '@/components/person-list.vue';
  
  export default {
    components: {
      PersonList,
    },
    created() {
      this.$store.dispatch('fetchPopularPersons');
    },
  };
  </script>
  