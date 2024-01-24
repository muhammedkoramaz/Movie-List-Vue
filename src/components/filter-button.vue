<template>
  <div :class="{ active: isActive }" @click="handleClick">
    <span>{{ buttonText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    filterName: String,
    currentFilter: String,
    buttonText: String,
  },
  computed: {
    isActive() {
      return this.filterName === this.currentFilter;
    },
  },
  methods: {
    handleClick() {
      this.$emit("filter-click", this.filterName);
    },
  },
};
</script>
  
<style scoped>
div span {
  display: block;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  color: #022541;
  width: 100px;
}

div.active span {
  background-color: rgba(30, 213, 169, 1);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

div.active {
  background-color: #022541;
  height: fit-content;
  border-radius: 50px;
}

div {
  text-align: center;
  font-weight: bolder;
  display: block;
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  color: #022541;
  width: 100px;
  text-align: center;
}
</style>
  