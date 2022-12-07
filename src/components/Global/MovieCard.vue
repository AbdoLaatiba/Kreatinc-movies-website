<script setup>
import placeholder from '@/assets/placeholder.jpg';
</script>

<template>
    <div class="movie-card">
  <img :src="placeholder" alt="Movie poster">
  <h2 class="movie-title">Movie Title</h2>
  <p class="movie-rating">4.5 ★</p>
  <div class="movie-actions">
    <button class="add-to-watchlist-btn">Add to Watchlist</button>
    <button class="show-details-btn">Show Details</button>
  </div>
</div>
</template>

<script>
export default {

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
  
  .movie-card .movie-actions .add-to-watchlist-btn {
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
  .movie-card .movie-actions .show-details-btn:hover , .movie-card .movie-actions .add-to-watchlist-btn:hover {
    text-decoration: underline;
  }
</style>