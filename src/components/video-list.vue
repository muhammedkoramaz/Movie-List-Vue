<template>
    <div>
        <div class="trend-movies-list" ref="movieList">
            <div class="row">
                <h2>Son Fragmanlar</h2>
                <div class="button-container">
                    <div @click="dispatchBtn('popular')" :class="{ active: dispatchName === 'popular' }">
                        <span>Populer</span>
                    </div>
                    <div @click="dispatchBtn('streaming')" :class="{ active: dispatchName === 'streaming' }"><span>Yayın
                            Akışı</span></div>
                    <div @click="dispatchBtn('onTv')" :class="{ active: dispatchName === 'onTv' }"><span>Televizyonda</span>
                    </div>
                    <div @click="dispatchBtn('onRent')" :class="{ active: dispatchName === 'onRent' }"><span>Kiralık</span>
                    </div>
                    <div @click="dispatchBtn('onThreath')" :class="{ active: dispatchName === 'onThreath' }">
                        <span>Sinemalarda</span>
                    </div>
                </div>
            </div>
            <div class="movie-list-container">
                <div class="movie-list">
                    <div v-for="movie in whatsPopular" :key="movie.id" class="movie-item"
                        @click="playTrailer(movie.id, movie.release_date ? 'movie' : 'tv')">
                        <div class="movie-item-inner" @mouseover="setBackgroundImage(movie.backdrop_path)">
                            <img class="movie-poster" :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path"
                                :alt="movie.name" />
                            <img class="play" src="../assets/play.png" alt="Play Button" />
                        </div>
                        <div class="movie-info">
                            <p class="movie-title">{{ movie.title || movie.name }}</p>
                            <p class="movie-release-date">
                                {{ movie.first_air_date || movie.release_date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <video-modal v-if="showModal" :type="type" :movieId="movieId" :showModal="showModal" @close-modal="closeModal" />
    </div>
</template>
  
<script>
import VideoModal from "@/components/video-modal.vue";

export default {
    data() {
        return {
            showModal: false,
            movieId: "",
            dispatchName: 'popular',
            type: '',
        };
    },
    computed: {
        trendMovies() {
            return this.$store.getters.getTrendMovies;
        },
        backgroundImage: {
            get() {
                return this.$store.getters.whatsPopular[0].backdrop_path;
            },
            set() {

            }
        },
        whatsPopular: {
            get() {
                return this.dispatchName == 'popular'
                    ? this.$store.getters.getPopularTv
                    : this.dispatchName == 'streaming'
                        ? this.$store.getters.getWhatsPopular
                        : this.dispatchName == 'onTv'
                            ? this.$store.getters.getOnTv
                            : this.dispatchName == 'onRent'
                                ? this.$store.getters.getForRent
                                : this.$store.getters.getPopularTv;
            },
            set() {

            }
        },
    },
    methods: {
        setBackgroundImage(backdropPath) {
            console.log(backdropPath);
            this.$refs.movieList.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${backdropPath}')`;
        },
        playTrailer(movieId, type) {
            console.log(movieId);
            this.showModal = true;
            this.movieId = movieId;
            this.type = type;
        },
        closeModal() {
            this.showModal = false;
        },
        dispatchBtn(dispatchName) {
            this.dispatchName = dispatchName;
            switch (dispatchName) {
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
                case 'popular':
                    this.$store.dispatch('fetchPopularTv').then(() => {
                        this.whatsPopular = this.$store.getters.getPopularTv;
                    });
                    break;
                default:
                    break;
            }
        },
    },
    components: { VideoModal },
    created() {
        this.$store.dispatch('fetchPopularTv').then(() => {
            this.whatsPopular = this.$store.getters.getPopularTv;
            this.setBackgroundImage("/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg");
        });
    },
};
</script>
  
<style scoped>
h2 {
    color: #fff;
    font-weight: bolder;
}

.trend-movies-list {
    text-align: center;
    width: 90%;
    background-size: cover;
    object-fit: scale-down;
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
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
    width: 350px;
    text-align: left;
    height: 100%;
}

.movie-item-inner {
    height: 100%;
}

.movie-item-inner:hover {
    border-radius: 20px;
    cursor: pointer;
    transform: scale(1.01);
}

.movie-poster {
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
    width: 100%;
}

.play{
    position: relative;
    align-self: center;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -450%);
    width: 25px;
    height: 25px;
    opacity: 1;
}

.movie-info {
    width: 100%;
    color: black;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

p {
    margin: 0;
    color: #fff;
    padding-top: 5px;
}

.movie-title {
    font-size: 1rem;
    font-weight: bolder;
}

.movie-release-date {
    font-size: 0.8rem;
    color: #fff;
}

.button-container {
    display: flex;
    margin-left: 10px;
    border: 1px solid rgba(30, 213, 169, 1);
    border-radius: 50px;
    align-items: center;

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
    color: #fff;
    width: 100px;
}

.button-container div.active span {
    background-color: #022541;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.button-container div.active {
    background-color: rgba(30, 213, 169, 1);
    height: fit-content;
    border-radius: 50px;
}
.row {
    display: flex;
    justify-items: left;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 10px;

}
</style>
  