<script setup>
import { RouterLink, RouterView } from 'vue-router';
import logo from '@/assets/logo.svg';
import menu from '@/assets/menu.svg';
</script>

<template>
    <section class="nav">
        <div>
            <img :src="logo" alt="">
        </div>
        <div>
            <ul class="list">
                <li >
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/movies">Movies</router-link>
                </li>
                <li>
                    <router-link to="/series">Series</router-link>
                </li>
            </ul>
        </div>
        <div class="mobile-menu">
            <img  :src="menu" alt="">
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            activeLink: 'movies',
        }
    },
  
    
}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.list{
    display: flex;
    list-style: none;
}

.list li{
    padding: 0px 1rem;
}

.list li a {
    color: rgba(26, 22, 22, 0.534);
    text-decoration: none;
}

.list li a.router-link-exact-active{
    color: black;
}

.mobile-menu{
    visibility: hidden;
}

@media screen and (max-width: 680px){
    .list {
        display: none;
    }

    .mobile-menu {
        visibility: visible;
    }
}
</style>