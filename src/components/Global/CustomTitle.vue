<script setup></script>

<template>
    <div class="title-bg">
        <h3>{{ title }}</h3>

    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.title-bg {
    padding:0px 0px 2rem 0px;
}

h3{
    font-weight: bold;
}
</style>