<template>
    <h1>Paints</h1>
    <div v-for="paint in paints" :key="paint.id" >
   <router-link :to="{ name : 'PaintDetails', params: { id: paint.id } }">
    <h2>{{ paint.name }}</h2> 
   </router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      paints: [
        { name: "Striking Scorpion Green", id: 1, type: "contrast" },
        { name: "Doomfire Magenta", id: 2, type: "contrast" },
        { name: "Kroxigor Scales", id: 3, type: "contrast" },
      ],
    };
  },
};
</script>
