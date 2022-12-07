<script setup>
import placeholder from '@/assets/placeholder.jpg';
</script>

<template>
    <section class="movie-card">
        <article class="card-image">
            <img :src="placeholder" alt="">
            <div class="des">
                <h4>Spider-man homecomming</h4>
            <p>8 ★</p>
            </div>
        </article>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.movie-card{
    display: flex;
    justify-content: center;
    border-radius: .5rem;
    border: solid 1px rgba(73, 59, 59, 0.445);
}

.card-image{
    width: 100%;
}

h4{
    /* margin: .3rem 0; */
    font-weight: bold;

}

.des{
    padding: .2rem;
}

.card-image img {
    width: 100%;
    border-radius: .5rem .5rem 0 0;
}
</style>