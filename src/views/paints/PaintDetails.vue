<template>
    <div v-if="paint">
      <h1> {{ paint.name }}</h1>
      <h2> {{ paint.type }}</h2>
      <p> {{ id }}</p>
    </div>
    
  </template>
  
  <script>
  
  export default {
    props: ['id'],
    data(){
      return {
        paint: null
      }
    },
   
    mounted () {
    fetch("http://localhost:3000/painting/" + this.id) 
    .then( res => res.json() )
    .then( data => this.paint = data)
    .catch( err => console.log(err.message))
  }
  
  }
  </script>