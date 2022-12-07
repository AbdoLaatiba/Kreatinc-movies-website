<script setup>
import FilterBar from '../components/Global/FilterBar.vue';
import SearchBar from '../components/Global/SearchBar.vue';
import CustomTitle from '../components/Global/CustomTitle.vue';
import MovieCard from '../components/Global/MovieCard.vue';

</script>

<template>
  <main class="main-layout container">
    <section>
      <SearchBar style="margin-bottom: 1rem;"/>
      <FilterBar />
    </section>
    <section style="height: 200vh;">
      <CustomTitle title="Editor choice"/>
      <section class="editor-movies">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    </section>
  </main>
</template>

<script>
export default {
  components: {
    FilterBar,
    SearchBar,
    CustomTitle,
    MovieCard
}
}
</script>

<style scoped>
.main-layout{
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}

.editor-movies{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: .5rem;
}

@media screen and (max-width: 980px){
  .main-layout{
    grid-template-columns: 1fr;
  }
}
</style>
