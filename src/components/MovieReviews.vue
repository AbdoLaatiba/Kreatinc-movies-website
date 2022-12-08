<template>
    <div>
      <h2 style="text-align: center;">Movie Reviews</h2>
      <br>
      <br>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <h3>{{ review.author }}</h3>
          <p>{{ review.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "MovieReviews",
    props: ['reviews']
  };
  </script>
<style scoped>
ul{
  list-style: none;
}

ul li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
}

</style>
