<template>
    <div>
      <h2>{{title}}</h2>
      <ul>
        <li v-for="(member, index) in data" :key="index">
          <p>{{ member.name }}</p>
          <p>{{ member.character }}</p>
          <p>{{ member.department }}</p>
          <p>{{ member.job }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "CastMembers",
    props: {
      data: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
}

p {
  margin: 0;
}

p:first-of-type {
  font-weight: bold;
}
</style>

  