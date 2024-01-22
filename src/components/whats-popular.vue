<template>
    <div class="trend-movies-list">
        <div class="row">
            <h2>Popüler Olanlar</h2>
            <div class="button-container">
                <div @click="showPopular('streaming')" :class="{ active: filterName === 'streaming' }"><span>Yayın
                        Akışı</span></div>
                <div @click="showPopular('onTv')" :class="{ active: filterName === 'onTv' }"><span>Televizyonda</span></div>
                <div @click="showPopular('onRent')" :class="{ active: filterName === 'onRent' }"><span>Kiralık</span></div>
                <div @click="showPopular('onThreath')" :class="{ active: filterName === 'onThreath' }">
                    <span>Sinemalarda</span>
                </div>
            </div>
        </div>
        <div class="movie-list-container">
            <div class="movie-list" ref="movieList">
                <div v-for="movie in whatsPopular" :key="movie.id" class="movie-item">
                    <movie-card class="card" :movie="movie" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import MovieCard from "@/components/movie-card-without-bg.vue";
export default {
    data() {
        return {
            filterName: 'streaming',
        };
    },
    components: {
        MovieCard,
    },
    methods: {
        showPopular(time) {
            this.filterName = time;
            switch (time) {
                case 'onTv':
                    this.$store.dispatch('fetchOnTv').then(() => {
                        this.whatsPopular = this.$store.getters.getOnTv;
                    });
                    break;
                case 'streaming':
                    this.$store.dispatch('fetchWhatsPopular').then(() => {
                        this.whatsPopular = this.$store.getters.getWhatsPopular;
                    });
                    break;
                case 'onRent':
                    this.$store.dispatch('fetchForRent').then(() => {
                        this.whatsPopular = this.$store.getters.getForRent;
                    });
                    break;
                default:
                    break;
            }
        },
    },
    computed: {
        whatsPopular: {
            get() {
                return this.filterName == 'streaming'
                    ? this.$store.getters.getWhatsPopular
                    : this.filterName == 'onTv'
                        ? this.$store.getters.getOnTv
                        : this.$store.getters.getForRent;
            },
            set() {
            },
        },
    },

    created() {
        this.$store.dispatch('fetchWhatsPopular');
        this.whatsPopular = this.$store.getters.getWhatsPopular;
    },
};
</script>
  
<style scoped>
h2 {
    color: #022541;
}
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
  