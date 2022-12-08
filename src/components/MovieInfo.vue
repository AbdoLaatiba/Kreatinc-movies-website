<template>
    <div class="genres">
      <h3>{{title}}: </h3>
      <ul>
        <li v-for="genre in data" :key="genre">
          {{ genre.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "MovieInfo",
    props: ['data', 'title']
  };
  </script>
<style scoped>
.genres {
    display: inline-block;
}
h2 {
  margin-bottom: 0.5em;
  margin-right: .5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
  display: inline-block;
  text-transform: capitalize;
  margin-right: .6rem;
  color: rgb(24, 24, 95);
  text-decoration: underline;
}
</style>
