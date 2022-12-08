
<script setup>
import FilterItem from './FilterItem.vue';
</script>

<template>
    <div class="filter-wraper bg-white">
        <h3 style="margin-bottom: 1rem;">Filter</h3>
        <FilterItem title="Genre" :items="genres" @value-change="filterGenre($event)" />
        <FilterItem title="Rating" :items="ratings" @value-change="filterRating($event)" />
        <FilterItem title="Language" :items="languages" @value-change="filterLanguage($event)" />
        <button @click="applyFilters">Apply Filters</button>
    </div>
</template>

<script>
import MovieDB from '@/Utils/MovieDB';
export default {
    components: { FilterItem },
    data() {
        return {
            genres: [],
            ratings: [
                {
                    id: 1,
                    name: '1 Star'
                },
                {
                    id: 2,
                    name: '2 Stars'
                },
                {
                    id: 3,
                    name: '3 Stars'
                },
                {
                    id: 4,
                    name: '4 Stars'
                },
                {
                    id: 5,
                    name: '5 Stars'
                },
                {
                    id: 6,
                    name: '6 Stars'
                },
                {
                    id: 7,
                    name: '7 Stars'
                },
                {
                    id: 8,
                    name: '8 Stars'
                },
                {
                    id: 9,
                    name: '9 Stars'
                }
            ],
            languages: [
                {
                    id: 'en',
                    name: 'English'
                },
                {
                    id: 'fr',
                    name: "French"
                },
                {
                    id: 'ar',
                    name: "Arabic"
                },
            ],
            selectedGenre: null,
            selectedRating: null,
            selectedLanguage: null,
        }
    },
    methods: {
        filterGenre(val) {
            this.selectedGenre = val;
        },
        filterRating(val) {
            this.selectedRating = val;
        },
        filterLanguage(val) {
            this.selectedLanguage = val;
        },
        getGenres(){
            const movieDB = new MovieDB();
            movieDB.getGenres().then(data => this.genres = data.genres)
        },
        applyFilters(){
            if (this.selectedGenre != null || this.selectedLanguage != null || this.selectedRating != null) {
                this.$emit('filter', {
                genre: this.selectedGenre ?? this.$route.query.genre ,
                language: this.selectedLanguage ?? this.$route.query.language,
                rating: this.selectedRating ?? this.$route.query.rating
            });
            }else{
                alert('Please choose at least one filter');
            }
            
        },
        fillFields(){
            const urlParams = new URLSearchParams(window.location.href);

            console.log(urlParams);
            // this.selectedGenre = this.$route.query.genre;
            // this.selectedLanguage = this.$route.query.language;
            // this.selectedRating = this.$route.query.rating;
        }
    },
    created(){
        this.getGenres();
        this.fillFields();
        
    },


}
</script>

<style scoped>
select:checked {
    border: solid 1px rgba(68, 63, 63, 0.288);
    outline: none;
}

.filter-wraper {
    padding: 1rem;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    border-radius: .5rem;
}

button {
    padding: 1rem;
    background-color: rgb(44 152 215);
    border: none;
    border-radius: .5rem;
    margin: 0 1rem;
    color: white;
    font-weight: bold;
}
</style>