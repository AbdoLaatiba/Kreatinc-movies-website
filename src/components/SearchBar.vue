<script setup></script>

<template>
    <div class="search-wraper ">
        <h4>Search</h4>
        <input type="text" class="input" placeholder="search movies..." v-model="query"  @keyup.enter="handleSubmit">
    </div>
</template>

<script>
export default {
    data(){
        return {
            query: this.$route.query.q ?? '',
        }
    },
    methods: {
        handleSubmit(event) {
      this.$emit('handle-submit', event.target.value);
    },
    created(){
        this.query = this.$route.query.q;
    }
  },
}
</script>

<style scoped>
.input {
    padding: .5rem;
    border: solid 1px rgba(68, 63, 63, 0.288);
    border-radius: .5rem;
    width: 100%;
    margin-top: 1rem;
    outline: none;
}

.search-wraper {
    padding: 1rem;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    border-radius: .5rem;
}
</style>