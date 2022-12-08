<template>
    <ul class="pagination" >
        <li v-if="currentPage > 1">
            <button @click="prevPage">Previous</button>
        </li>
        <li v-if="(currentPage > 3 && !isMobile)">
            <button @click="goToPage(1)">1</button>
        </li>
        <li v-if="(currentPage > 3 && !isMobile)">
            <span>...</span>
        </li>
        <li v-for="page in pages" :key="page">
            <button :class="{ active: page === currentPage }" @click="goToPage(page)">
                {{ page }}
            </button>
        </li>
        <li v-if="(currentPage < totalPages - 2 && !isMobile)">
            <span>...</span>
        </li>
        <li v-if="(currentPage < totalPages - 2 && !isMobile)">
            <button @click="goToPage(totalPages)">{{ totalPages }}</button>
        </li>
        <li v-if="currentPage < totalPages">
            <button @click="nextPage">Next</button>
        </li>
    </ul>
</template>
  
<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            isMobile: false,
        };
    },
    computed: {
        pages() {
            // Create an array of pages within a range of 2 pages before and 2 pages (desktop) after the current page
            const start = Math.max(1, this.currentPage - (this.isMobile ? 0 : 2));
            const end = Math.min(this.totalPages, this.currentPage + (this.isMobile ? 0 : 2));
            return Array.from(Array(end - start + 1), (_, x) => x + start);
        },
    },
    methods: {
        goToPage(page) {
            this.$emit('page-changed', page); // Emit the 'page-changed' event with the new page number
        },
        prevPage() {
            this.goToPage(this.currentPage - 1);
        },
        nextPage() {
            this.goToPage(this.currentPage + 1);
        },
        checkScreenSize() {
            this.isMobile = window.matchMedia('(max-width: 768px)').matches;
        },
    },
    created() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
}



.pagination li {
    display: inline-block;
    margin: 0 5px;
}

.pagination button {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 16px;
    text-align: center;
    transition: all 0.3s;
}

.pagination button:hover,
.pagination button:focus {
    background-color: #f5f5f5;
}

.pagination button.active {
    background-color: #007bff;
    color: #fff;
}
</style>
  