<script setup>
import CustomTitle from '../components/CustomTitle.vue';
import MovieCard from '../components/MovieCard.vue';

</script>

<template>
  <section>

    <!-- Editor picks sections -->
    <CustomTitle title="Filtered Movies" />
    <section class="grid-movies">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />

    </section>
    <br><br>


    <br>
    <Pagination v-if="(totalPages > 1)" :currentPage="currentPage" :totalPages="totalPages" @page-changed="filterMovies({
      genre: this.$route.query.genre ?? null,
      language: this.$route.query.language ?? null,
      rating: this.$route.query.rating ?? null
    }, $event)" />


  </section>
</template>

<script>
import MovieDB from '@/Utils/MovieDB';
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    CustomTitle,
    MovieCard,
    Pagination,
  },
  data() {
    return {
      movies: [],
      currenrPage: this.$route.query.page ?? 1,
      totalPages: 1,
    };
  },
  methods: {
    filterMovies(query, page) {
      this.$router.push({name: 'filter', query: { genre: this.$route.query.genre, language: this.$route.query.language, rating: this.$route.query.rating, page: page}});
      const movieDB = new MovieDB(); // Create a new MovieDB object
      movieDB.filterMovies(query, page) // Call the getMovies method
        .then(data => {
          this.movies = data.movies; // Update the component's data with the movie results
          this.currentPage = data.currentPage;
          this.totalPages = data.totalPages;
        });

      // Scroll to the top of the page
      // window.scrollTo(0, 0);
    },


  },
  created() {
    this.filterMovies({
      genre: this.$route.query.genre ?? null,
      language: this.$route.query.language ?? null,
      rating: this.$route.query.rating ?? null
    }, this.$route.query.page ?? 1);
  },
}
</script>


