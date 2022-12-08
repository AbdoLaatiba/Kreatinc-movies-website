<script setup>
import placeholder from '@/assets/placeholder.jpg';
</script>

<template>
    <div class="movie-card bg-white">
  <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="Movie poster">
  <h2 class="movie-title">{{ movie.title ?? movie.name }}</h2>
  <p class="movie-rating">{{ Number(movie.vote_average ?? 5.5).toFixed(1) }}★</p>
  <div class="movie-actions">
    <button class="add-to-watchlist-btn" @click="addToWatchList(movie.id)">Add to Watchlist</button>
    <button class="remove-from-watchlist-btn" @click="removeFromWatchList(movie.id)" v-if="$route.name == 'watch'">Remove From Watchlist</button>
    <button class="show-details-btn" @click="$router.push({name: 'movie', params: { name: movie.title.split(' ').join('-') ?? movie.name.split(' ').join('-'), id: movie.id}})">Show Details</button>
  </div>
</div>
</template>

<script>
export default {
  props: ['movie'],
  methods: {
    addToWatchList(id){
      let user = JSON.parse(localStorage.getItem('user'));
      if (!user.watchList.includes(id)) {
        user.watchList.push(id);
        localStorage.setItem('user', JSON.stringify(user));
      alert('movie added to watch list');
      }else{
        alert('movie is already in your watch list');
      }

      
    },
    removeFromWatchList(id){
      let user = JSON.parse(localStorage.getItem('user'));
     
        user.watchList = user.watchList.filter(el => el != id);
        localStorage.setItem('user', JSON.stringify(user));
  
      alert('movie removed from watch list');
    location.reload();    

      
    }
  }
}
</script>

<style scoped>
.movie-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .5rem;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  
  .movie-card img {
    width: 100%;
    height: auto;
    border-radius: .5rem .5rem 0 0;
  }
  
  .movie-card .movie-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    padding: 0 .3rem;
    text-align: center;
  }
  
  .movie-card .movie-rating {
    font-size: 14px;
    color: gray;
    margin-top: 5px;
  }
  
  .movie-card .movie-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
  }
  
  .movie-card .movie-actions .add-to-watchlist-btn ,.remove-from-watchlist-btn {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: none;
    background-color: transparent;
    color: rgb(27, 115, 216);
    cursor: pointer;
  }
  
  .movie-card .movie-actions .show-details-btn {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: none;
    background-color: transparent;
    color: rgb(73, 34, 22);
    cursor: pointer;
  }
  .movie-card .movie-actions .show-details-btn:hover , .movie-card .movie-actions .add-to-watchlist-btn:hover .remove-from-watchlist-btn:hover{
    text-decoration: underline;
  }

  .remove-from-watchlist-btn{
    color: red;
  }
</style>