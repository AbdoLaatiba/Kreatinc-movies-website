<script setup>
import { RouterLink, RouterView } from 'vue-router';
import logo from '@/assets/logo.svg';
</script>

<template>
    <section class="nav">
        <div class="logo">
            <img :src="logo" alt="">
        </div>
        <div>
            <ul class="list">
                <li >
                    <router-link to="/">Home</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link to="/auth">Signin</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link to="/watch">Watch list</router-link>
                </li>

                <li v-if="isLoggedIn">
                    <button @click="logOut">Logout</button>
                </li>
            </ul>
        </div>

    </section>
</template>

<script>
export default {
    data(){
        return {
            activeLink: 'movies',
            isLoggedIn: JSON.parse(localStorage.getItem('loggedIn')),
        }
    },
    methods: {
        logOut(){
            localStorage.setItem('loggedIn', false);
            this.isLoggedIn = false;

            location.href = '/';
        }
    }
    
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
    white-space: nowrap;
}

.list li:first-of-type{
    padding: 0px 0rem;
}

.list li a {
    color: rgba(73, 66, 66, 0.918);
    text-decoration: none;
}

.list li a.router-link-exact-active{
    color: black;
}





button{
    border: none;
    background-color: transparent;
    color: rgba(73, 66, 66, 0.918);
    font-size: 15px;
    font-weight: 400px;
}


@media screen and (max-width: 568px){
    .logo {
        display: none;
    }

}
</style>