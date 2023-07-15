<template>
    <div class="paintdetails">
      <h1> paintdetails</h1>
      <p> {{ id }}</p>
      <p> {{ type }}</p>
    </div>
  </template>
  
  <script>
  
  export default {
    props: ['id'],
  
  }
  </script>