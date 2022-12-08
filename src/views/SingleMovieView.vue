<!-- <script setup>
    import Pagination from '@/components/Global/Pagination.vue';
</script> -->

<template>
    <section class="movie-info">
        <article>
            <h4 class="movie-title">{{ (movie.title ?? movie.name) }}</h4>
            <h4 class="movie-rating">{{ Number(movie.vote_avarage ?? 5.5).toFixed(1) }}★</h4>
            <p>
                {{ movie.overview }}.
            </p>

            <br>

            <MovieInfo title="Production Companies" :data="movie.production_companies" />
            <br>

            <MovieInfo title="Genres" :data="movie.genres" />
            <br>
            <MovieInfo title="Production Countries" :data="movie.production_countries" />

            <br>
            <MovieInfo title="Spoken Languages" :data="movie.spoken_languages" />

            <br>
        </article>
        <article class="movie-poster">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="">
        </article>



    </section>

    <section>
        <article class="cast-crew">
            <CastMembers title="Cast" :data="cast" class="member" />



            <CastMembers title="Crew" :data="crew" class="member" />
        </article>

        <br>
        <br>

        <article>

            <MovieReviews :reviews="reviews" v-if="(reviews.length > 0)" />
            <br>
            <Pagination
            v-if="(totalPages > 1)"     
                :currentPage="currentPage" 
                :totalPages="totalPages"
                @page-changed="getMovieReviews($event)"
            />
        </article>
    </section>
</template>
<script>
import CastMembers from '../components/CastMembers.vue';
import MovieInfo from '../components/MovieInfo.vue';
import MovieReviews from '../components/MovieReviews.vue';
import Pagination from '../components/Pagination.vue';


import MovieDB from '../Utils/MovieDB';

export default {
    name: "SingleMovieView",
    data() {
        return {
            movie: {},
            cast: [],
            crew: [],
            currentPage: 1,
            totalPages: 1,
            reviews: [],
        };
    },
    methods: {
        getMovieDetails() {
            this.movieDB.getMovieDetails(this.$route.params.id).then(data => this.movie = data);
        },
        getCastCrew() {
            this.movieDB.getCastCrew(this.$route.params.id).then(data => {
                this.cast = data.cast.slice(0, 10);
                this.crew = data.cast.slice(0, 10);
            });
        },
        getMovieReviews(page) {
            this.movieDB.getMovieReviews(this.$route.params.id, page).then(data => {
                this.reviews = data.reviews;
                this.currentPage = data.currentPage;
                this.totalPages = data.totalPages;
            });
        }
    },
    created() {
        this.getMovieDetails();
        this.getCastCrew();
        this.getMovieReviews(1);
    },
    setup() {
        const movieDB = new MovieDB();
        // expose to template and other options API hooks
        return {
            movieDB
        };
    },
    components: { CastMembers, MovieInfo, MovieReviews, Pagination }
}
</script>
<style scoped>
.movie-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    grid-gap: 20px;
    display: grid;
}

.movie-title,
.movie-rating {
    margin: .5rem 0;
    font-size: 2rem;
}

.movie-poster img {
    width: 100%;
    height: 500px;
}

.cast-crew {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.cast-crew .member {
    flex: 1 1 auto;
}

.production {
    list-style-type: none;
    padding: 0;
}

.production li {
    font-size: 1.2em;
    margin-bottom: 0.5em;
}
</style>