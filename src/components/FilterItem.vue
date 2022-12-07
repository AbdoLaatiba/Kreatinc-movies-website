<template>
    <div>
        <h4>{{ title }}</h4>
        <select ref="select" @change="$emit('valueChange', $event.target.value)">
            <option v-for="item in items" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
    </div>
</template>

<script>
export default{
    props: ['title', 'items']
}
</script>

<style scoped>
div{
    padding: 1rem;
}
h4{
    margin-bottom: .5rem;
}
select{
    padding: .5rem;
    border: solid 1px rgba(68, 63, 63, 0.288);
    border-radius: .5rem;
    width: 100%;
}
</style>