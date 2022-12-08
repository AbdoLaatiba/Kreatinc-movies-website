<script setup>
import FilterBar from './components/FilterBar.vue';
import Navigation from './components/Navigation.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <header class="container" style="position: relative;">
    <Navigation />
    
  </header>


  <main class="container" :class="{'main-layout': $route.name != 'movie'}">
    <section v-if="$route.name == 'movie' ? false : true">
      <SearchBar style="margin-bottom: 1rem;" @handle-submit="handleSubmit($event)"/>
      <FilterBar @filter="handleFilter($event)" />
    </section>
    <section>
      <RouterView />
    </section>
  </main>
</template>


<script >
export default {
    data() {
        return {
            value: this.$route.query.q ?? "",
        };
    },
    // computed: {
    //   showSideBar(){
    //       return this.$route.name
    //   }
    // },
    methods: {
        handleSubmit(value) {
            // this.$router.replace({ name: 'search', query: { q: value }}); // Navigate to the search results page (when the param changes the component does not remount)
            window.location.href = "/search?q=" + value.split(" ").join("+"); // Navigate to the search results page
        },
        handleFilter({ genre, language, rating }) {
            window.location.href = `/filter${genre != null ? "?genre=" + genre : ""}${language != null ? "&language=" + language : ""}${rating != null ? "&rating=" + rating : ""}`;
        }
    },
}
</script>

<style scoped>
.main-layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}



@media screen and (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}
</style>