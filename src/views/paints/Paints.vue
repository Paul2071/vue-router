<template>
    <h1>Paints</h1>
    <div v-for="paint in paints" :key="paint.id" class="paint" >
   <router-link :to="{ name : 'PaintDetails', params: { id: paint.id } }">
    <h2>{{ paint.name }}</h2> 
   </router-link>
    </div>
</template>

<style>

.paint h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444
}
.paint h2:hover {
  background: #ddd
}
.paint a {
  text-decoration: none;
}


</style>
<script>

export default {
  data() {
    return {
      paints: [
       
      ],
    };
  },
  mounted () {
    fetch("http://localhost:3000/painting") 
    .then( res => res.json() )
    .then( data => this.paints = data)
    .catch( err => console.log(err.message))
  }
};
</script>
