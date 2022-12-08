<script setup>
import CustomTitle from '../components/CustomTitle.vue';
import MovieCard from '../components/MovieCard.vue';

</script>

<template>
    <section>

      <!-- Editor picks sections -->
      <CustomTitle title="Editor choice"/>
      <section class="grid-movies">
        <MovieCard v-for="movie in editorChoiceMovies" :key="movie.id" :movie="movie"/>
       
      </section>
      <br><br>

      <!-- Main section display lastest movies filtered by most rated -->
      <CustomTitle title="Latest Movies"/>
      <section class="grid-movies">
        <MovieCard  v-for="movie in movies" :key="movie.id" :movie="movie" />
      </section>

      <br>
      <Pagination 
        v-if="(totalPages > 1)"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="getMovies($event)"
      />

      
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
data(){
  return {
    movies: [],
    editorChoiceMovies: [],
    currentPage: this.$route.query.page ?? 1,
    totalPages: 1,
  };
},
methods: {
  getMovies(page) {
    this.$router.push({ name: 'home', query:{ page: page}})
    const movieDB = new MovieDB(); // Create a new MovieDB object
    movieDB.getMovies(page) // Call the getMovies method
      .then(data => {
        this.movies = data.movies; // Update the component's data with the movie results
        this.currentPage = data.currentPage;
        this.totalPages = data.totalPages ;
      }).catch(err => {
        console.log(err);
      });

      // Scroll to the top of the page
      // window.scrollTo(0, 0);
    },

    getEditorChoiceMovies() {
    const movieDB = new MovieDB(); // Create a new MovieDB object
    movieDB.editorChoiceMovies() // Call the getMovies method
      .then(data => {
        this.editorChoiceMovies = data; // Update the component's data with the movie results
      })
      .catch(err => {
        console.log(err);
      });

      // Scroll to the top of the page
      // window.scrollTo(0, 0);
    },
    
},
created() {
    this.getMovies(this.$route.query.page ?? 1);
    this.getEditorChoiceMovies();
  },
}
</script>


