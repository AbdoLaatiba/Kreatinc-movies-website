
<script setup>
import FilterItem from '../FilterItem.vue';
</script>

<template>
    <div class="filter-wraper">
        <h3 style="margin-bottom: 1rem;">Filter</h3>
        <FilterItem title="Genre" :items="genres" @value-change="filterGenre($event)" />
        <FilterItem title="Rating" :items="ratings" @value-change="filterRating($event)" />
        <FilterItem title="Language" :items="languages" @value-change="filterLanguage($event)" />
        <button>Apply Filters</button>
    </div>
</template>

<script>
export default {
    components: { FilterItem },
    data() {
        return {
            genres: [
                {
                    id: 1,
                    name: 'Drama'
                },
                {
                    id: 2,
                    name: "Action"
                },
                {
                    id: 3,
                    name: "Science Fiction"
                }
            ],
            ratings: [
                {
                    id: 1,
                    name: '1 Star'
                },
                {
                    id: 2,
                    name: '2 Star'
                },
                {
                    id: 3,
                    name: '3 Star'
                },
                {
                    id: 4,
                    name: '4 Star'
                },
                {
                    id: 5,
                    name: '5 Star'
                }
            ],
            languages: [
                {
                    id: 1,
                    name: 'English'
                },
                {
                    id: 2,
                    name: "French"
                },
                {
                    id: 3,
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
        }
    }


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