<template>
    <div class="trend-movies-list">
        <div class="row">
            <h2>İzlemek Ücretsiz</h2>
            <div class="button-container">
                <filter-button v-for="button in buttons" :key="button.filterName" :filterName="button.filterName"
                    :currentFilter="Type" :buttonText="button.buttonText" @filter-click="dispatchBtn" />
            </div>
        </div>
        <div class="movie-list-container">
            <div class="movie-list" ref="movieList">
                <div v-for="movie in forFrees" :key="movie.id" class="movie-item">
                    <movie-card class="card" :movie="movie" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import MovieCard from "@/components/movie-card-without-bg.vue";
import FilterButton from "@/components/filter-button.vue";
import { FOR_FREE_BUTTONS } from "@/constant/buttons.js";
export default {
    data() {
        return {
            Type: 'movie',
            forFree: [],
            buttons: FOR_FREE_BUTTONS,
        };
    },

    components: {
        MovieCard,
        FilterButton,
    },
    methods: {
        dispatchBtn(type) {
            this.Type = type;
            switch (type) {
                case 'tv':
                    this.$store.dispatch('fetchFreeTV').then(() => {
                        this.forFree = this.$store.getters.getFreeTV;
                    });
                    break;
                case 'movie':
                    this.$store.dispatch('fetchFreeMovie').then(() => {
                        this.forFree = this.$store.getters.getFreeMovie;
                    });
                    break;
                default:
                    break;
            }
        },
    },
    computed: {
        forFrees: {
            get() {
                return this.Type === 'tv'
                    ? this.$store.getters.getFreeTV
                    : this.$store.getters.getFreeMovie;
            },
            set() {
            },
        },
    },

    created() {
        this.$store.dispatch('fetchFreeMovie');
        this.forFrees = this.$store.getters.getFreeMovie;

    }
};
</script>
  
<style scoped>
.trend-movies-list {
    text-align: left;
    width: 100%;
    margin-left: 10px;
}

.movie-list-container {
    overflow: hidden;
}


.movie-list {
    display: flex;
    overflow-x: auto;
    scroll-behavior: auto;
}

.movie-item {
    margin-right: 20px;
    flex-shrink: 0;
    width: 150px;
    text-align: left;
}

img {
    max-width: 150px;
    margin-left: 15px;
}

p {
    margin: 0;
    padding-left: 20px;
    text-align: left;
    padding-top: 10px;
}

.card {
    width: 150px;
    margin-right: 20px;
    margin-left: 3px;
}

.row {
    display: flex;
    justify-items: left;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 10px;

}

.button-container {
    display: flex;
    margin-left: 10px;
    border: 1px solid rgba(30, 213, 169, 1);
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    height: auto;
}

.button-container div {
    text-align: center;
    font-weight: bolder;
}

.button-container div span {
    display: block;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    background-color: transparent;
    color: #022541;
    width: 100px;
}

.button-container div.active span {
    /* background: linear-gradient(to right, #c0fecf 0, #1ed5a9 100%); */
    background-color: rgba(30, 213, 169, 1);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.button-container div.active {
    background-color: #022541;
    height: fit-content;
    border-radius: 50px;
}
</style>
  