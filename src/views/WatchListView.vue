<script setup>
import CustomTitle from '../components/CustomTitle.vue';
import MovieCard from '../components/MovieCard.vue';

</script>

<template>
    <section>

      <!-- Editor picks sections -->
      <CustomTitle title="Your watch list"/>
      <section class="grid-movies">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
        
        
      </section>

      <h1 v-if="(movies.length === 0)">Your watch list is empty</h1>
      
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
    user: JSON.parse(localStorage.getItem('user')),
    currentPage: 1,
    totalPages: 1
  };
},
methods: {
  getWatchListMovies() {
    const movieDB = new MovieDB(); // Create a new MovieDB object
    this.user.watchList.map(el => {
      movieDB.getWatchListMovies(el) // Call the getWatchListMovies method
      .then(movie => {
        if (movie.success == false) {
          // the id is not working
          this.user.watchList = this.user.watchList.filter(id => id != el); // remove the id from the watch list
          localStorage.setItem('user', JSON.stringify(this.user));
        }else{
          this.movies.push(movie);
        } // Update the component's data with the movie results
      });
    })
    

    },

    
},
created() {
    this.getWatchListMovies();
  },
}
</script>


