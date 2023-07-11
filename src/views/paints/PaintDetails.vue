<template>
    <div class="paintdetails">
      <h1> paintdetails</h1>
      <p> {{ id }}</p>
    </div>
  </template>
  
  <script>
  
  export default {
   data(){
    return {
        id: this.$route.params.id
    }
   }
  }
  </script>